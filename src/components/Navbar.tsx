"use client";

import { ArrowRight } from "lucide-react";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { Button } from "./ui/button";
import Link from "next/link";
import { motion } from "motion/react";

export default function Navbar() {
    const [scrollDirection, setScrollDirection] = useState("up");

    useEffect(() => {
        let lastScrollY = window.scrollY;

        const handleScroll = () => {
            if (window.scrollY > lastScrollY) {
                setScrollDirection("down");
            } else {
                setScrollDirection("up");
            }
            lastScrollY = window.scrollY;
        };

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <div className="fixed top-0 left-1/2 -translate-x-1/2 z-20">
            <motion.div
                className="flex px-8 py-2 my-2 bg-opacity-50 rounded-full bg-neutral-800 flex-row items-center gap-12"
                initial={{ y: 0 }}
                animate={{ y: scrollDirection === "down" ? "-100%" : "0%" }}
                transition={{ duration: 0.3, ease: "easeInOut", delay: 0.5 }}
            >
                <Link href="/">
                    <Image
                        className="m-2 relative hover:opacity-50 transition"
                        alt="icon"
                        height={28}
                        width={28}
                        src="/whiteinnotech_transparent.svg"
                    />
                </Link>
                <Button className="bg-sky-500 hover:bg-sky-700 cursor-pointer p-5 rounded-full shadow-lg">
                    <Link href="/contact" className="group text-white flex gap-2 items-center justify-center font-bold text-base tracking-wide">
                        Let&apos;s talk
                        <ArrowRight className="transition-transform group-hover:translate-x-2" />
                    </Link>
                </Button>
            </motion.div>
        </div>
    );
}
