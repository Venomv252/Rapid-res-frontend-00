import axios from "axios";

export const validation = (formData, setError) => {
  if (!formData.name || !formData.email || !formData.phoneNumber || !formData.password || !formData.confirmPassword) {
    setError("All fields are required.");
    return false;
  }
  
  if (formData.password.length < 6) {
    setError("Password must be at least 6 characters long.");
    return false;
  }
  
  if (formData.password !== formData.confirmPassword) {
    setError("Passwords do not match.");
    return false;
  }
  
  // Basic email validation
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(formData.email)) {
    setError("Please enter a valid email address.");
    return false;
  }
  
  // Phone number validation (basic)
  if (formData.phoneNumber.length < 10) {
    setError("Please enter a valid phone number.");
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

