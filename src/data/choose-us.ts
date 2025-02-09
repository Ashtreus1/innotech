import { icons } from "lucide-react";

interface Reasons {
    icon: keyof typeof icons;
    title: string;
    description: string;
}

export const reasons: Reasons[] = [
    {
        icon: 'Handshake',
        title: "Custom Solutions",
        description: "We build websites exactly how you want them, designed to fit your vision and needs.",
    },
    {
        icon: 'HandCoins',
        title: "Affordable Pricing",
        description: "Get high-quality web solutions at competitive rates with flexible pricing options.",
    },
    {
        icon: 'Star',
        title: "Reliable Support",
        description: "We provide ongoing maintenance and support to keep your website secure and optimized.",
    }
];
