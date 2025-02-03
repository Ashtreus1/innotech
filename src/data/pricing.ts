interface PricingItem {
    title: string;
    price: string;
    description: string;
    features: string[];
}

const pricing: PricingItem[] = [
    {
        title: "Starter Site",
        price: "₱5,000",
        description: "Perfect for personal brands and small projects",
        features: [
            "3-5 Responsive Pages",
            "Basic SEO Optimization",
            "Mobile-First Design",
            "1 Contact Form",
            "1 Month Free Support",
            "Social Media Integration",
            "Free Basic Hosting Setup"
        ],
    },
    {
        title: "Business Pro",
        price: "₱15,000",
        description: "Ideal for growing businesses and e-commerce",
        features: [
            "Everything in Starter +",
            "5-10 Dynamic Pages",
            "Database Integration",
            "Content Management System",
            "Product/Service Catalog",
            "Advanced SEO Setup",
            "Basic Analytics Dashboard",
            "3 Months Free Support",
            "SSL Security Included"
        ],
    },
    {
        title: "Custom Solution",
        price: "₱20,000+",
        description: "Tailored digital solutions for unique needs",
        features: [
            "Everything in Business Pro +",
            "10-15+ Custom Pages",
            "User Authentication System",
            "Custom API Integrations",
            "Advanced E-commerce Features",
            "Custom Design Elements",
            "Ongoing Maintenance Plans",
            "Performance Optimization",
            "Dedicated Account Manager"
        ],
    },
];

export default pricing;