import { forwardRef } from "react";

const WebPageSVG = forwardRef<SVGSVGElement, IWebPageSVGProperties>((properties: IWebPageSVGProperties, ref) => {
    return (<svg ref={ ref } viewBox="0 0 127 79" fill="none" className={ properties.className } style={ properties.style }>
        <g clipPath="url(#webPageClipPath)">
            <rect width="127" height="79" rx="6" fill="#9E9E9E" />
            <rect x="19" y="57" width="89" height="38" rx="2" fill="#CC00FF" />
            <rect x="54" y="59" width="20" height="2" rx="1" fill="white" />
            <rect x="-41.8" y="14" width="68.2" height="38" rx="2" fill="#6100FF" />
            <rect x="23.4" y="32" width="2" height="2" rx="1" fill="white" />
            <rect x="29.4" y="14" width="68.2" height="38" rx="2" fill="#6100FF" />
            <rect x="30.4" y="32" width="2" height="2" rx="1" fill="white" />
            <rect x="94.6" y="32" width="2" height="2" rx="1" fill="white" />
            <rect x="100.6" y="14" width="68.2" height="38" rx="2" fill="#6100FF" />
            <rect x="101.6" y="32" width="2" height="2" rx="1" fill="white" />
            <rect width="127" height="12" fill="#0047FF" />
            <rect x="3" y="3" width="15" height="6" rx="3" fill="white" />
            <rect x="112" y="5" width="10" height="2" rx="1" fill="white" />
            <rect x="97" y="5" width="10" height="2" rx="1" fill="white" />
            <rect x="82" y="5" width="10" height="2" rx="1" fill="white" />
        </g>
        <defs>
            <clipPath id="webPageClipPath">
                <rect width="127" height="79" rx="6" fill="white" />
            </clipPath>
        </defs> 
    </svg>);
});

interface IWebPageSVGProperties {
    style?: React.CSSProperties;
    className?: string;
}

export { WebPageSVG };
