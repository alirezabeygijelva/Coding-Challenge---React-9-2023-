import React, { useState } from "react";
import { register } from "../API/auth";
import { Card, CardContent, CardFooter, CardHeader } from "./ui/card";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { useNavigate } from "react-router-dom";

const Signup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setSuccess("");
    try {
      await register(email, password);
      setSuccess("Account created successfully! You can now log in.");
    } catch (error) {
      setError("Something went wrong!");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center">
      <Card className="w-full max-w-md p-6 shadow-md">
        <CardHeader>
          <div className="flex items-center justify-center relative">
            <h1 className="text-2xl font-bold text-center">Sign Up</h1>
          </div>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label className="block">Email</label>
              <Input
                type="email"
                placeholder="Enter your email"
                className="w-full mt-1"
                name="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div className="mb-4">
              <label className="block">Password</label>
              <Input
                type="password"
                placeholder="Enter your password"
                className="w-full mt-1"
                name="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
            {success && <p className="text-green-500 mb2">{success}</p>}
            {error && <p className="text-red-500 mb-2">{error}</p>}
            <Button type="submit" className="w-full">
              Sign Up
            </Button>
          </form>
        </CardContent>
        <CardFooter className="text-center">
          <div className="flex gap-2">
            {"Already have an account? "}
            <p
              className="text-blue-500 hover:underline cursor-pointer"
              onClick={() => navigate("/login")}
            >
              Login
            </p>
          </div>
        </CardFooter>
      </Card>
    </div>
  );
};

export default Signup;
