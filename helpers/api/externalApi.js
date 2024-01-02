
import axios from "axios";

const BASE_URL = 'https://api.openai.com/v1/images/';

class OpenAiAPI {

  static token;

  static async request(endpoint, data = {}, method = "post") {
    console.debug("API Call:", endpoint, data, method);

    const url = `${BASE_URL}/${endpoint}`;
    const headers = { Authorization: `Bearer ${OpenAiAPI.token}` };
    const params = method === "get" ? data : {};

    try {
      return (await axios({ url, method, data, params, headers })).data;
    } catch (err) {
      console.error("API Error:", err.response);
      let message = err.response.data.error.message;
      throw Array.isArray(message) ? message : [message];
    }
  }

  static async getPhoto(formData) {
    let res = await this.request(`generations`, formData, "post");
    return res.data;
  }

}

// OpenAiAPI.token = process.env.REACT_APP_OPEN_API_TOKEN;
OpenAiAPI.token = process.env.OPEN_API_TOKEN;

export default OpenAiAPI; 