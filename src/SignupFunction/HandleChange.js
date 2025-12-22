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
    console.log("Attempting signup with data:", {
      name: formData.name,
      email: formData.email,
      phoneNumber: formData.phoneNumber
    });

    const res = await axios.post(
      "https://rapid-res-backend.onrender.com/api/signup",
      {
        name: formData.name,
        email: formData.email,
        password: formData.password,
        phoneNumber: formData.phoneNumber
      },
      {
        headers: {
          'Content-Type': 'application/json',
        },
        timeout: 10000 // 10 second timeout
      }
    );

    console.log("Signup response:", res.data);

    if (res.status === 200) {
      navigate("/login");
    }
  } catch (err) {
    console.error("Signup error:", err);
    
    if (err.code === 'ECONNABORTED') {
      setError("Request timeout. Please try again.");
    } else if (err.response) {
      // Server responded with error status
      setError(err.response.data?.message || `Server error: ${err.response.status}`);
    } else if (err.request) {
      // Request was made but no response received
      setError("Network error. Please check your connection and try again.");
    } else {
      // Something else happened
      setError(err.message || "Signup failed. Please try again.");
    }
  } finally {
    setIsLoading(false);
  }
};

