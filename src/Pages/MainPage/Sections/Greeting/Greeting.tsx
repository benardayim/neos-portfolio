import { useLayoutEffect, useRef } from "react";
import { TextSplitter } from "../../../../Util/TextSplitter";
import Classes from "../../MainPage.module.scss";
import gsap from "gsap";

const Greeting = (props: GreetingProperties) => {
    let greetingRef = useRef(null as any as HTMLParagraphElement);
    let nameRef = useRef(null as any as HTMLParagraphElement);

    useLayoutEffect(() => {
        let context = gsap.context(() => {
            if (props.timeline == null) return;
            
            let greeting = new TextSplitter({ target: greetingRef.current });
            props.timeline.set(greeting.chars, { yPercent: 100 });
            props.timeline.set(greeting.target, { autoAlpha: 1 });
            props.timeline.to(greeting.chars, { yPercent: 0, stagger: .04 });
            props.timeline.add("Merhaba");
            
            props.timeline.to(greeting.chars, { yPercent: 100, stagger: .04 }); //, "+=.5"
            
            let name = new TextSplitter({ target: nameRef.current });
            props.timeline.set(name.chars, { yPercent: -100 }, "<");
            props.timeline.set(name.target, { autoAlpha: 1 }, "<");
            props.timeline.to(name.chars, { yPercent: 0, stagger: .05 }, "<");

            let duration = 1 + (name.chars.length - 1) * 0.05;
            props.timeline.set([greeting.target, name.target], { autoAlpha: 0 }, "+=" + duration);
            props.timeline.to(name.chars, { yPercent: -100, stagger: .05 }, "-=" + duration);
    
            return () => {
                greeting.revert();
                name.revert();
            };
        });

        return () => {
            context.revert();
        }
    }, [props.timeline]);

    return (<>
        <span ref={ greetingRef } className={ Classes.Overflow } style={{ left: "50%", top: "50%", fontSize: "8em", whiteSpace: "nowrap", translate: "-50% -100%" }}>Merhaba</span>
        <span ref={ nameRef } className={ Classes.Overflow } style={{ left: "50%", top: "50%", fontSize: "8em", whiteSpace: "nowrap", translate: "-50% 0", willChange: "transform, opacity" }}>Ben Arda Can</span>
    </>);
};

type GreetingProperties = {
    timeline?: gsap.core.Timeline;
}

export { Greeting };
