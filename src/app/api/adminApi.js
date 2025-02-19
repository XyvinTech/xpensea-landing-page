import axios from "axios";

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
      `http://localhost:3020/api/v1/user/register-company`,
      data
    );

    return response.data;
  } catch (error) {
    console.log({ error: error.message });
  }
};
