"use client";

import React from "react";
import { motion } from "motion/react";
import { InteractiveHoverButton } from "./ui/interactive-hover-button";
import Link from "next/link";

export default function HeroSection() {
    return (
        <div className="relative flex h-screen justify-center items-center px-4">
            <motion.div
                initial={{ y: "0px" }}
                animate={{ y: "200px" }}
                transition={{ duration: 1, ease: "easeInOut" }}
                className="absolute top-[-500px] sm:top-[-700px] left-0 w-full h-full bg-[radial-gradient(circle,_rgba(0,107,125,1)_0%,_rgba(2,1,37,0)_43%)]"
            />
            <div className="relative flex flex-col justify-center items-center">
                {/* Animated Text Container */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="flex flex-col gap-6 mb-8 max-w-lg"
                >
                    <motion.h1
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2, duration: 0.8 }}
                        className="relative z-10 text-left font-fjalla flex flex-col gap-2 text-4xl sm:text-5xl md:text-7xl"
                    >
                        <div className="flex flex-row flex-wrap gap-2 mb-4">
                            <span>Building</span>
                            <span>Websites</span>
                        </div>
                        <div className="flex flex-row gap-2">
                            <span>Innovating</span>
                            <span className="text-sky-500">Solutions</span>.
                        </div>
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.4, duration: 0.8 }}
                        className="text-neutral-200 text-left text-base sm:text-lg"
                    >
                        We craft innovative and functional web and mobile
                        solutions that drive impact for businesses and
                        individuals.
                    </motion.p>
                </motion.div>
                {/* Animated Button Container */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6, duration: 0.8, ease: "easeOut" }}
                    className="flex flex-row self-start gap-4"
                >
                    <Link href="#works">
                        <InteractiveHoverButton>Works</InteractiveHoverButton>
                    </Link>
                    <Link href="#services">
                        <InteractiveHoverButton>
                            Services
                        </InteractiveHoverButton>
                    </Link>
                </motion.div>
            </div>
        </div>
    );
}
