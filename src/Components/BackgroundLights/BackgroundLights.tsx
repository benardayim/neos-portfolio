import Style from "./BackgroundLights.module.scss";
import { ColorAt, RGB2HexString } from "../../Util/Color";

const BackgroundLights = () => {
    return (<div>
        { [...Array(9)].map((_, i) => 
            <div key={ i } className={ Style.Light } style={{ 
                left: "100%",
                top: "0",
                "--color": RGB2HexString(ColorAt(Math.random(), 0xffffff, 0x00eeff, 0x0044ff, 0xffff00, 0xff8000, 0x8000ff)),
                "--offsetX": ((i - 4) * 10) + "em",
                "--offsetTime": Math.floor(Math.random() * -20000) + "ms",
                "--startY": "-100px",
                "--endY": "200px"
            } as React.CSSProperties}></div>)
        }

        { [...Array(9)].map((_, i) => 
            <div key={ i } className={ Style.Light } style={{ 
                left: "0",
                top: "100%",
                "--color": RGB2HexString(ColorAt(Math.random(), 0xffffff, 0x00eeff, 0x0044ff, 0xffff00, 0xff8000, 0x8000ff)),
                "--offsetX": ((i - 4) * 10) + "em",
                "--offsetTime": Math.floor(Math.random() * -20000) + "ms",
                "--startY": "-200px",
                "--endY": "100px"
            } as React.CSSProperties}></div>)
        }
    </div>);
};

export { BackgroundLights };
