import React from "react";

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { useState } from "react";
import { useDispatch } from "react-redux";
import axios from "axios";
import { setCredentials } from "@/slices/authSlice";
import { useLocation, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { RootState } from "@/store";
import { useEffect } from "react";
import AuthLayout from "@/components/AuthLayout";
function LoginScreen() {
  const dispatch = useDispatch();
  const search = useLocation();
  const navigate = useNavigate();
  const sp = new URLSearchParams(search.search);
  const redirect = sp.get("redirect") || "/";
  const userInfo = useSelector((state: RootState) => state.auth.userInfo);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  useEffect(() => {
    if (userInfo) {
      navigate(redirect);
    }
  }, [navigate, redirect, userInfo]);
  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      console.log("username:" + email);
      console.log("password:" + password);
      const res = await axios.post(
        "http://localhost:3000/users/auth",
        {
          username: email,
          password,
        },
        { withCredentials: true }
      );
      // console.log(res.data);
      navigate(redirect);
      dispatch(setCredentials(res.data));
    } catch (error) {
      console.log(error);
    }
  };
  const registerHandler = () => {
    navigate("/register");
  };

  return (
    <AuthLayout onSubmit={onSubmit} title="Sign In">
      <div className="space-y-2">
        <Label>Email</Label>
        <Input
          placeholder="email"
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        />
      </div>
      <div className="space-y-2">
        <Label>Password</Label>
        <Input
          placeholder="password"
          type="password"
          onChange={(e) => {
            setPassword(e.target.value);
          }}
        ></Input>
      </div>
      <Button className="w-full" type="submit">
        Submit
      </Button>
      <Separator className="my-4" />
      <div className="flex items-center">
        <span>New customer?</span>
        <Button variant={"link"} onClick={registerHandler}>
          Register
        </Button>
      </div>
    </AuthLayout>
  );
}

export default LoginScreen;
