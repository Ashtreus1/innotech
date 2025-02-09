"use client";

import { reasons } from "@/data/choose-us";
import { Handshake, HandCoins, Star } from "lucide-react";

export default function WhyChooseUs() {
    const icons = {
        Handshake,
        HandCoins,
        Star,
    };

    return (
        <div className="relative flex flex-col justify-center items-center my-12 min-h-[80vh]">
            <p className="text-md font-semibold  text-center">
                Why Choose Our
            </p>
            <h1 className="text-5xl font-bold text-cyan-400 mt-3 uppercase text-center">
                Services
            </h1>
            <div className="flex flex-wrap justify-center items-center mt-5 gap-5">
                {reasons.map((reason, index) => {
                    const Icon = icons[reason.icon as keyof typeof icons];
                    return (
                        <div
                            key={index}
                            className="group flex 
                                   flex-col 
                                   items-center 
                                   rounded-md 
                                   p-10 
                                   w-80 
                                   h-64
                                   cursor-pointer
                                   hover:scale-105
                                   hover:bg-[#1e1e1e]
                                   transition-all"
                        >
                            <div className="flex justify-between items-center w-full mb-5">
                                <Icon
                                    size={24}
                                    className="group-hover:text-cyan-400 transition-colors"
                                />
                                <span className="font-bold group-hover:text-cyan-400 transition-colors">
                                    0{index + 1}
                                </span>
                            </div>
                            <p className="font-bold mb-5 text-xl text-left w-full group-hover:text-cyan-400 transition-colors">
                                {reason.title}
                            </p>
                            <p className="group-hover:text-white text-gray-400 text-left w-full">
                                {reason.description}
                            </p>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}
