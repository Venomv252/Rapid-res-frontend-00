

export const validation = async (formData, setError) => {
  const { name, email, password, confirmPassword, Phone_number } = formData;

  if (!name || !email || !password || !confirmPassword) {
    setError("All fields are required");
    return false;
  }

  if (password !== confirmPassword) {
    setError("Passwords do not match");
    return false;
  }

  if (password.length < 8) {
    setError("Password must be at least 8 characters long");
    return false;
  }
  if (Phone_number.length != 10) {
    setError("Phone number must be 10 digits long");
    return false;
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    setError("Please enter a valid email address");
    return false;
  }

  return true;
};

export const  handleSignupservice = async (
  formData,
  setError,
  setIsLoading,
  navigate
) => {
  

  try {
    const res = await fetch("http://localhost:5000/api/signup", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        name: formData.name,
        email: formData.email,
        Phone_number: formData.Phone_number,
        password: formData.password,
      }),
    });

    const data = await res.json();
    console.log(data);

    if (!res.ok) {
      throw new Error(data.message || "Signup failed");
    }

    navigate("/login");
  } catch (err) {
    setError(err.message || "An error occurred during signup");
  } finally {
    setIsLoading(false);
  }
};


