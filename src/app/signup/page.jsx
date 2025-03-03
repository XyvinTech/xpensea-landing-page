"use client";

import { set, useForm } from "react-hook-form";
import Link from "next/link";
import { useEffect, useState } from "react";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import {
  PaymentElement,
  useStripe,
  useElements,
} from "@stripe/react-stripe-js";
import {
  getPlan,
  registerComapny,
  verifyEmail,
  verifyOtp,
} from "../api/adminApi";
import { toast } from "react-toastify";

const stripePromise = loadStripe(
  process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY
);

const steps = ["Company", "Account", "Plan"];

export default function SignupPage() {
  const [currentStep, setCurrentStep] = useState(0);
  const [selectedPlan, setSelectedPlan] = useState("free");
  const [billingCycle, setBillingCycle] = useState("monthly");
  const [saving, setSaving] = useState(false);
  const [plans, setPlans] = useState([]);
  const [verifying, setVerifying] = useState(false);
  const [otpverify, setOtpverify] = useState(false);
  const [isOtpSent, setIsOtpSent] = useState(false);
  const [isEmailVerified, setIsEmailVerified] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
    trigger,
  } = useForm();

  useEffect(() => {
    const fetchData = async () => {
      const plan = await getPlan();
      setPlans(plan.data);
    };

    fetchData();
  }, []);

  const nextStep = async () => {
    const fields = getFieldsForStep(currentStep);
    const isValid = await trigger(fields);
    if (isValid) {
      setCurrentStep((prev) => prev + 1);
    }
  };

  const prevStep = () => {
    setCurrentStep((prev) => prev - 1);
  };

  const getFieldsForStep = (step) => {
    switch (step) {
      case 0:
        return ["name", "industry", "company_size"];
      case 1:
        return ["admin_name", "email", "phone", "password"];
      case 2:
        return [];
      case 3:
        return selectedPlan === "free"
          ? []
          : ["billing_address", "payment_method"];
      default:
        return [];
    }
  };

  const onSubmit = async (data) => {
    setSaving(true);
    try {
      const formData = {
        name: data.name,
        ownerEmail: data.email,
        address: data.address,
        industry: data.industry,
        plan: selectedPlan,
        admin_name: data.admin_name,
        company_size: data.company_size,
      };
      if (currentStep === 2 && selectedPlan !== "free" && formData.name) {
        const response = await registerComapny(formData);
        window.location.href = response.data;
      }
    } catch (error) {
      console.error("Signup error:", error);
    } finally {
      setSaving(false);
    }
  };

  const handleVerifyEmail = async () => {
    setVerifying(true);
    const email = watch("email");
    const admin_name = watch("admin_name");

    if (!email || !admin_name) {
      return;
    }

    try {
      const response = await verifyEmail({
        email,
        name: admin_name,
      });

      if (response) {
        setIsOtpSent(true);
      }
    } catch (error) {
      toast.error(error.message);
    } finally {
      setVerifying(false);
    }
  };

  const handleVerifyOtp = async () => {
    setOtpverify(true);
    const otp = watch("otp");
    const email = watch("email");

    if (!otp || !email) {
      return;
    }

    try {
      const response = await verifyOtp({
        email,
        otp: otp.toString(),
      });

      if (response.data.success === true) {
        setIsOtpSent(false);
        setIsEmailVerified(true);
      }
    } catch (error) {
      toast.error(error.message);
    } finally {
      setOtpverify(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-md mb-8">
        <Link href="/" className="flex justify-center items-center mb-6">
          <div className="w-10 h-10 bg-blue-600 rounded-xl"></div>
          <span className="ml-2 text-2xl font-bold bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">
            Xpensea
          </span>
        </Link>
      </div>

      <div className="sm:mx-auto sm:w-full sm:max-w-2xl lg:max-w-4xl">
        {/* Progress Steps */}
        <div className="px-4 sm:px-0 mb-8">
          <div className="flex justify-between">
            {steps.map((step, index) => (
              <div
                key={step}
                className={`flex flex-col items-center w-full ${
                  index !== steps.length - 1 ? "relative" : ""
                }`}
              >
                <div
                  className={`w-10 h-10 rounded-full border-2 flex items-center justify-center ${
                    currentStep >= index
                      ? "border-blue-600 bg-blue-600 text-white"
                      : "border-gray-300 text-gray-500"
                  }`}
                >
                  {index + 1}
                </div>
                <div className="mt-2 text-sm font-medium text-gray-500">
                  {step}
                </div>
                {index !== steps.length - 1 && (
                  <div
                    className={`absolute top-5 left-1/2 w-full h-0.5 ${
                      currentStep > index ? "bg-blue-600" : "bg-gray-300"
                    }`}
                  />
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Form Card */}
        <div className="bg-white py-8 px-4 shadow-lg sm:rounded-xl sm:px-10">
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            {/* Step 1: Company Information */}
            {currentStep === 0 && (
              <div className="space-y-6">
                <div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-6">
                    Tell us about your company
                  </h2>
                  <div className="space-y-4">
                    <div>
                      <label
                        htmlFor="name"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Company Name
                      </label>
                      <input
                        {...register("name", {
                          required: "Company name is required",
                        })}
                        type="text"
                        className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        placeholder="Enter company name"
                      />
                      {errors.name && (
                        <p className="mt-1 text-sm text-red-600">
                          {errors.name.message}
                        </p>
                      )}
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label
                          htmlFor="industry"
                          className="block text-sm font-medium text-gray-700"
                        >
                          Industry
                        </label>
                        <select
                          {...register("industry", {
                            required: "Industry is required",
                          })}
                          className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        >
                          <option value="">Select industry</option>
                          {[
                            "Technology",
                            "Finance",
                            "Healthcare",
                            "Manufacturing",
                            "Retail",
                            "Education",
                            "Other",
                          ].map((industry) => (
                            <option key={industry} value={industry}>
                              {industry}
                            </option>
                          ))}
                        </select>
                        {errors.industry && (
                          <p className="mt-1 text-sm text-red-600">
                            {errors.industry.message}
                          </p>
                        )}
                      </div>

                      <div>
                        <label
                          htmlFor="company_size"
                          className="block text-sm font-medium text-gray-700"
                        >
                          Company Size
                        </label>
                        <select
                          {...register("company_size", {
                            required: "Company size is required",
                          })}
                          className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        >
                          <option value="">Select size</option>
                          {[
                            "1-10",
                            "11-50",
                            "51-200",
                            "201-500",
                            "501-1000",
                            "1000+",
                          ].map((size) => (
                            <option key={size} value={size}>
                              {size} employees
                            </option>
                          ))}
                        </select>
                        {errors.company_size && (
                          <p className="mt-1 text-sm text-red-600">
                            {errors.company_size.message}
                          </p>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Step 2: Account Information */}
            {currentStep === 1 && (
              <div className="space-y-6">
                <div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-6">
                    Create your account
                  </h2>
                  <div className="space-y-4">
                    <div>
                      <label
                        htmlFor="admin_name"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Full Name
                      </label>
                      <input
                        {...register("admin_name", {
                          required: "Full name is required",
                        })}
                        type="text"
                        className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        placeholder="Enter your full name"
                      />
                      {errors.admin_name && (
                        <p className="mt-1 text-sm text-red-600">
                          {errors.admin_name.message}
                        </p>
                      )}
                    </div>

                    <div>
                      <label
                        htmlFor="email"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Work Email
                      </label>
                      <div className="mt-1 flex gap-2">
                        <input
                          {...register("email", {
                            required: "Email is required",
                            pattern: {
                              value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                              message: "Invalid email address",
                            },
                          })}
                          type="email"
                          disabled={isEmailVerified}
                          className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                          placeholder="you@company.com"
                        />
                      </div>
                      {errors.email && (
                        <p className="mt-1 text-sm text-red-600">
                          {errors.email.message}
                        </p>
                      )}
                      <div className="mt-2 flex  justify-end">
                        {!isOtpSent && !isEmailVerified && (
                          <button
                            type="button"
                            onClick={handleVerifyEmail}
                            className="px-4 py-2 border border-transparent text-sm font-medium rounded-lg shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                          >
                            {verifying ? "Sending OTP..." : "Verify Email"}
                          </button>
                        )}
                      </div>
                    </div>

                    {isOtpSent && !isEmailVerified && (
                      <div className="mt-4">
                        <label
                          htmlFor="otp"
                          className="block text-sm font-medium text-gray-700"
                        >
                          Enter OTP
                        </label>
                        <div className="mt-1 flex gap-2">
                          <input
                            {...register("otp", {
                              required: "OTP is required",
                            })}
                            type="text"
                            className="block w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                            placeholder="Enter OTP sent to your email"
                          />
                        </div>
                        <div className="mt-2 flex justify-end">
                          {" "}
                          <button
                            type="button"
                            onClick={handleVerifyOtp}
                            className="px-4 py-2 border border-transparent text-sm font-medium rounded-lg shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                          >
                            {otpverify ? "Verifying..." : "Verify OTP"}
                          </button>
                        </div>
                      </div>
                    )}

                    {isEmailVerified && (
                      <div className="mt-4 rounded-md bg-green-50 p-4">
                        <div className="flex">
                          <div className="flex-shrink-0">
                            <svg
                              className="h-5 w-5 text-green-400"
                              viewBox="0 0 20 20"
                              fill="currentColor"
                            >
                              <path
                                fillRule="evenodd"
                                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                                clipRule="evenodd"
                              />
                            </svg>
                          </div>
                          <div className="ml-3">
                            <p className="text-sm font-medium text-green-800">
                              Email verified successfully
                            </p>
                          </div>
                        </div>
                      </div>
                    )}

                    <div>
                      <label
                        htmlFor="phone"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Phone Number
                      </label>
                      <input
                        {...register("phone")}
                        type="tel"
                        className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        placeholder="+1 (555) 000-0000"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="Address"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Address
                      </label>
                      <input
                        {...register("address")}
                        type="address"
                        className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        placeholder="address"
                      />
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Step 3: Plan Selection */}
            {currentStep === 2 && (
              <div className="space-y-6">
                <div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-6">
                    Choose your plan
                  </h2>

                  <div className="flex justify-center mb-8">
                    <div className="flex items-center space-x-2 bg-gray-100 p-1 rounded-lg">
                      <button
                        type="button"
                        onClick={() => setBillingCycle("monthly")}
                        className={`px-4 py-2 rounded-md text-sm font-medium ${
                          billingCycle === "monthly"
                            ? "bg-white text-blue-600 shadow-sm"
                            : "text-gray-500 hover:text-gray-900"
                        }`}
                      >
                        Monthly
                      </button>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {plans.map((plan) => (
                      <div
                        key={plan._id}
                        onClick={() => setSelectedPlan(plan._id)}
                        className={`relative rounded-xl border-2 p-6 cursor-pointer transition-all duration-200 ${
                          selectedPlan === plan._id
                            ? "border-blue-600 bg-blue-50"
                            : "border-gray-200 hover:border-blue-600 hover:shadow-md"
                        }`}
                      >
                        {plan.popular && (
                          <span className="absolute top-0 right-6 -translate-y-1/2 bg-blue-600 text-white text-xs px-3 py-1 rounded-full">
                            Popular
                          </span>
                        )}
                        <div className="flex flex-col h-full">
                          <h3 className="text-lg font-semibold text-gray-900">
                            {plan.name}
                          </h3>
                          <div className="mt-2">
                            <span className="text-2xl font-bold text-gray-900">
                              {plan.price}
                            </span>
                            <span className="text-gray-500">/month</span>
                          </div>
                          <ul className="mt-6 space-y-4 flex-grow">
                            {plan.features.map((feature) => (
                              <li
                                key={feature}
                                className="flex items-center text-sm text-gray-600"
                              >
                                <svg
                                  className="mr-3 h-5 w-5 text-blue-500"
                                  fill="none"
                                  stroke="currentColor"
                                  viewBox="0 0 24 24"
                                >
                                  <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M5 13l4 4L19 7"
                                  />
                                </svg>
                                {feature}
                              </li>
                            ))}
                          </ul>
                          <div
                            className={`mt-8 w-full py-3 px-4 rounded-lg text-sm font-medium transition-colors ${
                              selectedPlan === plan._id
                                ? "bg-blue-600 text-white hover:bg-blue-700"
                                : "bg-white text-blue-600 border border-blue-600 hover:bg-blue-50"
                            }`}
                          >
                            {selectedPlan === plan._id
                              ? "Selected"
                              : "Select Plan"}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}

            <div className="flex justify-between mt-8">
              {currentStep > 0 && (
                <button
                  type="button"
                  onClick={prevStep}
                  className="inline-flex items-center px-4 py-2 border border-gray-300 shadow-sm text-sm font-medium rounded-lg text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                >
                  Previous
                </button>
              )}
              {currentStep < steps.length - 1 &&
              (currentStep !== 1 || isEmailVerified) ? (
                <button
                  type="button"
                  onClick={nextStep}
                  className="ml-auto inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-lg shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                >
                  Next
                </button>
              ) : (
                currentStep === 2 && (
                  <button
                    onClick={onSubmit}
                    className="ml-auto inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-lg shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                  >
                    {saving
                      ? "Please wait... Redirecting you..."
                      : "Complete Signup"}
                  </button>
                )
              )}
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
