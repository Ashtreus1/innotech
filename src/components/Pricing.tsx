"use client";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import React from "react";
import { useEffect, useState } from "react";
import Link from "next/link";
import pricing from "@/data/pricing";
import { CarouselNext, CarouselPrevious, Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel";

export default function Pricing() {
	const [isMobile, setIsMobile] = useState(false);
	const ArrowStyles = "h-10 w-10 border border-gray-500 rounded-[500px] p-2";

	useEffect(() => {
		const handleResize = () => setIsMobile(window.innerWidth < 768);
		window.addEventListener("resize", handleResize);
		handleResize();
		return () => window.removeEventListener("resize", handleResize);
	}, []);

	return (
		<div className="w-full py-20 max-w-7xl mx-auto ">
			<div className="container mx-auto px-4">
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.5 }}
					className="text-center mb-16"
				>
					<h2 className="text-3xl md:text-5xl tracking-tighter text-center font-regular">Quality You Can Afford.</h2>
					<p className="text-lg leading-relaxed tracking-tight text-muted-foreground text-center">
						Affordable rates that make sense. No hidden fees, no surprises, just real value.
					</p>
				</motion.div>

				<div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
					{isMobile ? (
						// <Carousel className="w-full max-w-md mx-auto">
						<Carousel className="w-5/6 max-w-md mx-auto">
							<CarouselContent>
								{pricing.map((price, index) => (
									<CarouselItem key={index}>
										<Cards
											title={price.title}
											price={price.price}
											description={price.description}
											features={price.features}
											isMobile={true}
											isPopular={index === 1}
										/>
									</CarouselItem>
								))}
							</CarouselContent>
							<CarouselPrevious className={`${ArrowStyles}`} />
							<CarouselNext className={`${ArrowStyles}`} />
						</Carousel>
					) : (
						pricing.map((price, index) => (
							<Cards
								key={index}
								title={price.title}
								price={price.price}
								description={price.description}
								features={price.features}
								isMobile={false}
								isPopular={index === 1}
								delay={index * 0.1}
							/>
						))
					)}
				</div>
			</div>
		</div>
	);
}

function Cards({
	title,
	price,
	description,
	features,
	delay = 0,
	isMobile,
	isPopular = false,
}: {
	title: string;
	price: string;
	description: string;
	features: string[];
	delay?: number;
	isMobile: boolean;
	isPopular?: boolean;
}) {
	return (
		<motion.div
			initial={isMobile ? { scale: 0.95 } : { y: 20, opacity: 0 }}
			animate={isMobile ? { scale: 1 } : { y: 0, opacity: 1 }}
			transition={{ duration: 0.4, delay }}
			className="h-full flex"
		>
			<Card className="bg-[#1e1e1e] overflow-hidden border-none shadow-lg flex flex-col flex-1">
				<CardHeader className="pb-3">
					<CardTitle className="text-2xl font-bold text-white">{title}</CardTitle>
					<CardDescription className="text-slate-300">{description}</CardDescription>
					<div className="mt-4">
						<span className="text-4xl font-bold text-white">{price}</span>
						<span className="text-slate-300 ml-2"></span>
					</div>
				</CardHeader>

				<CardContent className="flex flex-col justify-between flex-1">
					<div className="space-y-4 mb-8">
						{features.map((feature, index) => (
							<div key={index} className="flex items-start space-x-3">
								<CheckIcon className="w-5 h-5 text-green-400 flex-shrink-0 mt-1" />
								<p className="text-slate-300">{feature}</p>
							</div>
						))}
					</div>

					<Button asChild size="lg" className={`w-full ${isPopular ? "bg-sky-400 hover:bg-sky-600" : "bg-sky-400 hover:bg-sky-600"}`}>
						<Link href="/contact">
							Get Started
							<ArrowRightIcon className="w-4 h-4 ml-2" />
						</Link>
					</Button>
				</CardContent>
			</Card>
		</motion.div>
	);
}

function CheckIcon(props: React.SVGProps<SVGSVGElement>) {
	return (
		<svg {...props} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
			<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
		</svg>
	);
}

function ArrowRightIcon(props: React.SVGProps<SVGSVGElement>) {
	return (
		<svg {...props} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
			<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
		</svg>
	);
}
