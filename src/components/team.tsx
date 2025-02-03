"use client";

import Image from "next/image";
import { Button } from "./ui/button";
import { Clock } from "lucide-react";
import { useEffect, useState } from "react";
import { Carousel, CarouselContent, CarouselItem } from "./ui/carousel";

export default function MeetTheTeam() {
    const [localTime, setLocalTime] = useState("");

    useEffect(() => {
        const updateTime = () => {
            const now = new Date();
            const hours = now.getHours();
            const minutes = now.getMinutes();
            const ampm = hours >= 12 ? "PM" : "AM";
            const formattedTime = `${hours % 12 || 12}:${
                minutes < 10 ? "0" : ""
            }${minutes} ${ampm} Local Time`;
            setLocalTime(formattedTime);
        };

        updateTime();
        const intervalId = setInterval(updateTime, 60000); // Update every minute

        return () => clearInterval(intervalId);
    }, []);

    return (
        <div className="max-w-7xl min-h-screen flex flex-col justify-center items-center mx-auto">
            <h1 className="text-5xl font-bold my-8 text-center">
                Our team of experts are here to help
            </h1>
            <p></p>

            <Carousel>
                <CarouselContent>
                    <CarouselItem className="md:basis-1/2 lg:basis-1/3">
                        <div className="flex border border-neutral-200 dark:border-neutral-800 w-[800px]">
                            <div className="flex flex-row gap-4 p-4 w-full">
                                <Image
                                    alt="julian-dev"
                                    src={"/team/julian.png"}
                                    width={350}
                                    height={350}
                                    className=""
                                />
                                <div className="flex flex-col gap-2 w-full">
                                    <div className="flex-start flex flex-col gap-4">
                                        <h1 className="font-bold text-4xl tracking-[1px]">
                                            Julian Macato
                                        </h1>
                                        <div className="flex flex-row gap-4 items-center">
                                            <Button className="bg-sky-400 hover:bg-sky-700 rounded-none">
                                                Send Message
                                            </Button>

                                            <div className="flex items-center gap-2">
                                                <Clock
                                                    color="#d2d2d2"
                                                    size={15}
                                                />
                                                <span className="text-sm">
                                                    {localTime}
                                                </span>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="flex flex-col justify-between p-4 border border-neutral-200 dark:border-neutral-800 mt-auto h-52">
                                        <div className="flex justify-between">
                                            <h1 className="font-semibold">
                                                Role
                                            </h1>
                                            <p>Software Engineer</p>
                                        </div>

                                        <div className="flex justify-between">
                                            <h1 className="font-semibold">
                                                Department
                                            </h1>
                                            <p>Operations</p>
                                        </div>

                                        <div className="flex justify-between">
                                            <h1 className="font-semibold">
                                                Joined
                                            </h1>
                                            <p>Jan 30, 2023</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div></div>
                        </div>
                    </CarouselItem>
                </CarouselContent>
            </Carousel>
        </div>
    );
}
