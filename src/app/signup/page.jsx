"use client";

import { useForm } from "react-hook-form";
import Link from "next/link";
import { useState } from "react";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/stripe-js/pure";
import {
  PaymentElement,
  useStripe,
  useElements,
} from "@stripe/react-stripe-js";

const stripePromise = loadStripe(
  process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY
);

const steps = ["Company", "Account", "Plan", "Payment"];

export default function SignupPage() {
  const [currentStep, setCurrentStep] = useState(0);
  const [selectedPlan, setSelectedPlan] = useState("free");
  const [billingCycle, setBillingCycle] = useState("monthly");
  const [clientSecret, setClientSecret] = useState("");

  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
    trigger,
  } = useForm();

  const plans = [
    {
      id: "free",
      name: "Free",
      price: { monthly: "₹0", yearly: "₹0" },
      features: ["5 Users", "Basic Features", "Email Support"],
    },
    {
      id: "basic",
      name: "Basic",
      price: { monthly: "₹99", yearly: "$299.90" },
      features: ["10 Users", "Basic Features", "Email Support", "Analytics"],
    },
    {
      id: "enterprise",
      name: "Enterprise",
      price: { monthly: "₹199", yearly: "$4,999.90" },
      features: [
        "Unlimited Users",
        "All Features",
        "24/7 Support",
        "Custom Integration",
        "Dedicated Account Manager",
      ],
    },
  ];

  const nextStep = async () => {
    const fields = getFieldsForStep(currentStep);
    const isValid = await trigger(fields);
    if (isValid) {
      if (currentStep === 2 && selectedPlan !== "free") {
        // Create payment intent before moving to payment step
        try {
          const response = await fetch("/api/create-payment-intent", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
              plan: selectedPlan,
              billingCycle,
            }),
          });
          const data = await response.json();
          setClientSecret(data.clientSecret);
        } catch (error) {
          console.error("Error creating payment intent:", error);
          return;
        }
      }
      setCurrentStep((prev) => prev + 1);
    }
  };

  const prevStep = () => {
    setCurrentStep((prev) => prev - 1);
  };

  const getFieldsForStep = (step) => {
    switch (step) {
      case 0:
        return ["company_name", "industry", "company_size"];
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
    try {
      const formData = {
        ...data,
        subscription_plan: selectedPlan,
        billing_cycle: billingCycle,
        subscription_status: "active",
        role: "super_admin",
        gdpr_consent: true,
      };

      const response = await fetch("/api/auth/signup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error("Signup failed");
      }

      // Handle successful signup (redirect to dashboard, etc.)
    } catch (error) {
      console.error("Signup error:", error);
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
                        htmlFor="company_name"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Company Name
                      </label>
                      <input
                        {...register("company_name", {
                          required: "Company name is required",
                        })}
                        type="text"
                        className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        placeholder="Enter company name"
                      />
                      {errors.company_name && (
                        <p className="mt-1 text-sm text-red-600">
                          {errors.company_name.message}
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
                      <input
                        {...register("email", {
                          required: "Email is required",
                          pattern: {
                            value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                            message: "Invalid email address",
                          },
                        })}
                        type="email"
                        className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        placeholder="you@company.com"
                      />
                      {errors.email && (
                        <p className="mt-1 text-sm text-red-600">
                          {errors.email.message}
                        </p>
                      )}
                    </div>

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
                        htmlFor="password"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Password
                      </label>
                      <input
                        {...register("password", {
                          required: "Password is required",
                          minLength: {
                            value: 8,
                            message: "Password must be at least 8 characters",
                          },
                        })}
                        type="password"
                        className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        placeholder="Create a secure password"
                      />
                      {errors.password && (
                        <p className="mt-1 text-sm text-red-600">
                          {errors.password.message}
                        </p>
                      )}
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
                        key={plan.id}
                        onClick={() => setSelectedPlan(plan.id)}
                        className={`relative rounded-xl border-2 p-6 cursor-pointer transition-all duration-200 ${
                          selectedPlan === plan.id
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
                              {plan.price[billingCycle]}
                            </span>
                            <span className="text-gray-500">
                              /{billingCycle === "monthly" ? "mo" : "yr"}
                            </span>
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
                          <button
                            type="button"
                            className={`mt-8 w-full py-3 px-4 rounded-lg text-sm font-medium transition-colors ${
                              selectedPlan === plan.id
                                ? "bg-blue-600 text-white hover:bg-blue-700"
                                : "bg-white text-blue-600 border border-blue-600 hover:bg-blue-50"
                            }`}
                          >
                            {selectedPlan === plan.id
                              ? "Selected"
                              : "Select Plan"}
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {/* Step 4: Payment Information */}
            {currentStep === 3 && (
              <div className="space-y-6">
                <div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-6">
                    {selectedPlan === "free"
                      ? "Complete Registration"
                      : "Payment Details"}
                  </h2>

                  {selectedPlan !== "free" && clientSecret && (
                    <Elements
                      stripe={stripePromise}
                      options={{
                        clientSecret,
                        appearance: { theme: "stripe" },
                      }}
                    >
                      <PaymentForm />
                    </Elements>
                  )}

                  <div className="mt-6">
                    <div className="flex items-center">
                      <input
                        {...register("gdpr_consent", {
                          required: "You must accept the terms and conditions",
                        })}
                        type="checkbox"
                        className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                      />
                      <label
                        htmlFor="gdpr_consent"
                        className="ml-2 block text-sm text-gray-900"
                      >
                        I agree to the{" "}
                        <Link
                          href="/terms"
                          className="text-blue-600 hover:text-blue-500"
                        >
                          Terms of Service
                        </Link>{" "}
                        and{" "}
                        <Link
                          href="/privacy"
                          className="text-blue-600 hover:text-blue-500"
                        >
                          Privacy Policy
                        </Link>
                      </label>
                    </div>
                    {errors.gdpr_consent && (
                      <p className="mt-1 text-sm text-red-600">
                        {errors.gdpr_consent.message}
                      </p>
                    )}
                  </div>
                </div>
              </div>
            )}

            {/* Navigation Buttons */}
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
              {currentStep < steps.length - 1 ? (
                <button
                  type="button"
                  onClick={nextStep}
                  className="ml-auto inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-lg shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                >
                  Next
                </button>
              ) : (
                <button
                  type="submit"
                  className="ml-auto inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-lg shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                >
                  Complete Sign Up
                </button>
              )}
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

function PaymentForm() {
  const stripe = useStripe();
  const elements = useElements();
  const [error, setError] = useState(null);
  const [processing, setProcessing] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!stripe || !elements) return;

    setProcessing(true);

    const { error } = await stripe.confirmPayment({
      elements,
      confirmParams: {
        return_url: `${window.location.origin}/dashboard`,
      },
    });

    if (error) {
      setError(error.message);
      setProcessing(false);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <PaymentElement />
      {error && <div className="text-red-600 mt-2 text-sm">{error}</div>}
      <button
        type="submit"
        disabled={!stripe || processing}
        className="mt-4 w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 disabled:opacity-50"
      >
        {processing ? "Processing..." : "Pay now"}
      </button>
    </form>
  );
}
