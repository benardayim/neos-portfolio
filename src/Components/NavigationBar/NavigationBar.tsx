import { useCallback, useEffect, useRef, useState } from "react";
import Style from "./NavigationBar.module.scss";
import gsap from "gsap";
import { useMobile } from "../../Hooks/useMobile";

const NavigationBar = (properties: NavigationBarProperties) => {
    let contextRef = useRef<gsap.Context>();
    let navigationLinksRef = useRef(null as any as HTMLDivElement);
    let [progress, setProgress] = useState(0);
    let [spots, setSpots] = useState([] as NavbarSpot[]);

    useEffect(() => {
        let context = gsap.context(() => {});
        contextRef.current = context;
        return () => context.revert();
    }, []);

    useEffect(() => {
        if (properties.timeline == null) return;

        let labelKeys = Object.keys(properties.timeline.labels);
        setSpots(labelKeys.filter(e => !e.startsWith("_")).map(e => ({ name: e, percent: properties.timeline!.labels[e] / properties.timeline!.totalDuration() })));

        properties.timeline.eventCallback("onUpdate", () => {
            setProgress(properties.timeline!.progress());
        });

        return () => {
            properties.timeline!.eventCallback("onUpdate", null);
        };
    }, [properties.timeline]);

    let isMobile = useMobile();
    
    let onClick = useCallback((percent: number) => {
        contextRef.current?.add(() => {
            gsap.to(document.documentElement, {
                scrollTop: 15000 * percent,
                duration: 4
            });
        });
    }, []);

    let closest = spots.map((e, i) => ({ i, diff: Math.abs(e.percent - progress) })).toSorted((a, b) => a.diff - b.diff)[0]?.i ?? -1;
    
    return (<>
        <div className={ Style.NavigationBar }>
            <svg viewBox={ isMobile ? "0 0 100 5" : "0 0 200 5" } fill="none">
                <rect x={ isMobile ? "5%" : "10%" } y="47.5%" height="5%" width={ isMobile ? "90%" : "80%" } fill="rgba(255, 255, 255, 0.3)" />
                <rect x={ isMobile ? "5%" : "10%" } y="47.5%" height="5%" width={ isMobile ? "90%" : "80%" } fill="url(#NavigationBarGradient0)" />
                <circle cx={ isMobile ? "5%" : "10%" } cy="50%" r="1.5" stroke="white" strokeWidth="0.2" />
                <circle cx={ isMobile ? "5%" : "10%" } cy="50%" r=".7" fill="white" />
                <circle cx={ isMobile ? "95%" : "90%" } cy="50%" r="1.5" stroke="white" strokeWidth="0.2" />
                <circle cx={ isMobile ? "95%" : "90%" } cy="50%" r=".7" fill="white" />
                <defs>
                    <linearGradient id="NavigationBarGradient0" x1="0" y1="0" x2={ (isMobile ? (10 + 80 * progress) : (15 + 70 * progress)) + "%" } y2="0" gradientUnits="userSpaceOnUse">
                        <stop stopColor="#0085FF" />
                        <stop offset="0.65" stopColor="#853AFF" stopOpacity=".7"/>
                        <stop offset="0.999" stopColor="#EB00FF" stopOpacity=".7"/>
                        <stop offset="1" stopColor="white" stopOpacity="0" />
                    </linearGradient>
                </defs>
            </svg>
            <div ref={ navigationLinksRef } className={ Style.NavigationLinks }>
                { spots.map((e, i) => <span key={ e.percent } className={ closest == i ? Style.active : "" } style={{ left: (e.percent * 100) + "%" }} onClick={ () => onClick(e.percent) }>{ e.name }</span>) }
            </div>
        </div>
    </>);
};

type NavbarSpot = {
    name: string,
    percent: number
};

interface NavigationBarProperties {
    timeline?: gsap.core.Timeline;
    // spots: NavbarSpot[];
    // onClick: (percent: number) => void;
}

export { NavigationBar, type NavbarSpot };
