import { useRouter } from "next/router";
import React, { useState, useEffect } from "react";

const Signin = () => {
  const [role, setRole] = useState("customer");
  const [isClient, setIsClient] = useState(false); // Track if it's client-side
  const router = useRouter();

  useEffect(() => {
    setIsClient(true); // Set to true when the component is mounted on the client
  }, []);

  const handleLogin = () => {
    if (role === "seller") {
      router.push("/seller/dashboard"); // Navigate to seller dashboard
    } else {
      router.push("/"); // Navigate to customer homepage
    }
  };

  if (!isClient) {
    return null; // Render nothing on the server
  }

  return (
    <div className="signin-container">
      <h2>Sign In</h2>
      <div className="mb-5">
        <label htmlFor="role" className="block mb-2.5">
          Login As
        </label>
        <select
          name="role"
          id="role"
          className="rounded-lg border w-full py-3 px-5"
          onChange={(e) => setRole(e.target.value)}
        >
          <option value="customer">Customer</option>
          <option value="seller">Seller</option>
        </select>
      </div>
      <button
        onClick={handleLogin}
        className="bg-blue text-white px-4 py-2 rounded"
      >
        Login
      </button>
    </div>
  );
};

export default Signin;