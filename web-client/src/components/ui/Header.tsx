import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "./button";
import { User } from "lucide-react";
import { useSelector } from "react-redux";
import { RootState } from "@/store";
import { LogOut } from "lucide-react";
import axios from "axios";
import { USER_API } from "@/constants";
import { useDispatch } from "react-redux";
import { logout } from "@/slices/authSlice";
export const Header = () => {
  const navigate = useNavigate();
  const userInfo = useSelector((store: RootState) => store.auth.userInfo);
  const dispatch = useDispatch();
  const SignInHandler = () => {
    navigate("/login");
    console.log("Sign in");
  };
  const LogOutHandler = async () => {
    try {
      const res = await axios.post(
        `${USER_API}/logout`,
        {},
        { withCredentials: true }
      );
      dispatch(logout({}));
    } catch (error) {
      console.log(error);
    }
    // dispatch(logout());
    navigate("/");
    console.log("LogOut");
  };
  return (
    <header className="bg-blue-500 w-full">
      <div className="flex w-full justify-between text-primary-foreground bg-primary items-center px-3 py-2">
        <Link to="/">
          <div className="flex items-center ">
            <img
              src="../../../assets/logo.png"
              className="h-10 w-auto object-contain"
            />
            <span className="text-primary-foreground">ProShop</span>
          </div>
        </Link>
        {userInfo ? (
          <Button variant={"ghost"} onClick={LogOutHandler}>
            <LogOut className="h-5 w-5" />
            <span className="ml-2">Log out</span>
          </Button>
        ) : (
          <Button variant={"ghost"} onClick={SignInHandler}>
            <User className="h-5 w-5" />

            <span className="ml-2">Sign in</span>
          </Button>
        )}
      </div>
    </header>
  );
};
