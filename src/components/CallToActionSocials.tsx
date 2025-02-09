import { Facebook, Instagram } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function CTASocials1() {
    return (
        <div className="py-36 bg-[#242424] px-6 flex justify-center items-center">
            <div className="space-y-6">
                {/* Header Section */}
                <div className="space-y-4">
                    <h1 className="font-bold text-5xl text-white">
                        Let{"'"}s stay in touch!
                    </h1>
                    <p className="text-lg text-neutral-400 max-w-lg">
                        We{"'"}d love to share our thoughts on tech, business, and the journey behind it all.
                    </p>
                </div>

                {/* Socials Section */}
                <div className="space-y-3">
                    <p className="text-sm font-semibold text-neutral-400">
                        Join us on socials—let{"'"}s grow together!
                    </p>
                    <div className="flex items-center gap-4">
                        <Link href="https://www.facebook.com/innotechdev/">
                            <Facebook size={28} className="text-white cursor-pointer hover:text-gray-400 transition" />
                        </Link>
                        <Link href="https://www.instagram.com/official.innotech">
                            <Instagram size={28} className="text-white cursor-pointer hover:text-gray-400 transition" />
                        </Link>
                        <Link href="https://www.tiktok.com/@innotechdev">
                            <Image
                                src="/icons/tiktok.svg"
                                alt="TikTok"
                                width={21}
                                height={21}
                                className="invert cursor-pointer hover:opacity-80 transition ml-1"
                            />
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}
