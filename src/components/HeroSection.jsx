import React, { useState } from "react";
import { Button } from "./ui/button";
import { Search } from "lucide-react";
import { useDispatch } from "react-redux";
import { setSearchQurey } from "@/redux/jobSlice";
import { useNavigate } from "react-router-dom";

function HeroSection() {
  const [qurey, setQurey] = useState("");

  const dispatch = useDispatch();
  const navigate = useNavigate();
  

  const searchJobHandler = () => {
    dispatch(setSearchQurey(qurey));
    navigate("/browse");
  };

  return (
    <div className="text-center">
      <div className="flex flex-col gap-5 my-10">
        <span className="mx-auto px-4 py-2 rounded-md bg-gray-100 text-[#903b3b] font-medium">
          No. 1 Job Hunt Website
        </span>
        <h1 className="text-5xl font-bold">
          Search, Apply & <br /> Get Your{" "}
          <span className="text-[#903b3b]">Dream Jobs</span>
        </h1>

        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Hic earum
          eos molestiae sunt sapiente.
        </p>
        <div className="flex w-[40%] shadow-lg border border-gray-200 pl-3 rounded-md items-center gap-4 mx-auto">
          <input
            onChange={(e) => setQurey(e.target.value)}
            type="text"
            placeholder="Find your dream jobs"
            className="outline-none border-none w-full"
          />
          <Button
            onClick={searchJobHandler}
            className="rounded-r-md rounded-l-none bg-[#903b3b] hover:bg-[#be5555]"
          >
            <Search className="h-5 w-5"></Search>
          </Button>
        </div>
      </div>
    </div>
  );
}

export default HeroSection;
