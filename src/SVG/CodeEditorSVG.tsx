import { forwardRef, useImperativeHandle, useRef } from "react";

const CodeEditorSVG = forwardRef<ICodeEditorSVG, ICodeEditorSVGProperties>((properties: ICodeEditorSVGProperties, ref) => {
    
    let svg = useRef(null as unknown as SVGSVGElement);
    let code = useRef(null as unknown as SVGGElement);
    
    useImperativeHandle(ref, () => ({ svg: svg.current, code: code.current }), []);

    return (<svg ref={ svg } viewBox="0 0 127 79" style={ properties.style } className={ properties.className }>
        <g clipPath="url(#CodeEditorSVGClip1)">
            <rect width="127" height="79" rx="6" fill="white" />
            <rect x="4.82715" y="5.97443" width="23.3625" height="73.0256" fill="#001C43" />
            <rect y="6.82733" width="5.55859" height="72.1727" fill="#001735" />
            <rect x="1.10889" y="8.16983" width="3.34082" height="1.05496" rx="0.527481" fill="white" />
            <rect y="7.12921" width="0.3" height="5" fill="white" />
            <rect x="1.10889" y="10.0336" width="3.34082" height="1.05496" rx="0.527481" fill="white" />
            <rect x="1.10889" y="13.1698" width="3.34082" height="1.05496" rx="0.527481" fill="#637487" />
            <rect x="1.10889" y="15.0336" width="3.34082" height="1.05496" rx="0.527481" fill="#637487" />
            <rect x="1.10889" y="18.1698" width="3.34082" height="1.05496" rx="0.527481" fill="#637487" />
            <rect x="1.10889" y="20.0336" width="3.34082" height="1.05496" rx="0.527481" fill="#637487" />
            <rect x="1.10889" y="23.1698" width="3.34082" height="1.05496" rx="0.527481" fill="#637487" />
            <rect x="1.10889" y="25.0336" width="3.34082" height="1.05496" rx="0.527481" fill="#637487" />
            <rect x="1.10889" y="28.1698" width="3.34082" height="1.05496" rx="0.527481" fill="#637487" />
            <rect x="1.10889" y="30.0336" width="3.34082" height="1.05496" rx="0.527481" fill="#637487" />
            <g ref={ code } clipPath="url(#CodeEditorSVGClip2)">
                <rect width="99.42" height="72.86" transform="translate(27.58 6.14001)" fill="#002454" />
                <g>
                    <rect x="29.1189" y="7.57236" width="6.047" height="1.63004" rx="0.815018" fill="#F4894C" />
                </g>
                <g>
                    <rect x="31.3318" y="10.0298" width="6.30688" height="1.63004" rx="0.815018" fill="#F1F44C" />
                    <rect x="38.6262" y="10.0298" width="3.88477" height="1.63004" rx="0.815018" fill="#4CF4F4" />
                </g>
                <g>
                    <rect x="31.3318" y="12.4269" width="5.80701" height="1.63004" rx="0.815018" fill="#4C5DF4" />
                    <rect x="38.1584" y="12.4269" width="6.14978" height="1.63004" rx="0.815018" fill="#964CF4" />
                    <rect x="45.4192" y="12.4269" width="8.42371" height="1.63004" rx="0.815018" fill="#F44C4C" />
                </g>
                <g>
                    <rect x="31.3318" y="14.8239" width="3.83411" height="1.63004" rx="0.815018" fill="#F46B4C" />
                    <rect x="36.3313" y="14.8239" width="4.29712" height="1.63004" rx="0.815018" fill="#F4C54C" />
                    <rect x="41.7394" y="14.8239" width="8.27783" height="1.63004" rx="0.815018" fill="#F44C4C" />
                </g>
                <g>
                    <rect x="31.3318" y="17.0269" width="6.82666" height="1.63004" rx="0.815018" fill="#4CF49A" />
                    <rect x="38.6262" y="17.0269" width="6.79297" height="1.63004" rx="0.815018" fill="#F44CCF" />
                </g>
                <g>
                    <rect x="31.3318" y="19.5778" width="6.30688" height="1.63004" rx="0.815018" fill="#F1F44C" />
                    <rect x="38.6262" y="19.5778" width="7.83191" height="1.63004" rx="0.815018" fill="#4CF4F4" />
                </g>
                <g>
                    <rect x="31.3318" y="21.9748" width="5.80701" height="1.63004" rx="0.815018" fill="#4C5DF4" />
                    <rect x="38.1584" y="21.9748" width="6.14978" height="1.63004" rx="0.815018" fill="#964CF4" />
                    <rect x="45.4192" y="21.9748" width="14.2753" height="1.63004" rx="0.815018" fill="#4CC2F4" />
                </g>
                <g>
                    <rect x="31.3318" y="24.3719" width="3.83411" height="1.63004" rx="0.815018" fill="#DDF44C" />
                    <rect x="36.3313" y="24.3719" width="4.29712" height="1.63004" rx="0.815018" fill="#4CF4F4" />
                    <rect x="41.7394" y="24.3719" width="8.27783" height="1.63004" rx="0.815018" fill="#F44C4C" />
                </g>
                <g>
                    <rect x="31.3318" y="26.5749" width="6.82666" height="1.63004" rx="0.815018" fill="#F4934C" />
                    <rect x="38.6262" y="26.5749" width="4.29712" height="1.63004" rx="0.815018" fill="#F44CCF" />
                </g>
                <g>
                    <rect x="31.3318" y="29.1257" width="6.30688" height="1.63004" rx="0.815018" fill="#F1F44C" />
                    <rect x="38.6262" y="29.1257" width="5.68201" height="1.63004" rx="0.815018" fill="#4CF4F4" />
                </g>
                <g>
                    <rect x="31.3318" y="31.5228" width="5.80701" height="1.63004" rx="0.815018" fill="#4C5DF4" />
                    <rect x="38.1584" y="31.5228" width="6.14978" height="1.63004" rx="0.815018" fill="#964CF4" />
                    <rect x="45.4192" y="31.5228" width="8.42371" height="1.63004" rx="0.815018" fill="#F44C4C" />
                </g>
                <g>
                    <rect x="31.3318" y="33.9198" width="3.83411" height="1.63004" rx="0.815018" fill="#F46B4C" />
                    <rect x="36.3313" y="33.9198" width="4.29712" height="1.63004" rx="0.815018" fill="#4CF4F4" />
                    <rect x="41.7394" y="33.9198" width="8.27783" height="1.63004" rx="0.815018" fill="#F44C89" />
                </g>
                <g>
                    <rect x="31.3318" y="36.1228" width="6.82666" height="1.63004" rx="0.815018" fill="#4CF49A" />
                    <rect x="38.6262" y="36.1228" width="4.29712" height="1.63004" rx="0.815018" fill="#4CF45D" />
                </g>
                <g>
                    <rect x="31.3318" y="38.6737" width="6.30688" height="1.63004" rx="0.815018" fill="#F1F44C" />
                    <rect x="38.6262" y="38.6737" width="8.58691" height="1.63004" rx="0.815018" fill="#4CF4F4" />
                </g>
                <g>
                    <rect x="31.3318" y="41.0707" width="5.80701" height="1.63004" rx="0.815018" fill="#4C5DF4" />
                    <rect x="38.1584" y="41.0707" width="6.14978" height="1.63004" rx="0.815018" fill="#964CF4" />
                    <rect x="45.4192" y="41.0707" width="5.0697" height="1.63004" rx="0.815018" fill="#F44C4C" />
                </g>
                <g>
                    <rect x="41.7394" y="43.4677" width="8.27783" height="1.63004" rx="0.815018" fill="#824CF4" />
                    <rect x="36.3313" y="43.4677" width="4.29712" height="1.63004" rx="0.815018" fill="#4CF4F4" />
                    <rect x="31.3318" y="43.4677" width="3.83411" height="1.63004" rx="0.815018" fill="#F46B4C" />
                </g>
                <g>
                    <rect x="31.3318" y="45.6708" width="6.82666" height="1.63004" rx="0.815018" fill="#4CF49A" />
                    <rect x="38.6262" y="45.6708" width="4.29712" height="1.63004" rx="0.815018" fill="#F44CCF" />
                </g>
                <g>
                    <rect x="29.1189" y="47.8738" width="6.047" height="1.63004" rx="0.815018" fill="#F4894C" />
                </g>
                <g>
                    <rect x="29.1189" y="50.0768" width="6.047" height="1.63004" rx="0.815018" fill="#F4894C" />
                </g>
                <g>
                    <rect x="31.3318" y="52.5343" width="6.30688" height="1.63004" rx="0.815018" fill="#F1F44C" />
                    <rect x="38.6262" y="52.5343" width="3.88477" height="1.63004" rx="0.815018" fill="#4CF4F4" />
                </g>
                <g>
                    <rect x="31.3318" y="54.9313" width="5.80701" height="1.63004" rx="0.815018" fill="#4C5DF4" />
                    <rect x="38.1584" y="54.9313" width="6.14978" height="1.63004" rx="0.815018" fill="#964CF4" />
                    <rect x="45.4192" y="54.9313" width="8.42371" height="1.63004" rx="0.815018" fill="#F44C4C" />
                </g>
                <g>
                    <rect x="31.3318" y="57.3284" width="3.83411" height="1.63004" rx="0.815018" fill="#F46B4C" />
                    <rect x="36.3313" y="57.3284" width="4.29712" height="1.63004" rx="0.815018" fill="#4CF4F4" />
                    <rect x="41.7394" y="57.3284" width="8.27783" height="1.63004" rx="0.815018" fill="#F44C4C" />
                </g>
                <g>
                    <rect x="31.3318" y="59.5314" width="6.82666" height="1.63004" rx="0.815018" fill="#4CF49A" />
                    <rect x="38.6262" y="59.5314" width="5.68201" height="1.63004" rx="0.815018" fill="#F44CCF" />
                </g>
                <g>
                    <rect x="31.3318" y="62.0823" width="6.30688" height="1.63004" rx="0.815018" fill="#F1F44C" />
                    <rect x="38.6262" y="62.0823" width="5.68201" height="1.63004" rx="0.815018" fill="#4CF4F4" />
                </g>
                <g>
                    <rect x="31.3318" y="64.4793" width="5.80701" height="1.63004" rx="0.815018" fill="#4C5DF4" />
                    <rect x="38.1584" y="64.4793" width="6.14978" height="1.63004" rx="0.815018" fill="#964CF4" />
                </g>
                <g>
                    <rect x="29.1189" y="66.8763" width="6.047" height="1.63004" rx="0.815018" fill="#F4894C" />
                </g>
            </g>
            <rect width="127" height="6.9996" fill="#001735" />
            <circle cx="3.57423" cy="3.4998" r="1.31459" fill="#FF4747" />
            <circle cx="7.64466" cy="3.4998" r="1.31459" fill="#FFB547" />
            <circle cx="11.7151" cy="3.4998" r="1.31459" fill="#55CB4A" />
            <rect x="6.50281" y="8.16983" width="11.3918" height="0.841425" rx="0.420713" fill="#CCCCCC" />
            <rect x="7.5" y="10.0336" width="6.19507" height="0.841425" rx="0.420713" fill="#CCCCCC" />
            <rect x="7.5" y="11.89" width="4.87183" height="0.841425" rx="0.420713" fill="#8C8C8C" />
            <rect x="7.5" y="13.75" width="7.11548" height="0.841425" rx="0.420713" fill="#8C8C8C" />
            <rect x="7.5" y="15.61" width="6.19507" height="0.841425" rx="0.420713" fill="#CCCCCC" />
            <rect x="7.5" y="17.47" width="8.54785" height="0.841425" rx="0.420713" fill="#8C8C8C" />
            <rect x="7.5" y="19.33" width="5.13672" height="0.841425" rx="0.420713" fill="#CCCCCC" />
            <rect x="7.5" y="21.1899" width="6.75256" height="0.841425" rx="0.420713" fill="#8C8C8C" />
            <rect x="7.5" y="23.0499" width="7.82971" height="0.841425" rx="0.420713" fill="#8C8C8C" />
            <rect x="7.5" y="24.9099" width="5.56763" height="0.841425" rx="0.420713" fill="#CCCCCC" />
            <rect x="8.5" y="26.7699" width="5.84167" height="0.841425" rx="0.420713" fill="#CCCCCC" />
            <rect x="8.5" y="28.6299" width="3.03857" height="0.841425" rx="0.420713" fill="#8C8C8C" />
            <rect x="8.5" y="30.4899" width="7.4812" height="0.841425" rx="0.420713" fill="#CCCCCC" />
            <rect x="8.5" y="32.3499" width="6.21191" height="0.841425" rx="0.420713" fill="#CCCCCC" />
            <rect x="8.5" y="34.2098" width="4.30786" height="0.841425" rx="0.420713" fill="#8C8C8C" />
            <rect x="8.5" y="36.0698" width="5.41858" height="0.841425" rx="0.420713" fill="#8C8C8C" />
            <rect x="8.5" y="37.9298" width="2.82703" height="0.841425" rx="0.420713" fill="#8C8C8C" />
            <rect x="8.5" y="39.7898" width="4.86316" height="0.841425" rx="0.420713" fill="#CCCCCC" />
            <rect x="7.5" y="41.6498" width="7.21191" height="0.841425" rx="0.420713" fill="#8C8C8C" />
            <rect x="7.5" y="43.5098" width="2.82214" height="0.841425" rx="0.420713" fill="#CCCCCC" />
            <rect x="7.5" y="45.3698" width="5.06982" height="0.841425" rx="0.420713" fill="#8C8C8C" />
            <rect x="7.5" y="47.2297" width="3.82703" height="0.841425" rx="0.420713" fill="#CCCCCC" />
            <rect x="7.5" y="49.0897" width="5.06982" height="0.841425" rx="0.420713" fill="#8C8C8C" />
        </g>
        <defs>
            <clipPath id="CodeEditorSVGClip1">
                <rect width="127" height="79" rx="6" fill="white" />
            </clipPath>
            <clipPath id="CodeEditorSVGClip2">
                <rect width="99.42" height="72.86" fill="white" transform="translate(27.58 6.14001)" />
            </clipPath>
        </defs>
    </svg>)
});

interface ICodeEditorSVG {
    svg: SVGSVGElement;
    code: SVGGElement;
}

interface ICodeEditorSVGProperties {
    style?: React.CSSProperties;
    className?: string;
}

export { CodeEditorSVG, type ICodeEditorSVG };
