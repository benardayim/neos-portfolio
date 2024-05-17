import { useEffect, useRef, useState } from "react";
import Classes from "./MainPage.module.scss";
import gsap from "gsap";
import { BackgroundLights } from "../../Components/BackgroundLights/BackgroundLights";
import { NavigationBar } from "../../Components/NavigationBar/NavigationBar";
import { Greeting } from "./Sections/Greeting/Greeting";
import { WhoAmI } from "./Sections/WhoAmI/WhoAmI";
import { WhatIDo } from "./Sections/WhatIDo/WhatIDo";
import { Contact } from "./Sections/Contact/Contact";

function MainPage() {
    let mainPageRef = useRef(null as any as HTMLDivElement);
    let [tl, setTl] = useState<gsap.core.Timeline>();

    useEffect(() => {
        let context = gsap.context(() => {
            let timeline = gsap.timeline({
                defaults: {
                    duration: 1,
                    ease: "power3.inOut",
                },
                scrollTrigger: {
                    trigger: document.body,
                    start: "top top",
                    end: "+=15000",
                    scrub: true,
                    pin: mainPageRef.current,
                    pinSpacer: document.querySelector("#spacer")!
                }
            });
            setTl(timeline);
        });

        return () => { context.revert(); };
    }, []);

    return (<>
        <div ref={ mainPageRef } className={ Classes.MainPage }>
            <BackgroundLights/>

            <Greeting timeline={ tl }/>
            
            <WhoAmI timeline={ tl }/>
            
            <WhatIDo timeline={ tl }/>

            <Contact timeline={ tl }/>
            
            <NavigationBar timeline={ tl }/>
        </div>
    </>)
}

export { MainPage }
