import { MoveRight, PhoneCall } from "lucide-react";
import { Button } from "@/components/ui/button";

export const CTA1 = () => (
    <div className="w-full mx-auto max-w-7xl py-20 lg:py-40">
        <div className="mx-auto">
            <div className="flex flex-col text-center bg-muted  p-4 lg:p-14 gap-8 items-center">
                <div className="flex flex-col gap-2">
                    <h3 className="text-3xl md:text-5xl tracking-tighter max-w-xl font-regular">
                        Let{"'"}s build something awesome together. 🚀
                    </h3>
                    <p className="text-lg leading-relaxed tracking-tight text-muted-foreground max-w-xl">
                        You{"'"}ve got the vision, we{"'"}ve got the skills. Whether
                        it{"'"}s a sleek website, a game-changing app, or something
                        in between—we{"'"}ll make it happen. Shoot us a message, and
                        let{"'"}s get started!
                    </p>
                </div>
                <div className="flex flex-row gap-4">
                    <Button className="gap-4 border-white border-[0.1px]" variant="outline">
                        Let{"'"}s Talk <PhoneCall className="w-4 h-4 " />
                    </Button>
                    <Button className="gap-4 bg-sky-400 hover:bg-sky-500">
                        Get a Free Quote <MoveRight className="w-4 h-4" />
                    </Button>
                </div>
            </div>
        </div>
    </div>
);
