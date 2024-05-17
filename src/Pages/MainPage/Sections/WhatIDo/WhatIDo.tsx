import { useLayoutEffect, useRef } from "react";
import { TextSplitter } from "../../../../Util/TextSplitter";
import gsap from "gsap";
import MotionPathPlugin from "gsap/MotionPathPlugin";
import Classes from "../../MainPage.module.scss";
import { CursorSVG } from "../../../../SVG/CursorSVG";
import { WebPageSVG } from "../../../../SVG/WebPageSVG";
import { useMobile } from "../../../../Hooks/useMobile";
import { CodeEditorSVG, ICodeEditorSVG } from "../../../../SVG/CodeEditorSVG";

const WhatIDo = (properties: WhatIDoProperties) => {
    let whatIDoRef = useRef(null as any as HTMLParagraphElement);
    let whatIDoTextRef = useRef(null as any as HTMLParagraphElement);
    let cursorRef = useRef(null as any as SVGSVGElement);
    let webPageRef = useRef(null as any as SVGSVGElement);
    let codeEditorRef = useRef(null as any as ICodeEditorSVG);

    useLayoutEffect(() => {
        let context = gsap.context(() => {
            if (properties.timeline == null) return;

            properties.timeline.set(whatIDoRef.current, { autoAlpha: 1 }, "<");
            properties.timeline.set(whatIDoRef.current.children[0], { yPercent: 100 }, "<");
            properties.timeline.to(whatIDoRef.current.children[0], { yPercent: 0 }, "<");

            let whatIDoText = new TextSplitter({ target: whatIDoTextRef.current, wrapChars: true, charStyle: { overflow: "hidden" } });
            properties.timeline.set(whatIDoText.charWrappers, { xPercent: -125 }, "+=0")
            properties.timeline.set(whatIDoText.target, { autoAlpha: 1 }, "<");
            
            properties.timeline.to(whatIDoText.charWrappers.slice(0, 60), { xPercent: 0, duration: .15, stagger: .05 }, "<");
            properties.timeline.set(webPageRef.current.querySelectorAll("g :not(:first-child)"), { autoAlpha: 0 }, "<");
            properties.timeline.to(webPageRef.current, { autoAlpha: 1 }, "<");
            properties.timeline.to(cursorRef.current, { autoAlpha: 1, duration: .5 }, "<");
            properties.timeline.to(webPageRef.current.querySelectorAll("g :first-child"), { width: "100%", height: "100%", onUpdate: () => {
                let coords = MotionPathPlugin.getRelativePosition(document.body, webPageRef.current.querySelector("rect")!, [0, 0], [.95, .95]);
                gsap.set(cursorRef.current, { left: coords.x, top: coords.y });
            } }, "<");
            properties.timeline.to(cursorRef.current, { autoAlpha: 0, duration: 1 }, ">-40%");
            properties.timeline.to(webPageRef.current.querySelectorAll("g *"), { autoAlpha: 1 }, "<");
            
            properties.timeline.to(whatIDoText.charWrappers.slice(60, 116), { xPercent: 0, duration: .15, stagger: .05 });
            properties.timeline.set(codeEditorRef.current.code.querySelectorAll("g"), { xPercent: -150 }, "<");
            properties.timeline.fromTo(codeEditorRef.current.svg, {
                autoAlpha: 0,
                filter: "blur(16px)",
                x: -10,
                y: -10
            }, {
                autoAlpha: 1,
                filter: "blur(0px)",
                x: 0,
                y: 0,
                duration: .5
            }, "<");
            properties.timeline.to(codeEditorRef.current.code.querySelectorAll("g"), { xPercent: 0, duration: 1, stagger: .01 }, ">");
            properties.timeline.add("Beceriler");
            
            properties.timeline.to([whatIDoTextRef.current, codeEditorRef.current.svg, webPageRef.current], { autoAlpha: 0 });
            properties.timeline.to(whatIDoRef.current.children[0], { yPercent: -100 }, "<");
    
            return () => {
                whatIDoText.revert();
            };
        });

        return () => context.revert();
    }, [properties.timeline]);

    let isMobile = useMobile(),
        whatIDoTextStyle = isMobile ? 
            { left: "50%", top: "32.5%", fontSize: "2.5em", width: "80%", translate: "-50% 0" } :
            { left: "20%", top: "32.5%", fontSize: "2.5em", width: "40%" },
            
        webPageStyle = isMobile ? 
            { left: "45%", bottom: "35%", translate: "-50% 0", width: "38em" } : 
            { right: "19%", top: "35%", width: "25em" },

        codeEditorStyle = isMobile ? 
            { left: "55%", bottom: "33%", translate: "-50% 0", width: "20em" } : 
            { right: "18%", top: "43%", width: "20em" };

    return (<>
        <p ref={ whatIDoRef } className={ Classes.Overflow } style={{ left: "50%", top: "25%", fontSize: "8em", transform: "translate(-50%, -100%) scale(0.8, 0.8)", whiteSpace: "nowrap" }}><span>Neler Yapıyorum?</span></p>
        <p ref={ whatIDoTextRef } className={ Classes.Animate } style={ whatIDoTextStyle }>React TypeScript ve Figma yardımıyla dilediğiniz sayfanın önyüzünü,<br/>NodeJS Express veya Python Django ile de arkayüzünü yazabilirim.</p>

        <CursorSVG ref={ cursorRef } className={ Classes.Animate } style={{ width: "2em", left: "70%", top: "40%" }}/>
        <WebPageSVG ref={ webPageRef } className={ Classes.Animate } style={{ ...webPageStyle, aspectRatio: "127/79" }}/>
        <CodeEditorSVG ref={ codeEditorRef } className={ Classes.Animate } style={ codeEditorStyle }/>
    </>);
};

type WhatIDoProperties = {
    timeline?: gsap.core.Timeline;
}

export { WhatIDo };
