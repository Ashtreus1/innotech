import { icons } from "lucide-react";

interface Reasons {
    icon: keyof typeof icons;
    title: string;
    description: string;
}

export const reasons: Reasons[] = [
    {
        icon: 'Handshake',
        title: "Customization",
        description: "We offer tailored solutions to fit each client's unique needs",
    },
    {
        icon: 'HandCoins',
        title: "Affordability",
        description: "Provide affordable and competitive pricing with flexible packages",
    },
    {
        icon: 'Star',
        title: "Exceptional Support",
        description: "Implement optimize and secure services, along with excellent support and maintenance services"
    }
]