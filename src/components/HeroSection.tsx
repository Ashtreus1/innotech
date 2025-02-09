"use client";

import React from "react";
import { motion } from "motion/react";
import { InteractiveHoverButton } from "./ui/interactive-hover-button";

export default function HeroSection() {
    return (
        <div className="flex h-screen justify-center items-center">
            <motion.div
                initial={{ y: "0px" }}
                animate={{ y: "200px" }}
                transition={{ duration: 1, ease: "easeInOut" }}
                className="h-full bg-[radial-gradient(circle,_rgba(0,107,125,1)_0%,_rgba(2,1,37,0)_43%)] absolute top-[-700px] left-0 w-full"
            />
            <div className=" flex justify-center items-center flex-col">
                <div className="flex flex-col gap-8 mb-8">
                    <h1 className="text-6xl relative z-10 text-left font-fjalla max-w-lg flex flex-col gap-4">
                        <div className="flex gap-2">
                            <span>Building</span>
                            <span>Websites</span>
                        </div>
                        <div className="flex gap-2">
                            <span>Innovating</span>
                            <span className="text-sky-500">Solutions</span>.
                        </div>
                    </h1>
                    <p className="text-neutral-200 text-lg text-left max-w-lg">
                        We craft innovative and functional web and mobile
                        solutions that drive impact for businesses and
                        individuals.
                    </p>
                </div>

                <div className="flex flex-row gap-4 flex-start self-start">
                    <InteractiveHoverButton>Works</InteractiveHoverButton>
                    <InteractiveHoverButton>Services</InteractiveHoverButton>
                </div>
            </div>
        </div>
    );
}
