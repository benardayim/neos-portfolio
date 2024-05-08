import { useCallback, useEffect, useRef, useState } from "react";
import Style from "./MainPage.module.scss";
import gsap from "gsap";
import { TextSplitter } from "../../Util/TextSplitter";
import { BulbSVG, IBulbSVG } from "../../SVG/BulbSVG";
import { CursorSVG } from "../../SVG/CursorSVG";
import MotionPathPlugin from "gsap/MotionPathPlugin";
import { WebPageSVG } from "../../SVG/WebPageSVG";
import { BackgroundLights } from "../BackgroundLights/BackgroundLights";
import { NavbarSpot, NavigationBar, NavigationBarRef } from "../NavigationBar/NavigationBar";
import { CodeEditorSVG, ICodeEditorSVG } from "../../SVG/CodeEditorSVG";

function MainPage() {
    let ref = <T,>() => useRef<T>((null as any) as T);
    let [navbarSpots, setNavbarSpots] = useState<NavbarSpot[]>([]);
    let timelineRef = useRef<gsap.core.Timeline | null>(null);
    let contextRef = useRef<gsap.Context | null>(null);

    let refs = {
        navigationBar: ref<NavigationBarRef>(),

        page: ref<HTMLDivElement>(),

        cursor: ref<SVGSVGElement>(),
        
        greeting: ref<HTMLParagraphElement>(),
        
        name: ref<HTMLParagraphElement>(),

        whoAmI: ref<HTMLParagraphElement>(),
        whoAmIText: ref<HTMLParagraphElement>(),
        bulb: ref<IBulbSVG>(),

        whatIDo: ref<HTMLParagraphElement>(),
        whatIDoText: ref<HTMLParagraphElement>(),
        webPage: ref<SVGSVGElement>(),
        codeEditor: ref<ICodeEditorSVG>(),

        contact: ref<HTMLParagraphElement>(),
        contactNumber: ref<HTMLParagraphElement>(),
        contactForm: ref<HTMLFormElement>()
    };

    useEffect(() => {
        let context = gsap.context(() => {
            let timeline = gsap.timeline({
                defaults: {
                    duration: 1,
                    ease: "power3.inOut"
                },
                onUpdate: () => {
                    refs.navigationBar.current.progress = timeline.progress();
                }
            });
            timelineRef.current = timeline;

            let reverts: TextSplitter[] = [];

            timeline.add("_start");
            
            // Merhaba
            let greeting = new TextSplitter({ target: refs.greeting.current });
            reverts.push(greeting);
            timeline.set(greeting.chars, { yPercent: 100 });
            timeline.set(greeting.target, { autoAlpha: 1 });
            timeline.to(greeting.chars, { yPercent: 0, stagger: .04 });
            timeline.add("Merhaba");
            
            timeline.to(greeting.chars, { yPercent: 100, stagger: .04 }); //, "+=.5"
            
            // İsim
            let name = new TextSplitter({ target: refs.name.current });
            reverts.push(name);
            timeline.set(name.chars, { yPercent: -100 }, "<");
            timeline.set(name.target, { autoAlpha: 1 }, "<");
            timeline.to(name.chars, { yPercent: 0, stagger: .04 }, "<");
            timeline.add("_name");

            timeline.to(name.chars, { yPercent: -100, stagger: .04 }); //, "+=.5"

            // Ben Kimim
            let whoAmI = new TextSplitter({ target: refs.whoAmI.current });
            reverts.push(whoAmI);
            timeline.set(whoAmI.chars, { yPercent: 100 }, "<");
            timeline.set(whoAmI.target, { autoAlpha: 1 }, "<");
            timeline.to(whoAmI.chars, { yPercent: 0, stagger: .04 }, "<");

            timeline.to(whoAmI.target, { top: "25%", scale: .8 }, "+=.2");

            // Ben Kimim Tanıtım
            let whoAmIText = new TextSplitter({ target: refs.whoAmIText.current, wrapChars: true, charStyle: { overflow: "hidden" } });
            reverts.push(whoAmIText);
            timeline.set(whoAmIText.charWrappers, { xPercent: -125 }, "<50%");
            timeline.set(whoAmIText.target, { autoAlpha: 1 }, "<");
            timeline.to(whoAmIText.charWrappers, { xPercent: 0, duration: .15, stagger: .05 }, "<");

            timeline.set(refs.bulb.current.shine, { autoAlpha: 0, scale: 0, transformOrigin: "50% 50%" }, "<");
            timeline.to(refs.bulb.current.svg, {
                motionPath: {
                    path: "#path",
                    align: "#path",
                    alignOrigin: [.5, .5],
                    autoRotate: 90
                },
                ease: "power4",
                duration: 4
            }, "<1");
            timeline.to(refs.bulb.current.svg, { autoAlpha: 1, duration: 1 }, "<");
            timeline.to(refs.bulb.current.inside, { fill: "#dede33", duration: 1 }, ">-50%");
            timeline.to(refs.bulb.current.outline, { fill: "#a8a800", duration: 1 }, "<");
            timeline.to(refs.bulb.current.shine, { fill: "#a8a800", autoAlpha: 1, scale: 1, duration: 1 }, "<");
            timeline.add("Ben Kimim");

            timeline.to([whoAmI.target, whoAmIText.target, refs.bulb.current.svg], { autoAlpha: 0 });

            // Ne Yapıyoruz
            timeline.to(whoAmI.chars, { yPercent: -100 }, "<");
            timeline.set(refs.whatIDo.current, { autoAlpha: 1 }, "<");
            timeline.set(refs.whatIDo.current.children[0], { yPercent: 100 }, "<");
            timeline.to(refs.whatIDo.current.children[0], { yPercent: 0 }, "<");

            // Ne Yapıyoruz Yazı
            let whatIDoText = new TextSplitter({ target: refs.whatIDoText.current, wrapChars: true, charStyle: { overflow: "hidden" } });
            reverts.push(whatIDoText);
            timeline.set(whatIDoText.charWrappers, { xPercent: -125 }, "+=0")
            timeline.set(whatIDoText.target, { autoAlpha: 1 }, "<");
            
            // Front-End
            timeline.to(whatIDoText.charWrappers.slice(0, 60), { xPercent: 0, duration: .15, stagger: .05 }, "<");
            timeline.set(refs.webPage.current.querySelectorAll("g :not(:first-child)"), { autoAlpha: 0 }, "<");
            timeline.to(refs.webPage.current, { autoAlpha: 1 }, "<");
            timeline.to(refs.cursor.current, { autoAlpha: 1, duration: .5 }, "<");
            timeline.to(refs.webPage.current.querySelectorAll("g :first-child"), { width: "100%", height: "100%", onUpdate: () => {
                let coords = MotionPathPlugin.getRelativePosition(refs.page.current, refs.webPage.current.querySelector("rect")!, [0, 0], [.95, .95]);
                gsap.set(refs.cursor.current, { left: coords.x, top: coords.y });
            } }, "<");
            timeline.to(refs.cursor.current, { autoAlpha: 0, duration: 1 }, ">-40%");
            timeline.to(refs.webPage.current.querySelectorAll("g *"), { autoAlpha: 1 }, "<");
            timeline.add("Neler Yapıyorum?");
            
            // Back-End
            timeline.to(whatIDoText.charWrappers.slice(60, 116), { xPercent: 0, duration: .15, stagger: .05 });
            timeline.set(refs.codeEditor.current.code.querySelectorAll("g"), { xPercent: -150 }, "<");
            timeline.fromTo(refs.codeEditor.current.svg, {
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
            timeline.to(refs.codeEditor.current.code.querySelectorAll("g"), { xPercent: 0, duration: 1, stagger: .01 }, ">");
            timeline.add("_backend");
            
            timeline.to([refs.whatIDoText.current, refs.codeEditor.current.svg, refs.webPage.current], { autoAlpha: 0 });
            
            // Contact
            timeline.to(refs.whatIDo.current.children[0], { yPercent: -100 }, "<");
            timeline.set(refs.contact.current, { autoAlpha: 1 }, "<");
            timeline.set(refs.contact.current.children[0], { yPercent: 100 }, "<");
            timeline.to(refs.contact.current.children[0], { yPercent: 0 }, "<");

            let contactText = new TextSplitter({ target: refs.contactNumber.current, wrapChars: true, charStyle: { overflow: "hidden" } });
            reverts.push(contactText);
            timeline.set(contactText.charWrappers, { xPercent: -125 }, "<50%");
            timeline.set(contactText.target, { autoAlpha: 1 }, "<");
            timeline.to(contactText.charWrappers, { xPercent: 0, duration: .15, stagger: .05 }, "<");

            timeline.set(refs.contactForm.current, { autoAlpha: 1 });
            timeline.from(refs.contactForm.current.querySelectorAll("input, textarea, button"), { autoAlpha: 0, stagger: .25 });
            timeline.add("İletişim");

            // Scroll and Touch navigation
            let go = (direction: number) => {
                let timelineTweens = gsap.getTweensOf(timeline, true);

                if (gsap.getTweensOf(timeline, true).length != 0) {
                    timelineTweens[0].timeScale(timelineTweens[0].timeScale() * 1.1);
                    return;
                }

                let label = (direction == -1) ? timeline.previousLabel(timeline.time() + -0.01) : timeline.nextLabel(timeline.time() + 0.01);
                if (label == null) return;
                let progress = timeline.labels[label] / timeline.totalDuration();
                let duration = Math.abs(timeline.time() - timeline.labels[label]);

                gsap.to(timeline, {
                    progress: progress,
                    ease: "none",
                    duration: duration
                });
            };

            let onScroll = (e: WheelEvent) => {
                let direction = Math.sign(e.deltaY);
                go(direction);
            };
            window.addEventListener("wheel", onScroll);

            let startY = -1;
            let pointerStart = (e: MouseEvent | TouchEvent) => {
                startY = ((e as TouchEvent).changedTouches?.[0] ?? (e as MouseEvent)).screenY;
            };
            let pointerEnd = (e: MouseEvent | TouchEvent) => {
                if (startY == -1) return;
                let endY = ((e as TouchEvent).changedTouches?.[0] ?? (e as MouseEvent)).screenY;
                let diff = startY - endY;
                if (diff > 50) {
                    go(1);
                } else if (diff < -50) {
                    go(-1);
                }
                startY = -1;
            };
            window.addEventListener("mousedown", pointerStart);
            window.addEventListener("mouseup", pointerEnd);
            window.addEventListener("touchstart", pointerStart);
            window.addEventListener("touchend", pointerEnd);
            window.addEventListener("touchcancel", pointerEnd);

            let labelKeys = Object.keys(timeline.labels);
            setNavbarSpots(labelKeys.filter(e => !e.startsWith("_")).map(e => ({ name: e, percent: timeline.labels[e] / timeline.totalDuration() })));
            timeline.pause();
            go(1);
            
            return () => {
                reverts.forEach(e => e.revert())
                window.removeEventListener("wheel", onScroll);
                
                window.removeEventListener("mousedown", pointerStart);
                window.removeEventListener("mouseup", pointerEnd);
                window.removeEventListener("touchstart", pointerStart);
                window.removeEventListener("touchend", pointerEnd);
                window.removeEventListener("touchcancel", pointerEnd);
            };
        });
        contextRef.current = context;

        return () => { context.revert(); };
    }, []);

    let navOnClick = useCallback((percent: number) => {
        console.log("slm");
        contextRef.current?.add(() => {
            if (timelineRef.current == null) return;
            gsap.to(timelineRef.current, {
                progress: percent,
                duration: 2
            });
        });
    }, [])

    return (<>
        <BackgroundLights/>
        <div ref={ refs.page } className={ Style.MainPage }>
            <p ref={ refs.greeting } className={ Style.Title } style={{ left: "50%", top: "50%", fontSize: "8em", transform: "translate(-50%, -100%)" }}>Merhaba</p>
            <p ref={ refs.name } className={ Style.Title } style={{ left: "50%", top: "50%", fontSize: "8em", transform: "translateX(-50%)" }}>Ben Arda Can</p>

            <p ref={ refs.whoAmI } className={ Style.Title } style={{ left: "50%", top: "50%", fontSize: "8em", transform: "translate(-50%, -100%)" }}>Ben Kimim?</p>
            <p ref={ refs.whoAmIText } className={ Style.Text } style={{ left: "20%", top: "35%", fontSize: "3em", width: "40%" }}>2015 yıllarında hobi olarak başladığım yazılım alanını geleceğim olarak benimseyip profesyonel hizmet vermeye başlamış birisiyim.</p>
            <svg width="253.33333333333334" height="370" viewBox="0 0 76 111" fill="none" style={{ position: "absolute", right: "29%", top: "40%" }}>
                <path id="path" d="M1 109C19.3333 111.667 58.6 111.7 69 90.5C82 64 64 64 62 44C60.4 28 70 8.66667 75 1" stroke="none"/>
            </svg>
            <BulbSVG ref={ refs.bulb } className={ Style.Animate } style={{ width: "20em" }}/>

            <p ref={ refs.whatIDo } className={ Style.Title } style={{ left: "50%", top: "25%", fontSize: "8em", transform: "translate(-50%, -100%) scale(0.8, 0.8)" }}><span>Neler Yapıyorum?</span></p>
            <p ref={ refs.whatIDoText } className={ Style.Text } style={{ left: "20%", top: "35%", fontSize: "2.5em", width: "40%" }}>React TypeScript ve Figma yardımıyla dilediğiniz sayfanın önyüzünü,<br/>NodeJS Express veya Python Django ile de arkayüzünü yazabilirim.</p>

            <CursorSVG ref={ refs.cursor } className={ Style.Animate } style={{ width: "2em", left: "70%", top: "40%" }}/>
            <WebPageSVG ref={ refs.webPage } className={ Style.Animate } style={{ right: "19%", top: "35%", aspectRatio: "127/79", width: "25em" }}/>
            <CodeEditorSVG ref={ refs.codeEditor } className={ Style.Animate } style={{ right: "18%", top: "43%", width: "20em" }}/>

            <p ref={ refs.contact } className={ Style.Title } style={{ left: "50%", top: "25%", fontSize: "8em", transform: "translate(-50%, -100%) scale(0.8, 0.8)" }}><span>İletişim</span></p>
            <p ref={ refs.contactNumber } className={ Style.Title } style={{ left: "50%", top: "30%", fontSize: "2.5em", transform: "translateX(-50%)" }}>+90 (555) 555 55 55 </p>
            <form ref={ refs.contactForm } className={ Style.Animate } style={{ display: "flex", flexDirection: "column", gap: "1em", left: "50%", bottom: "8em", transform: "translateX(-50%)" }}>
                <div style={{ display: "flex", flexDirection: "row", gap: "1em" }}>
                    <input type="text" name="name" placeholder="Adınız"/>
                    <input type="email" name="email" placeholder="E-posta adresiniz"/>
                </div>
                <textarea style={{ width: "100%" }} rows={ 10 } name="content" placeholder="İletiniz"/>
                <button type="submit">Gönder</button>
            </form>
        </div>
        <NavigationBar ref={ refs.navigationBar } spots={ navbarSpots } onClick={ navOnClick }/>
    </>)
}

export { MainPage }


// let progress = { total: 0 };
// let speed = { total: 0 };

// let callback = (e: WheelEvent) => {
//     speed.total += 0.01 * (e.deltaY / Math.abs(e.deltaY));
//     gsap.to(speed, {
//         total: 0,
//         overwrite: true,
//         duration: 1,
//         onUpdate: () => { timeline.progress(timeline.progress() + speed.total) }
//     })
//     // timeline.progress(timeline.progress() + (e.deltaY / Math.abs(e.deltaY)) * .01);
// };

// document.addEventListener("wheel", callback);

// return () => document.removeEventListener("wheel", callback);


// kurumsal website
// e-ticaret sitesi
// qr katalog
// crm sistemi
// google haritalar
// sosyal medya yönetimi
