import { MainPage } from "./Components/MainPage/MainPage";
// import { Navbar } from "./Components/Navbar/Navbar";

function App() {
    return (<>
        <MainPage/>
        {/* <Navbar/> */}
    </>);
}

export { App };

// let button = useRef<HTMLDivElement>(null);

// useEffect(() => {
//     let onMouseMove = (e: MouseEvent) => {
//         if (button.current == null) return;

//         // let rect = button.current.getBoundingClientRect();

//         let diff = {
//             x: e.clientX - (button.current.offsetLeft + button.current.offsetWidth / 2),
//             y: e.clientY - (button.current.offsetTop + button.current.offsetHeight / 2)
//         }

//         let dist = Math.sqrt(diff.x ** 2 + diff.y ** 2);

//         let maxDistance = Math.sqrt(window.innerWidth ** 2 + window.innerHeight ** 2);

//         let power = 1 / (dist / maxDistance * 2);
//         power = (power < 2) ? 0 : power;
//         power = (power > 30) ? 30 : power;

//         let angle = Math.atan2(diff.y / window.innerHeight, diff.x / window.innerWidth);

//         let close = dist / maxDistance * 2;

//         button.current.style.transform =
//             `translate(${Math.cos(angle) * 10 * close}px, ${Math.sin(angle) * 10 * close}px)` +
//             `rotateX(${diff.y / window.innerHeight * 45}deg)` +
//             `rotateY(${diff.x / window.innerWidth * -45}deg)`;
//         button.current.style.boxShadow = `0 0 ${power / 2}px ${power / 2}px white, 0 0 ${power}px ${power}px pink`;
//     };

//     document.addEventListener("mousemove", onMouseMove);
    
//     return () => {
//         document.removeEventListener("mousemove", onMouseMove);
//     };
// }, []);

// return (<div className={ Styles.App } style={{ background: `url('data:image/svg+xml,${encodeURIComponent(`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="8" height="8" fill="none" stroke="gray"><path d="M0 .5H31.5V32"/></svg>`)}')` }}>
//     <div ref={ button } style={{ display: "inline-block", padding: ".75em 2em", fontSize: "2em", borderRadius: ".75em" }}>
//         Tıkla
//         <Border image="linear-gradient(135deg, black, red)" size=".2em" radius=".75em"/>
//     </div>
// </div>)
// function clamp(min: number, val: number, max: number, minLimit: number = min, maxLimit: number = max): number {
//     if (val < minLimit) return min;
//     if (val > maxLimit) return max;
//     return val;
// }
// {/* <Navbar/> */}
// {/* <Button ref={ button } border={{ image: "linear-gradient(135deg, black, red)", size: ".2em", radius: ".75em" }}>
//     Tıkla
// </Button> */}