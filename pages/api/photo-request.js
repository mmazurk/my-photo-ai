import axios from "axios";

export default async function handler(req, res) {
  const data = req.body;
  try {
    const response = await axios({
      method: "post",
      url: "https://api.openai.com/v1/images/generations",
      data: data,
      headers: {
        Authorization: `Bearer ${process.env.OPEN_API_TOKEN}`,
        "Content-Type": "application/json",
      },
      params: {},
    });
    console.log(response.data);
    res.status(200).json(response.data);
  } catch (err) {
    console.error("API Error:", err.response);
    res.status(500).json({ error: "Error getting photo" });
  }
}
