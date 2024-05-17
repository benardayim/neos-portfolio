import { useLayoutEffect, useRef } from "react";
import { TextSplitter } from "../../../../Util/TextSplitter";
import gsap from "gsap";
import Classes from "../../MainPage.module.scss";
import { useMobile } from "../../../../Hooks/useMobile";

const Contact = (properties: ContactProperties) => {
    let contactRef = useRef(null as any as HTMLParagraphElement);
    let contactNumberRef = useRef(null as any as HTMLParagraphElement);
    let contactFormRef = useRef(null as any as HTMLFormElement);

    let contextRef = useRef<gsap.Context>()

    useLayoutEffect(() => {
        let context = gsap.context(() => {
            if (properties.timeline == null) return;
            
            properties.timeline.set(contactRef.current, { autoAlpha: 1 }, "<");
            properties.timeline.set(contactRef.current.children[0], { yPercent: 100 }, "<");
            properties.timeline.to(contactRef.current.children[0], { yPercent: 0 }, "<");

            let contactText = new TextSplitter({ target: contactNumberRef.current, wrapChars: true, charStyle: { overflow: "hidden" } });
            properties.timeline.set(contactText.charWrappers, { xPercent: -125 }, "<50%");
            properties.timeline.set(contactText.target, { autoAlpha: 1 }, "<");
            properties.timeline.to(contactText.charWrappers, { xPercent: 0, duration: .15, stagger: .05 }, "<");

            properties.timeline.set(contactFormRef.current, { autoAlpha: 1 });
            properties.timeline.from(contactFormRef.current.querySelectorAll("input, textarea, button"), { autoAlpha: 0, stagger: .25 });
            properties.timeline.add("İletişim");

            properties.timeline.to([contactRef.current, contactNumberRef.current, contactFormRef.current], { autoAlpha: 0, duration: 2 });
    
            return () => {
                contactText.revert();
            };
        });

        return () => context.revert();
    }, [properties.timeline]);

    useLayoutEffect(() => {
        let context = gsap.context((self) => {
            self.add("disappear", (target: HTMLElement) => {
                gsap.to(target, {
                    transformOrigin: "left",
                    scale: .7,
                    autoAlpha: 0,
                    duration: .3
                });
            });
            self.add("appear", (target: HTMLElement) => {
                gsap.to(target, {
                    transformOrigin: "left",
                    scale: 1,
                    autoAlpha: 1,
                    duration: .3
                });
            });
        });
        contextRef.current = context;
        return () => context.revert();
    }, []);

    let isMobile = useMobile();
    let formStyle = isMobile ?
        { width: "80%", fontSize: "2.5em" } :
        { width: "40%", fontSize: "1em" };

    return (<>
        <p ref={ contactRef } className={ Classes.Overflow } style={{ left: "50%", top: "25%", fontSize: "8em", transform: "translate(-50%, -100%) scale(0.8, 0.8)" }}><span>İletişim</span></p>
        <p ref={ contactNumberRef } className={ Classes.Animate } style={{ left: "50%", top: "30%", fontSize: "2.5em", transform: "translateX(-50%)", textAlign: "center" }}>Telefon numarası yoluyla veya destek talebi yoluyla ulaşabilirsiniz. <br/>+90 (555) 555 55 55 </p>
        <form ref={ contactFormRef } className={ Classes.Animate } style={{ ...formStyle, display: "flex", flexDirection: "column", gap: "1em", left: "50%", bottom: "8em", transform: "translateX(-50%)" }}>
            <div style={{ display: "flex", flexDirection: "row", gap: "1em" }}>
                <input type="text" name="name" placeholder="Adınız"/>
                <input type="email" name="email" placeholder="E-posta adresiniz"/>
            </div>
            <textarea style={{ width: "100%" }} rows={ 10 } name="content" placeholder="İletiniz"/>
            <button type="submit">Gönder</button>
        </form>
    </>);
};

type ContactProperties = {
    timeline?: gsap.core.Timeline;
}

export { Contact };
