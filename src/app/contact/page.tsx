"use client"

import { CTA2 } from "@/components/CallToActionForm";
import CTASocials1 from "@/components/CallToActionSocials";
import Footer from "@/components/footer";
import React from "react";
import { motion } from "motion/react";

export default function ContactForm() {
    return (
        <div>
            <motion.div
                initial={{ y: "0px" }}
                animate={{ y: "200px" }}
                transition={{ duration: 1, ease: "easeInOut" }}
                className="h-full bg-[radial-gradient(circle,_rgba(0,107,125,1)_0%,_rgba(2,1,37,0)_43%)] absolute top-[-700px] left-0 w-full"
            />
            <CTA2 />
            <CTASocials1/>

            <Footer />
        </div>
    );
}
