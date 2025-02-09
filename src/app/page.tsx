import WhyChooseUs from "@/components/choose-us";
import HeroSection from "@/components/HeroSection";
import Pricing from "@/components/Pricing";
import Footer from "@/components/footer";
import ProjectShowcase from "@/components/ProjectShowcase";
import Process from "@/components/Process";
import MeetTheTeam from "@/components/MeetTheTeam";
import { CTA1 } from "@/components/CallToAction";
import { CTA2 } from "@/components/CallToActionForm";
import CTASocials1 from "@/components/CallToActionSocials";

export default function Home() {
    return (
        <div>
            <HeroSection />

            <div id="works">
                <ProjectShowcase />
            </div>

            <div id="services">
                <WhyChooseUs />
            </div>

            {/* TODO: (add if may testimonials na) */}
            {/* <div className="max-w-7xl h-screen mx-auto">
                <Testimonials/>
            </div> */}

            <Process />
            {/* Meet the team */}
            <MeetTheTeam />

            <Pricing />
            <div className="bg-[#121212]">
                <CTA2 />
            </div>
            <CTASocials1 />

            <Footer />
        </div>
    );
}
