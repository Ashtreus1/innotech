"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useState } from "react";

export const CTA2 = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        company: "",
        inquiry: "",
        details: "",
    });

    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        const { name, email, company, inquiry, details } = formData;
        const subject = encodeURIComponent("New Inquiry from Innotech");
        const body = encodeURIComponent(
            `Name: ${name}\nEmail: ${email}\nCompany: ${
                company || "N/A"
            }\n\nWhat they're looking for:\n${inquiry}\n\nAdditional details:\n${
                details || "N/A"
            }`
        );

        window.location.href = `mailto:official.innotechsolutions@gmail.com?subject=${subject}&body=${body}`;
    };

    return (
        <div
            className="w-full mx-auto max-w-7xl py-20 lg:py-40 bg-[#121212]"
        >
            <div className="mx-auto">
                <div className="flex flex-col text-center p-4 lg:p-14 gap-8 items-center">
                    <div className="flex flex-col gap-2">
                        <h3 className="text-5xl md:text-6xl tracking-tighter max-w-xl font-bold text-left">
                            Got an idea? Let{"'"}s bring it to life!
                        </h3>
                        <p className="text-lg leading-relaxed tracking-tight text-muted-foreground max-w-xl text-left">
                            Tell us about your idea, and we{"'"}ll explore how
                            to make it happen.
                        </p>
                    </div>

                    {/* Form */}
                    <form
                        onSubmit={handleSubmit}
                        className="w-full max-w-xl space-y-4 [&>*]:flex [&>*]:flex-col"
                    >
                        <div>
                            <Label
                                htmlFor="name"
                                className="text-left text-xl pb-2 font-bold"
                            >
                                Name
                            </Label>
                            <Input
                                type="text"
                                id="name"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                required
                                className="bg-[#1e1e1e] text-white h-16"
                            />
                        </div>

                        <div>
                            <Label
                                htmlFor="email"
                                className="text-left text-xl pb-2 font-bold"
                            >
                                Email Address
                            </Label>
                            <Input
                                type="email"
                                id="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                required
                                className="bg-[#1e1e1e] text-white h-16"
                            />
                        </div>

                        <div>
                            <Label
                                htmlFor="company"
                                className="text-left text-xl pb-2 font-bold"
                            >
                                What is your Company{"'"}s Name? (Optional)
                            </Label>
                            <Input
                                type="text"
                                id="company"
                                name="company"
                                value={formData.company}
                                onChange={handleChange}
                                className="bg-[#1e1e1e] text-white h-16"
                            />
                        </div>

                        <div>
                            <Label
                                htmlFor="inquiry"
                                className="text-left text-xl pb-2 font-bold"
                            >
                                What are you looking for?
                            </Label>
                            <Input
                                type="text"
                                id="inquiry"
                                name="inquiry"
                                value={formData.inquiry}
                                onChange={handleChange}
                                required
                                className="bg-[#1e1e1e] text-white h-16"
                            />
                        </div>

                        <div>
                            <Label
                                htmlFor="details"
                                className="text-left text-xl pb-2 font-bold"
                            >
                                Feel free to share any additional details.
                                (Optional)
                            </Label>
                            <Textarea
                                id="details"
                                name="details"
                                value={formData.details}
                                onChange={handleChange}
                                className="bg-[#1e1e1e] text-white h-16"
                            />
                        </div>

                        <Button
                            type="submit"
                            className="w-full bg-sky-400 hover:bg-sky-500 h-16 text-lg font-bold"
                        >
                            Send Message
                        </Button>
                    </form>
                </div>
            </div>
        </div>
    );
};
