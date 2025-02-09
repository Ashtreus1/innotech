"use client";

import Image from "next/image";
import { Button } from "./ui/button";
import { Clock, Mail } from "lucide-react";
import { useEffect, useState } from "react";
import { Carousel, CarouselContent, CarouselItem } from "./ui/carousel";
import team from "../data/team";
import Link from "next/link";

export default function MeetTheTeam() {
	const [localTime, setLocalTime] = useState("");

	useEffect(() => {
		const updateTime = () => {
			const now = new Date();
			const hours = now.getHours();
			const minutes = now.getMinutes();
			const ampm = hours >= 12 ? "PM" : "AM";
			const formattedTime = `${hours % 12 || 12}:${minutes < 10 ? "0" : ""}${minutes} ${ampm} Local Time`;
			setLocalTime(formattedTime);
		};

		updateTime();
		const intervalId = setInterval(updateTime, 60000);
		return () => clearInterval(intervalId);
	}, []);

	return (
		<div className="max-w-7xl min-h-screen flex flex-col justify-center items-center mx-auto px-4">
			<h1 className="text-5xl font-bold mt-8 text-center">Our Team of <span className="text-sky-500">Experts</span></h1>
			<p className="text-lg text-neutral-400 text-center max-w-2xl mb-8">Meet the passionate individuals behind our success.</p>

			<Carousel className="w-full">
				<CarouselContent className="">
					{team.map((member) => (
						<CarouselItem key={member.name} className="basis-full lg:basis-1/3">
							<div className="flex border border-neutral-200 dark:border-neutral-800 max-w-[400px] mx-auto rounded-lg shadow-lg">
								<div className="flex flex-col items-center w-full">
									<div className="w-full h-[300px] relative">
										<Image alt={member.name} src={member.image} fill className="object-cover" />
									</div>
									<div className="p-4 w-full flex flex-col gap-4">
										<div>
											<Link href={member.portfolio_link ? member.portfolio_link : "/"}>
												<h2 className="text-2xl font-bold text-center hover:underline hover:decoration-wavy hover:decoration-blue-500">
													{member.name}
												</h2>
											</Link>
											<p className="text-center text-gray-500">{member.role}</p>
										</div>

										<div className="flex justify-center gap-4">
											<Button className="bg-sky-400 hover:bg-sky-700">
												<Mail />
												Send Message
											</Button>
											<div className="flex items-center gap-2 text-sm text-gray-500">
												<Clock size={15} />
												<span>{localTime}</span>
											</div>
										</div>
									</div>
								</div>
							</div>
						</CarouselItem>
					))}
				</CarouselContent>

				{/* <CarouselPrevious className="absolute left-0 transform -translate-x-1/2" />
                <CarouselNext className="absolute right-0 transform translate-x-1/2" /> */}
			</Carousel>
		</div>
	);
}
