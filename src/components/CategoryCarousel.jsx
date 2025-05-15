import React from "react";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "./ui/carousel";
import { Button } from "./ui/button";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { setSearchQurey } from "@/redux/jobSlice";

function CategoryCarousel() {
  const catagory = [
    "Frontend Devloper",
    "Backend Devloper",
    "Data Science",
    "Graphic Designer",
    "Full Stack Devloper",
  ];

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const searchJobHandler = (qurey) => {
      dispatch(setSearchQurey(qurey));
      navigate("/browse");
    };

  return (
    <div>
      <Carousel className="w-full max-w-md mx-auto">
        <CarouselContent>
          {catagory.map((cat, index) => (
            <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
               <Button onClick={()=>searchJobHandler(cat)} className="bg-[#903b3b] hover:bg-[#be5555]">{cat}</Button>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="bg-black text-white"/>
        <CarouselNext className="bg-[black] text-white" />
      </Carousel>
    </div>
  );
}

export default CategoryCarousel;
