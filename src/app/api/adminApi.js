import axios from "axios";
import axiosInstance from "./axiosIntercepter";
const BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL;
export const getPlan = async () => {
  try {
    const plan = await axios.get(`${BASE_URL}/admin/plan`);
    return plan.data;
  } catch (error) {
    console.log({ error: error.message });
  }
};

export const registerComapny = async (data) => {
  try {
    const response = await axios.post(
      `${BASE_URL}/superadmin/register-company`,
      data
    );

    return response.data;
  } catch (error) {
    console.log({ error: error.message });
  }
};

export const getCompany = async () => {
  try {
    const response = await axios.post(
      `${BASE_URL}/superadmin/companies`,
      data
    );

    return response.data;
  } catch (error) {
    console.log({ error: error.message });
  }
};

export const verifyEmail = async (data) => {
  try {
    const response = await axios.post(
      `${BASE_URL}/superadmin/verify-email`,
      data
    );
    return response.data;
  } catch (error) {
    if (error.response) {
      throw new Error(error.response.data.message || "Failed to verify email");
    }
    throw error;
  }
};

export const verifyOtp = async (data) => {
  try {
    const response = await axios.post(
      `${BASE_URL}/superadmin/verify-otp`,
      data
    );
    return response.data;
  } catch (error) {
    if (error.response) {
      throw new Error(error.response.data.message || "Failed to verify OTP");
    }
    throw error;
  }
};

export const getComponies = async (data) => {
  try {
    const response = await axiosInstance.get(
      `${BASE_URL}/superadmin/companies`,
      data
    );
    return response.data;
  } catch (error) {
    if (error.response) {
      throw new Error(error.response.data.message || "Failed to verify OTP");
    }
    throw error;
  }
};


export const getDashboard = async (data) => {
  try {
    const response = await axiosInstance.get(
      `${BASE_URL}/superadmin/dashboard/stats`,
      data
    );
    return response.data;
  } catch (error) {
    if (error.response) {
      throw new Error(error.response.data.message || "Failed to verify OTP");
    }
    throw error;
  }
};

export const getPlanById = async (data) => {
  try {
    const response = await axiosInstance.get(
      `${BASE_URL}/superadmin/plan/${data}`,
      data
    );
    return response.data;
  } catch (error) {
    if (error.response) {
      throw new Error(error.response.data.message);
    }
    throw error;
  }
};


export const getPayments = async (data) => {
  try {
    const response = await axiosInstance.get(
      `${BASE_URL}/superadmin/payments`,
      data
    );
    return response.data;
  } catch (error) {
    if (error.response) {
      throw new Error(error.response.data.message);
    }
    throw error;
  }
};



