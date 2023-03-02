import axios from "axios";

axios.defaults.baseURL = process.env.REACT_APP_SERVER_DOMAIN;

export const generateAIImage = async ({ prompt, size }) => {
  try {
    const {
      data: { imageUrl },
    } = await axios.post("/openai/generateimage", { prompt, size });

    return imageUrl;
  } catch (e) {
    return e;
  }
};
