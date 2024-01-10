import axios from "axios";

export default async function handler(req, res) {
  const data = req.body;
  console.log("Data passed to API", data);
  res.status(200).json([
    {
      url: "https://plus.unsplash.com/premium_photo-1703703954453-a647dc3b2347?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      revised_prompt: "Whatever",
    },
  ]);
  // try {
  //   const response = await axios({
  //     method: "post",
  //     url: "https://api.openai.com/v1/images/generations",
  //     data: data,
  //     headers: {
  //       Authorization: `Bearer ${process.env.OPEN_API_TOKEN}`,
  //       "Content-Type": "application/json",
  //     },
  //     params: {},
  //   });
  //   res.status(200).json(response.data);
  // } catch (err) {
  //   console.error("API Error:", err.response);
  //   res.status(500).json({ error: "Error getting photo" });
  // }
}
