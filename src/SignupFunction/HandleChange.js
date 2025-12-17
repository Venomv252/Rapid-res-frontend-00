import axios from "axios";

export const validation = (formData, setError) => {
  if (!formData.name || !formData.email || !formData.phoneNumber) {
    setError("All fields are required.");
    return false;
  }
  if (formData.password !== formData.confirmPassword) {
    setError("Passwords do not match.");
    return false;
  }
  return true;
};

export const handleSignupservice = async (formData, setError, setIsLoading, navigate) => {
  setIsLoading(true);
  try {
    const res = await axios.post(
      "https://rapid-res-backend.onrender.com/api/signup",   // ⭐ correct backend URL
      {
        name: formData.name,
        email: formData.email,
        password: formData.password,
        phoneNumber: formData.phoneNumber
      }
    );

    if (res.status === 200) {
      navigate("/login");
    }
  } catch (err) {
    setError(err.response?.data?.message || "Signup failed");
  } finally {
    setIsLoading(false);
  }
};

