import { forwardRef, useImperativeHandle, useRef } from "react";
import Style from "./NavigationBar.module.scss";

const NavigationBar = forwardRef<NavigationBarRef, NavigationBarProperties>((props: NavigationBarProperties, ref) => {
    let gradient = useRef(null as any as SVGLinearGradientElement);
    let progress = useRef(0);

    useImperativeHandle(ref, () => ({
        set progress(x: number) { gradient.current.y2.baseVal.valueInSpecifiedUnits = (progress.current = x) * 100; },
        get progress() { return progress.current; }
    }), []);

    return (<>
        <div className={ Style.NavigationBar }>
            <svg viewBox="0 0 9 304" fill="none">
                <rect x="4" y="4" width="1" height="300" fill="url(#NavigationBarGradient0)" />
                <circle cx="4.5" cy="4" r="3.75" stroke="white" strokeWidth="0.5" />
                <circle cx="4.5" cy="4" r="1.89096" fill="white" />
                <defs>
                    <linearGradient ref={ gradient } id="NavigationBarGradient0" x1="0" y1="0" x2="0" y2="0%" gradientUnits="userSpaceOnUse">
                        <stop stopColor="#0085FF" />
                        <stop offset="0.65" stopColor="#853AFF" />
                        <stop offset="0.999" stopColor="#EB00FF" />
                        <stop offset="1" stopColor="white" stopOpacity="0" />
                    </linearGradient>
                </defs>
            </svg>
            <div className={ Style.NavigationLinks }>
                { props.spots.map(e => <span key={ e.percent } style={{ top: (e.percent * 100) + "%", transform: "translateY(-50%)" }} onClick={ () => props.onClick(e.percent) }>{ e.name }</span>) }
            </div>
        </div>
    </>);
});

type NavbarSpot = {
    name: string,
    percent: number
};

interface NavigationBarProperties {
    spots: NavbarSpot[];
    onClick: (percent: number) => void;
}

interface NavigationBarRef {
    progress: number;
}

export { NavigationBar, type NavigationBarRef, type NavbarSpot };
