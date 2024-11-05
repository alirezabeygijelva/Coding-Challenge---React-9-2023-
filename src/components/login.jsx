import React, { useState } from "react";
import { login } from "../API/auth";
import { Card, CardContent, CardFooter, CardHeader } from "./ui/card";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);
      const response = await login(email, password);
      localStorage.setItem("user", JSON.stringify(response.data.accessToken));
    } catch (error) {
      console.log(error)
      if (error?.response.status === 404) {
        setError("Invalid Credentials");
      } else {
        setError("Something went wrong!");
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center">
      <Card className="w-full max-w-md p-6 shadow-md">
        <CardHeader>
          <div className="flex items-center justify-center relative">
            <h1 className="text-2xl font-bold text-center">Login</h1>
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
            {error && <p className="text-red-500 mb-2">{error}</p>}
            <Button type="submit" className="w-full" disabled={loading}>
              Login
            </Button>
          </form>
        </CardContent>
        <CardFooter className="text-center">
          <div className="flex gap-2">
            {"Don't have an account? "}
            <p
              className="text-blue-500 hover:underline cursor-pointer"
              onClick={() => navigate("/signup")}
            >
              Sign Up
            </p>
          </div>
        </CardFooter>
      </Card>
    </div>
  );
};

export default Login;
