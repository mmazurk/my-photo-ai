export async function signUp(formData) {
  try {
    let token = await MyPhotoAPI.signUpUser(formData);
    if (token) {
      localStorage.setItem("myAItoken", token);
    }
    return { status: true };
  } catch (err) {
    console.error("signup() failed with these errors:", err);
    return { status: false, err };
  }
}

export async function logout() {
  localStorage.removeItem("myAItoken");
}

export async function login(formData) {
  try {
    const token = await MyPhotoAPI.authUser(formData);
    if (token) {
      localStorage.setItem("myAItoken", token);
      return "success";
    }
  } catch (err) {
    return err;
  }
}
