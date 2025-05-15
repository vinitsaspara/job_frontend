import React, { useEffect, useState } from "react";
import Navbar from "../shared/Navbar";
import { Label } from "../ui/label";
import { Input } from "../ui/input";
import { RadioGroup } from "../ui/radio-group";
import { Button } from "../ui/button";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { toast } from "sonner";
import { useDispatch, useSelector } from "react-redux";
import { setLoading, setUser } from "@/redux/authSlice";
import { Loader2 } from "lucide-react";

function Login() {
  const [input, setInput] = useState({
    email: "",
    password: "",
    role: "",
  });
  const navigate = useNavigate();

  const dispatch = useDispatch();
  const { loading, user } = useSelector((store) => store.auth);

  const changeEventHandler = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };

  const submitHandler = async (e) => {
    e.preventDefault();

    try {
      dispatch(setLoading(true));

      const res = await axios.post(
        `https://job-backend-ed7z.onrender.com/api/v1/user/login`,
        input,
        {
          headers: {
            "Content-Type": "application/json",
          },
          withCredentials: true,
        }
      );
      if (res.data.success) {
        dispatch(setUser(res.data.user));
        navigate("/");
        toast.success(res.data.message);
      }
    } catch (error) {
      console.log(error);
      toast.error(error.response.data.message);
    } finally {
      dispatch(setLoading(false));
    }
  };

  useEffect(() => {
    if (user) {
      navigate("/");
    }
  });

  return (
    <div>
      <Navbar />
      <div className="flex items-center justify-center max-w-7xl m-auto">
        <form
          onSubmit={submitHandler}
          className="w-1/3 rounded-md p-4 my-10"
          style={{ border: "1px solid gray" }}
        >
          <h1 className="font-bold text-xl mb-5">Login</h1>
          <div className="my-2">
            <Label>Email</Label>
            <Input
              type="email"
              placeholder="rolex@gmail.com"
              value={input.email}
              name="email"
              onChange={changeEventHandler}
            ></Input>
          </div>
          <div className="my-2">
            <Label>Password</Label>
            <Input
              type="password"
              placeholder="rolex@gmail.com"
              value={input.password}
              name="password"
              onChange={changeEventHandler}
            ></Input>
          </div>
          <div className="flex items-center justify-between">
            <RadioGroup className="flex items-center gap-4 my-5">
              <div className="flex items-center space-x-2">
                <Input
                  type="radio"
                  name="role"
                  value="student"
                  checked={input.role === "student"}
                  onChange={changeEventHandler}
                  className="cursor-pointer"
                />
                <Label htmlFor="r1">Student</Label>
              </div>
              <div className="flex items-center space-x-2">
                <Input
                  type="radio"
                  name="role"
                  value="recruiter"
                  checked={input.role === "recruiter"}
                  onChange={changeEventHandler}
                  className="cursor-pointer"
                />
                <Label htmlFor="r2">Recruiter</Label>
              </div>
            </RadioGroup>
          </div>

          {loading ? (
            <Button className="w-full my-4">
              {" "}
              <Loader2 className="mr-2 h-4 w-4 animate-spin"></Loader2>{" "}
              Please wait
            </Button>
          ) : (
            <Button type="submit" className="w-full">
              Login
            </Button>
          )}

          <span className="text-sm">
            Don't have an aaccount?{" "}
            <Link to="/signup" className="text-blue-500">
              Sign Up
            </Link>
          </span>
        </form>
      </div>
    </div>
  );
}

export default Login;
