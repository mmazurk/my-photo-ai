class OpenAiAPI {
  static async getPhoto(formData) {
    const response = await fetch("/api/photos", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });
    const data = await response.json();
    console.log(data);
    return data;
  }
}

export default OpenAiAPI;
