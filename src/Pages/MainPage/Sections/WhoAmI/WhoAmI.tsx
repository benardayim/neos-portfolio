import { useLayoutEffect, useRef } from "react";
import { TextSplitter } from "../../../../Util/TextSplitter";
import gsap from "gsap";
import { BulbSVG, IBulbSVG } from "../../../../SVG/BulbSVG";
import Classes from "../../MainPage.module.scss";
import { useMobile } from "../../../../Hooks/useMobile";

const WhoAmI = (props: WhoAmIProperties) => {
    let headerRef = useRef(null as any as HTMLDivElement);
    let textRef = useRef(null as any as HTMLDivElement);
    let bulbRef = useRef(null as any as IBulbSVG);

    useLayoutEffect(() => {
        let context = gsap.context(() => {
            if (props.timeline == null) return;

            let whoAmI = new TextSplitter({ target: headerRef.current });
            props.timeline.set(whoAmI.chars, { yPercent: 100 }, "<");
            props.timeline.set(whoAmI.target, { autoAlpha: 1 }, "<");
            props.timeline.to(whoAmI.chars, { yPercent: 0, stagger: .05 }, "<");

            props.timeline.to(whoAmI.target, { top: "25%", scale: .8 }, "+=.2");

            let whoAmIText = new TextSplitter({ target: textRef.current, wrapChars: true, charStyle: { overflow: "hidden" } });
            props.timeline.set(whoAmIText.charWrappers, { xPercent: -125 }, "<50%");
            props.timeline.set(whoAmIText.target, { autoAlpha: 1 }, "<");
            props.timeline.to(whoAmIText.charWrappers, { xPercent: 0, duration: .15, stagger: .05 }, "<");

            props.timeline.set(bulbRef.current.shine, { autoAlpha: 0, scale: 0, transformOrigin: "50% 50%" }, "<");
            props.timeline.to(bulbRef.current.svg, {
                motionPath: {
                    path: "#path",
                    align: "#path",
                    alignOrigin: [.5, .5],
                    autoRotate: 90
                },
                ease: "power4",
                duration: 4
            }, "<1");
            props.timeline.to(bulbRef.current.svg, { autoAlpha: 1, duration: 1 }, "<");
            props.timeline.to(bulbRef.current.inside, { fill: "#dede33", duration: 1 }, ">-50%");
            props.timeline.to(bulbRef.current.outline, { fill: "#a8a800", duration: 1 }, "<");
            props.timeline.to(bulbRef.current.shine, { fill: "#a8a800", autoAlpha: 1, scale: 1, duration: 1 }, "<");
            props.timeline.add("Ben Kimim");

            props.timeline.set(headerRef.current, { autoAlpha: 0 }, "+=1");
            props.timeline.to(whoAmI.chars, { yPercent: -100 }, "-=1");
            props.timeline.to([whoAmIText.target, bulbRef.current.svg], { autoAlpha: 0 }, "<");
    
            return () => {
                whoAmI.revert();
                whoAmIText.revert();
            };
        });

        return () => context.revert();
    }, [props.timeline]);

    let isMobile = useMobile();
    let textStyle = isMobile ? { left: "25%" } : { left: "35%" };

    return (<>
        <div ref={ headerRef } className={ Classes.Overflow } style={{ left: "50%", top: "50%", fontSize: "8em", whiteSpace: "nowrap", translate: "-50% -100%" }}>Ben Kimim?</div>
        <div ref={ textRef } className={ Classes.Animate } style={{ ...textStyle, translate: "-50% 0", top: "32.5%", fontSize: "3em", width: "40%" }}>2015 yıllarında hobi olarak başladığım yazılım alanını geleceğim olarak benimseyip profesyonel hizmet vermeye başlamış birisiyim.</div>
        <svg width="253.33333333333334" height="370" viewBox="0 0 76 111" fill="none" className={ Classes.Animate } style={{ right: "37%", top: "45%" }}>
            <path id="path" d="M1 109C19.3333 111.667 58.6 111.7 69 90.5C82 64 64 64 62 44C60.4 28 70 8.66667 75 1" stroke="none"/>
        </svg>
        <BulbSVG ref={ bulbRef } className={ Classes.Animate } style={{ width: "20em" }}/>
    </>);
};

type WhoAmIProperties = {
    timeline?: gsap.core.Timeline;
}

export { WhoAmI };
