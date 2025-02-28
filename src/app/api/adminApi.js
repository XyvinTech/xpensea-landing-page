import axios from "axios";
import axiosInstance from "./axiosIntercepter";

export const getPlan = async () => {
  try {
    const plan = await axios.get(`http://localhost:3020/api/v1/admin/plan`);

    return plan.data;
  } catch (error) {
    console.log({ error: error.message });
  }
};

export const registerComapny = async (data) => {
  try {
    const response = await axios.post(
      `http://localhost:3020/api/v1/superadmin/register-company`,
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
      `http://localhost:3020/api/v1/superadmin/companies`,
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
      `http://localhost:3020/api/v1/superadmin/verify-email`,
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
      `http://localhost:3020/api/v1/superadmin/verify-otp`,
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
      `http://localhost:3020/api/v1/superadmin/companies`,
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
      `http://localhost:3020/api/v1/superadmin/dashboard/stats`,
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
      `http://localhost:3020/api/v1/superadmin/plan/${data}`,
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
      `http://localhost:3020/api/v1/superadmin/payments`,
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



