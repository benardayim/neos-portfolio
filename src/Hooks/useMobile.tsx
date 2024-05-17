import { useLayoutEffect, useState } from "react";

const useMobile = (): boolean => {
    let [isMobile, setIsMobile] = useState(window.innerWidth <= 600);

    useLayoutEffect(() => {
        let cb = () => {
            if (isMobile == (window.innerWidth <= 900)) return;
            setIsMobile(!isMobile);
        };

        window.addEventListener("resize", cb);
        cb();

        return () => {
            window.removeEventListener("resize", cb);
        };
    }, [isMobile]);

    return isMobile;
};

export { useMobile };
