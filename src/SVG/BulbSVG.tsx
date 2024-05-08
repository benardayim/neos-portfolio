import { forwardRef, useImperativeHandle, useRef } from "react";

const BulbSVG = forwardRef<IBulbSVG, IBulbSVGProperties>((properties: IBulbSVGProperties, ref) => {
    
    let svg = useRef(null as unknown as SVGSVGElement);
    let inside = useRef(null as unknown as SVGPathElement);
    let outline = useRef(null as unknown as SVGPathElement);
    let shine = useRef(null as unknown as SVGGElement);
    
    useImperativeHandle(ref, () => ({ svg: svg.current, inside: inside.current, outline: outline.current, shine: shine.current }), []);

    return (<svg ref={ svg } x="0px" y="0px" viewBox="0 0 1200 1200" style={ properties.style } className={ properties.className }>
        <g ref={ shine } fill="#737373">
            <g>
                <g>
                    <path d="M924.5,861.091c-1.771,0-3.542-0.338-5.209-1.014c-1.666-0.676-3.228-1.69-4.58-3.042l-25.73-25.727
                l-25.73-25.727c-2.704-2.701-4.056-6.244-4.056-9.787c0-3.543,1.352-7.087,4.056-9.791c2.704-2.704,6.247-4.056,9.789-4.056
                c3.542,0,7.085,1.352,9.789,4.056l25.73,25.727l25.73,25.727c2.704,2.701,4.056,6.244,4.056,9.787s-1.352,7.087-4.056,9.791
                c-1.352,1.352-2.914,2.366-4.58,3.042S926.272,861.091,924.5,861.091z"/>
                    <path d="M326.959,263.556c-1.771,0-3.542-0.338-5.209-1.014c-1.666-0.676-3.228-1.69-4.58-3.042l-25.727-25.727
                l-25.727-25.727c-2.704-2.704-4.056-6.247-4.056-9.789s1.352-7.085,4.056-9.789c2.704-2.704,6.247-4.056,9.789-4.056
                c3.542,0,7.085,1.352,9.789,4.056l25.727,25.727l25.727,25.727c2.704,2.704,4.056,6.247,4.056,9.789s-1.352,7.085-4.056,9.789
                c-1.352,1.352-2.914,2.366-4.58,3.042C330.502,263.218,328.73,263.556,326.959,263.556z"/>
                </g>
                <g>
                    <path d="M1058.906,536.596h-36.384h-36.384c-3.824,0-7.285-1.549-9.79-4.055s-4.055-5.967-4.055-9.79
                c0-3.824,1.549-7.285,4.055-9.79s5.967-4.055,9.79-4.055h36.384h36.384c3.824,0,7.285,1.549,9.79,4.055s4.055,5.967,4.055,9.79
                c0,3.824-1.549,7.285-4.055,9.79S1062.73,536.596,1058.906,536.596z"/>
                    <path d="M213.862,536.596h-36.384h-36.384c-3.824,0-7.285-1.549-9.79-4.055s-4.055-5.967-4.055-9.79
                c0-3.824,1.549-7.285,4.055-9.79s5.967-4.055,9.79-4.055h36.384h36.384c3.824,0,7.285,1.549,9.79,4.055s4.055,5.967,4.055,9.79
                c0,3.824-1.549,7.285-4.055,9.79S217.685,536.596,213.862,536.596z"/>
                </g>
                <g>
                    <path d="M873.041,263.556c-1.771,0-3.542-0.338-5.209-1.014c-1.666-0.676-3.228-1.69-4.58-3.042
                c-2.704-2.704-4.056-6.248-4.056-9.791c0-3.543,1.352-7.085,4.056-9.787l25.73-25.727l25.73-25.727
                c2.704-2.704,6.247-4.056,9.789-4.056c3.542,0,7.085,1.352,9.789,4.056c2.704,2.704,4.056,6.248,4.056,9.791
                s-1.352,7.085-4.056,9.787l-25.73,25.727l-25.73,25.727c-1.352,1.352-2.914,2.366-4.58,3.042
                C876.583,263.218,874.812,263.556,873.041,263.556z"/>
                    <path d="M275.505,861.091c-1.771,0-3.542-0.338-5.209-1.014s-3.228-1.69-4.58-3.042
                c-2.704-2.704-4.056-6.247-4.056-9.789s1.352-7.085,4.056-9.789l25.727-25.727l25.727-25.727
                c2.704-2.704,6.247-4.056,9.789-4.056c3.542,0,7.085,1.352,9.789,4.056c2.704,2.704,4.056,6.247,4.056,9.789
                c0,3.542-1.352,7.085-4.056,9.789l-25.727,25.727l-25.727,25.727c-1.352,1.352-2.914,2.366-4.58,3.042
                S277.276,861.091,275.505,861.091z"/>
                </g>
                <g>
                    <path d="M600,150.458c-3.824,0-7.285-1.549-9.79-4.055s-4.055-5.967-4.055-9.79v-36.384V63.845
                c0-3.824,1.549-7.285,4.055-9.79S596.176,50,600,50s7.285,1.549,9.79,4.055s4.055,5.967,4.055,9.79v36.384v36.384
                c0,3.824-1.549,7.285-4.055,9.79S603.824,150.458,600,150.458z"/>
                </g>
            </g>
            <g>
                <g>
                    <path d="M462.831,180.739c-2.78,0-5.48-0.842-7.75-2.372c-2.27-1.529-4.11-3.745-5.17-6.493l-6.952-18.026
                l-6.952-18.026c-1.374-3.567-1.172-7.354,0.264-10.593c1.437-3.24,4.108-5.931,7.675-7.308
                c3.575-1.368,7.362-1.168,10.599,0.266c3.238,1.435,5.925,4.104,7.302,7.673l6.947,18.02l6.947,18.02
                c1.376,3.567,1.178,7.354-0.257,10.593c-1.435,3.24-4.105,5.932-7.672,7.308c-0.819,0.316-1.651,0.55-2.484,0.705
                C464.494,180.663,463.658,180.739,462.831,180.739z"/>
                </g>
                <g>
                    <path d="M983.942,706.897c-0.938,0-1.883-0.096-2.822-0.293s-1.872-0.496-2.786-0.902l-13.594-6.028
                l-13.594-6.027c-3.494-1.549-6.029-4.369-7.303-7.674s-1.288-7.098,0.262-10.595c1.549-3.494,4.369-6.027,7.674-7.301
                c3.306-1.274,7.098-1.287,10.595,0.26l13.594,6.027l13.594,6.028c3.494,1.549,6.029,4.369,7.303,7.674
                c1.274,3.306,1.288,7.098-0.262,10.595c-1.144,2.582-2.983,4.642-5.199,6.055C989.188,706.129,986.595,706.897,983.942,706.897z
                "/>
                    <path d="M244.862,379.087c-0.938,0-1.885-0.096-2.824-0.293c-0.94-0.197-1.873-0.496-2.784-0.902l-14.405-6.39
                l-14.405-6.39c-3.494-1.549-6.029-4.369-7.303-7.674s-1.288-7.098,0.262-10.595c1.549-3.494,4.37-6.029,7.676-7.303
                s7.099-1.288,10.593,0.262l14.405,6.39l14.405,6.39c3.496,1.549,6.032,4.37,7.305,7.676s1.286,7.099-0.264,10.593
                c-1.147,2.582-2.985,4.642-5.201,6.055C250.107,378.319,247.515,379.087,244.862,379.087z"/>
                </g>
                <g>
                    <path d="M960.844,397.507c-2.78,0-5.481-0.844-7.753-2.374c-2.271-1.531-4.113-3.748-5.173-6.495
                c-1.374-3.569-1.172-7.357,0.264-10.595c1.437-3.239,4.108-5.929,7.675-7.306l15.535-5.99l15.535-5.99
                c3.572-1.366,7.361-1.163,10.599,0.272c3.239,1.435,5.928,4.103,7.302,7.667c1.374,3.569,1.172,7.357-0.264,10.595
                s-4.108,5.929-7.675,7.306l-15.535,5.99l-15.535,5.99c-0.819,0.314-1.65,0.546-2.482,0.7
                C962.505,397.431,961.671,397.507,960.844,397.507z"/>
                    <path d="M208.102,687.676c-2.78,0-5.48-0.842-7.75-2.372c-2.27-1.53-4.11-3.747-5.17-6.497
                c-1.376-3.567-1.176-7.354,0.26-10.593c1.436-3.239,4.108-5.929,7.674-7.303l14.705-5.671l14.705-5.671
                c3.572-1.374,7.359-1.171,10.597,0.267c3.238,1.438,5.925,4.111,7.299,7.678c1.374,3.567,1.172,7.354-0.265,10.593
                c-1.437,3.239-4.11,5.93-7.68,7.303l-14.7,5.665l-14.7,5.665c-0.819,0.316-1.65,0.55-2.482,0.705
                C209.764,687.6,208.93,687.676,208.102,687.676z"/>
                </g>
                <g>
                    <path d="M759.376,177.267c-0.938,0-1.885-0.096-2.824-0.293c-0.94-0.197-1.873-0.496-2.784-0.902
                c-3.496-1.549-6.032-4.37-7.305-7.676c-1.274-3.306-1.286-7.099,0.264-10.593l5.457-12.306l5.457-12.306
                c1.555-3.496,4.381-6.032,7.688-7.305c3.308-1.274,7.098-1.286,10.581,0.264c3.496,1.549,6.032,4.37,7.305,7.676
                c1.274,3.306,1.286,7.099-0.264,10.593l-5.457,12.306l-5.457,12.306c-1.147,2.582-2.985,4.642-5.201,6.055
                C764.62,176.499,762.028,177.267,759.376,177.267z"/>
                </g>
            </g>
        </g>
        <g>
            <g>
                <g>
                    <path fill="#B3B8BD" d="M695.032,1035.588c0,27.771-11.257,52.914-29.456,71.113c-18.199,18.199-43.342,29.456-71.113,29.456
                s-52.914-11.257-71.113-29.456c-18.199-18.199-29.456-43.342-29.456-71.113c0-27.771,11.257-52.914,29.456-71.113
                c18.199-18.199,43.342-29.456,71.113-29.456s52.914,11.257,71.113,29.456C683.776,982.674,695.032,1007.816,695.032,1035.588z"/>
                    <path fill="#2E4C59" d="M594.462,1150c-31.544,0-60.146-12.831-80.863-33.548c-20.717-20.717-33.548-49.32-33.548-80.863
                c0-31.544,12.831-60.148,33.548-80.866c20.717-20.718,49.32-33.551,80.863-33.551c31.544,0,60.148,12.832,80.866,33.551
                c20.718,20.718,33.551,49.323,33.551,80.866c0,31.544-12.832,60.146-33.551,80.863C654.61,1137.169,626.006,1150,594.462,1150z
                    M594.462,948.862c-23.91,0-45.59,9.727-61.293,25.431c-15.703,15.704-25.428,37.386-25.428,61.296
                c0,23.91,9.725,45.59,25.428,61.293c15.703,15.703,37.383,25.428,61.293,25.428c23.91,0,45.591-9.725,61.296-25.428
                c15.704-15.703,25.431-37.383,25.431-61.293c0-23.91-9.727-45.592-25.431-61.296
                C640.053,958.589,618.372,948.862,594.462,948.862z"/>
                </g>
                <g opacity="0.35">
                    <path fill="#2E4C59" d="M695.032,1035.588c0,27.771-11.257,52.914-29.456,71.113c-18.199,18.199-43.342,29.456-71.113,29.456
                s-52.914-11.257-71.113-29.456c-18.199-18.199-29.456-43.342-29.456-71.113c0-27.771,11.257-52.914,29.456-71.113
                c18.199-18.199,43.342-29.456,71.113-29.456s52.914,11.257,71.113,29.456C683.776,982.674,695.032,1007.816,695.032,1035.588z"/>
                    <path fill="#2E4C59" d="M594.462,1150c-31.544,0-60.146-12.831-80.863-33.548c-20.717-20.717-33.548-49.32-33.548-80.863
                c0-31.544,12.831-60.148,33.548-80.866c20.717-20.718,49.32-33.551,80.863-33.551c31.544,0,60.148,12.832,80.866,33.551
                c20.718,20.718,33.551,49.323,33.551,80.866c0,31.544-12.832,60.146-33.551,80.863C654.61,1137.169,626.006,1150,594.462,1150z
                    M594.462,948.862c-23.91,0-45.59,9.727-61.293,25.431c-15.703,15.704-25.428,37.386-25.428,61.296
                c0,23.91,9.725,45.59,25.428,61.293c15.703,15.703,37.383,25.428,61.293,25.428c23.91,0,45.591-9.725,61.296-25.428
                c15.704-15.703,25.431-37.383,25.431-61.293c0-23.91-9.727-45.592-25.431-61.296
                C640.053,958.589,618.372,948.862,594.462,948.862z"/>
                </g>
                <g>
                    <path ref={ inside } fill="#ffffff08" d="M865.488,533.043c0-78.288-33.194-148.823-86.275-198.299c-53.081-49.476-126.05-77.893-205.601-71.944
                c-67.302,5.033-127.885,35.068-172.569,80.692s-73.471,106.837-77.182,174.225c-2.268,41.181,4.667,80.495,18.933,116.078
                c14.266,35.583,35.864,67.435,62.924,93.693c24.029,23.317,42.451,51.255,54.865,81.734s18.823,63.499,18.823,96.981v2.777v2.777
                h115.058h115.058v-2.785v-2.785c0-34.288,7.153-67.633,20.355-98.481s32.453-59.196,56.648-83.491
                c24.398-24.499,44.139-53.637,57.78-85.977C857.946,605.895,865.488,570.352,865.488,533.043z"/>
                    <path ref={ outline } fill="#737373" d="M709.522,925.601H594.465H479.407c-3.824,0-7.285-1.549-9.79-4.055s-4.055-5.967-4.055-9.79v-2.777
                v-2.777c0-32.206-6.332-63.689-18.183-92.476s-29.223-54.88-51.302-76.304c-29.613-28.734-52.26-63.19-66.935-100.793
                c-14.675-37.603-21.379-78.353-19.105-119.674c3.913-71.078,34.087-135.417,81.014-183.313s110.606-79.347,181.53-84.65
                c40.156-3.012,79.378,2.163,115.901,14.904c36.523,12.74,70.348,33.046,99.709,60.293c28.961,26.876,51.746,59.345,67.291,94.967
                s23.849,74.398,23.849,113.889c0,37.917-7.369,74.716-21.427,108.754c-14.059,34.037-34.807,65.313-61.568,92.184
                c-23.529,23.623-41.771,50.724-54.13,79.894c-12.36,29.17-18.838,60.409-18.838,92.31v2.785v2.785
                c0,3.824-1.549,7.285-4.055,9.79S713.346,925.601,709.522,925.601z M493.128,897.911h101.34h101.34
                c1.071-34.083,8.741-67.342,22.422-98.385c13.681-31.043,33.372-59.869,58.485-85.085c24.159-24.259,42.89-52.494,55.582-83.221
                c12.692-30.728,19.344-63.948,19.344-98.177c0-35.651-7.499-70.659-21.534-102.82s-34.607-61.475-60.753-85.739
                c-26.506-24.597-57.048-42.929-90.03-54.431c-32.983-11.502-68.407-16.173-104.677-13.448
                c-64.012,4.786-121.487,33.176-163.842,76.408s-69.589,101.307-73.121,165.465c-2.052,37.314,3.999,74.111,17.248,108.064
                c13.249,33.954,33.695,65.065,60.43,91.008c23.796,23.093,42.714,50.975,55.945,81.688
                C484.538,829.952,492.081,863.495,493.128,897.911z"/>
                </g>
                <g>
                    <path fill="#B3B8BD" d="M706.804,944.544H594.463H482.123c-7.105,0-13.537-2.88-18.193-7.536
                c-4.656-4.656-7.536-11.088-7.536-18.193v-2.146v-2.146c0-7.105,2.88-13.537,7.536-18.193c4.656-4.656,11.088-7.536,18.193-7.536
                h112.341h112.341c7.105,0,13.537,2.88,18.193,7.536c4.656,4.656,7.536,11.088,7.536,18.193v2.146v2.146
                c0,7.105-2.88,13.537-7.536,18.193S713.909,944.544,706.804,944.544z"/>
                    <path fill="#2E4C59" d="M704.66,958.391H594.465H484.269c-11.503,0-21.933-4.68-29.487-12.235
                c-7.554-7.555-12.232-17.986-12.232-29.49s4.678-21.933,12.232-29.487c7.554-7.554,17.984-12.232,29.487-12.232h110.196H704.66
                c11.503,0,21.933,4.678,29.487,12.232c7.554,7.554,12.232,17.984,12.232,29.487s-4.678,21.935-12.232,29.49
                C726.594,953.712,716.164,958.391,704.66,958.391z M484.269,902.638c-3.867,0-7.374,1.574-9.915,4.114s-4.114,6.048-4.114,9.915
                c0,3.87,1.574,7.378,4.114,9.919c2.541,2.541,6.048,4.115,9.915,4.115h110.196H704.66c3.867,0,7.374-1.574,9.915-4.115
                c2.541-2.541,4.114-6.05,4.114-9.919c0-3.867-1.574-7.374-4.114-9.915s-6.048-4.114-9.915-4.114H594.465H484.269z"/>
                </g>
                <g>
                    <path fill="#B3B8BD" d="M706.804,1000.293H594.463H482.123c-7.105,0-13.537-2.88-18.193-7.536
                c-4.656-4.656-7.536-11.088-7.536-18.193v-2.146v-2.146c0-7.105,2.88-13.537,7.536-18.193c4.656-4.656,11.088-7.536,18.193-7.536
                h112.341h112.341c7.105,0,13.537,2.88,18.193,7.536s7.536,11.088,7.536,18.193v2.146v2.146c0,7.105-2.88,13.537-7.536,18.193
                C720.341,997.413,713.909,1000.293,706.804,1000.293z"/>
                    <path fill="#2E4C59" d="M704.66,1014.139H594.465H484.269c-11.503,0-21.933-4.678-29.487-12.232
                c-7.554-7.554-12.232-17.984-12.232-29.487c0-11.503,4.678-21.933,12.232-29.487c7.554-7.554,17.984-12.232,29.487-12.232
                h110.196H704.66c11.503,0,21.933,4.678,29.487,12.232c7.554,7.554,12.232,17.984,12.232,29.487
                c0,11.503-4.678,21.933-12.232,29.487C726.594,1009.461,716.164,1014.139,704.66,1014.139z M484.269,958.391
                c-3.867,0-7.374,1.574-9.915,4.114s-4.114,6.048-4.114,9.915c0,3.867,1.574,7.374,4.114,9.915s6.048,4.114,9.915,4.114h110.196
                H704.66c3.867,0,7.374-1.574,9.915-4.114s4.114-6.048,4.114-9.915c0-3.867-1.574-7.374-4.114-9.915s-6.048-4.114-9.915-4.114
                H594.465H484.269z"/>
                </g>
                <g>
                    <path fill="#B3B8BD" d="M706.804,1056.042H594.463H482.123c-7.105,0-13.537-2.88-18.193-7.536
                c-4.656-4.656-7.536-11.088-7.536-18.193v-2.146v-2.146c0-7.105,2.88-13.537,7.536-18.193c4.656-4.656,11.088-7.536,18.193-7.536
                h112.341h112.341c7.105,0,13.537,2.88,18.193,7.536s7.536,11.088,7.536,18.193v2.146v2.146c0,7.105-2.88,13.537-7.536,18.193
                C720.341,1053.162,713.909,1056.042,706.804,1056.042z"/>
                    <path fill="#2E4C59" d="M704.66,1069.888H594.465H484.269c-11.503,0-21.933-4.678-29.487-12.232
                c-7.554-7.554-12.232-17.984-12.232-29.487c0-11.503,4.678-21.933,12.232-29.487c7.554-7.554,17.984-12.232,29.487-12.232
                h110.196H704.66c11.503,0,21.933,4.678,29.487,12.232c7.554,7.554,12.232,17.984,12.232,29.487
                c0,11.503-4.678,21.933-12.232,29.487C726.594,1065.209,716.164,1069.888,704.66,1069.888z M484.269,1014.139
                c-3.867,0-7.374,1.574-9.915,4.114s-4.114,6.048-4.114,9.915c0,3.867,1.574,7.374,4.114,9.915s6.048,4.114,9.915,4.114h110.196
                H704.66c3.867,0,7.374-1.574,9.915-4.114s4.114-6.048,4.114-9.915c0-3.867-1.574-7.374-4.114-9.915s-6.048-4.114-9.915-4.114
                H594.465H484.269z"/>
                </g>
                <g opacity="0.35">
                    <path fill="#2E4C59" d="M543.327,773.451c-33.239-56.25-70.313-109.944-100.356-165.555
                c-30.043-55.611-53.054-113.14-58.168-177.061c-0.784-11.765-0.963-24.01-0.393-36.385c0.57-12.375,1.89-24.882,4.102-37.169
                c-18.734,21.922-34.059,46.822-45.119,73.846c-11.06,27.024-17.856,56.172-19.531,86.589
                c-2.268,41.181,4.667,80.495,18.933,116.078c14.266,35.583,35.864,67.435,62.924,93.693
                c22.005,21.353,39.291,46.583,51.567,74.092c12.276,27.508,19.543,57.295,21.51,87.761c-6.386,1.272-11.987,4.725-15.99,9.549
                c-4.004,4.824-6.411,11.021-6.411,17.781c0,7.697,3.12,14.666,8.164,19.71c5.044,5.044,12.013,8.164,19.71,8.164
                c-7.697,0-14.666,3.12-19.71,8.164c-5.044,5.044-8.164,12.013-8.164,19.711c0,7.697,3.12,14.666,8.164,19.71
                c5.044,5.044,12.013,8.164,19.71,8.164c-7.697,0-14.666,3.12-19.71,8.164c-5.044,5.044-8.164,12.013-8.164,19.71
                c0,7.697,3.12,14.666,8.164,19.711c5.044,5.044,12.013,8.164,19.71,8.164h52.904h52.904c0.15-49.245,1.82-97.949-3.226-145.313
                S570.042,817.339,543.327,773.451z"/>
                    <path fill="#2E4C59" d="M590.076,1069.888h-52.904h-52.903c-11.503,0-21.933-4.678-29.487-12.232
                c-7.554-7.554-12.232-17.984-12.232-29.487c0-5.351,1.013-10.472,2.857-15.178s4.52-8.999,7.846-12.696
                c-3.326-3.697-6.002-7.989-7.846-12.696s-2.857-9.827-2.857-15.178c0-5.352,1.014-10.472,2.859-15.178
                c1.845-4.707,4.521-8.999,7.844-12.696c-3.323-3.697-5.999-7.989-7.844-12.697c-1.845-4.707-2.859-9.829-2.859-15.183
                c0-7.734,2.144-15.067,5.913-21.367s9.162-11.564,15.66-15.161c-2.904-27.593-10.342-53.981-21.841-78.117
                c-11.499-24.136-27.058-46.019-46.206-64.602c-29.613-28.734-52.26-63.19-66.935-100.793
                c-14.675-37.603-21.379-78.353-19.105-119.674c1.717-31.173,8.45-61.342,19.881-89.716c11.431-28.374,27.56-54.955,48.068-78.951
                c2.028-2.377,4.73-3.926,7.63-4.546c2.9-0.62,5.999-0.31,8.822,1.031c2.826,1.339,5.027,3.541,6.383,6.178
                c1.356,2.637,1.867,5.709,1.313,8.786c-1.955,10.873-3.238,22.377-3.831,34.182c-0.593,11.806-0.496,23.913,0.31,35.995
                c3.953,49.415,19.01,94.901,40.001,139.033c20.991,44.131,47.918,86.908,75.611,130.904
                c6.801,10.806,13.717,21.794,20.597,32.897c6.88,11.103,13.724,22.321,20.382,33.587c25.24,41.495,37.66,85.056,43.673,129.275
                c6.013,44.219,5.618,89.097,5.228,133.225c-0.038,4.532-0.077,9.068-0.11,13.61c-0.033,4.542-0.06,9.089-0.074,13.642
                c-0.011,3.815-1.564,7.266-4.069,9.762S593.891,1069.888,590.076,1069.888z M484.269,1014.139c-3.867,0-7.374,1.574-9.915,4.114
                s-4.114,6.048-4.114,9.915c0,3.867,1.574,7.374,4.114,9.915s6.048,4.114,9.915,4.114h46.019h46.019
                c0.016-2.271,0.034-4.54,0.053-6.808c0.019-2.267,0.039-4.533,0.061-6.8c0.387-44.142,0.763-87.061-4.761-128.477
                s-16.947-81.331-40.16-119.464c-0.016-0.024-0.031-0.05-0.046-0.076c-0.015-0.026-0.03-0.053-0.046-0.08
                c-6.566-11.109-13.342-22.213-20.167-33.224c-6.825-11.011-13.697-21.929-20.455-32.664
                c-27.363-43.477-55.194-87.693-77.242-134.266s-38.313-95.501-42.545-148.402c-0.276-4.124-0.476-8.248-0.601-12.363
                c-0.125-4.115-0.175-8.221-0.151-12.31c-9.635,16.99-17.231,34.917-22.69,53.535s-8.783,37.927-9.873,57.68
                c-2.052,37.314,3.999,74.111,17.248,108.064c13.249,33.954,33.695,65.065,60.43,91.008c22.78,22.106,41.027,48.332,54.112,77.28
                c13.085,28.948,21.008,60.619,23.139,93.615c0.222,3.464-0.854,6.743-2.837,9.325c-1.983,2.582-4.872,4.469-8.277,5.147
                c-3.264,0.649-6.079,2.419-8.078,4.86c-1.999,2.441-3.182,5.554-3.182,8.888c0,3.87,1.574,7.378,4.114,9.919
                c2.541,2.541,6.048,4.115,9.915,4.115c3.824,0,7.285,1.549,9.79,4.055s4.055,5.967,4.055,9.79s-1.549,7.285-4.055,9.79
                s-5.967,4.055-9.79,4.055c-3.867,0-7.374,1.574-9.915,4.114s-4.114,6.048-4.114,9.915c0,3.867,1.574,7.374,4.114,9.915
                s6.048,4.114,9.915,4.114c3.824,0,7.285,1.549,9.79,4.055s4.055,5.967,4.055,9.79c0,3.824-1.549,7.285-4.055,9.79
                S488.092,1014.139,484.269,1014.139z"/>
                </g>
                <path fill="#FFFFFFC0" d="M802.684,516c-16.474,19.047-43.437,25.869-73.714,21.501c-30.277-4.367-63.867-19.924-93.594-45.636
            s-49.963-56.709-58.648-86.04c-8.685-29.331-5.821-56.996,10.653-76.043c16.474-19.047,43.437-25.869,73.714-21.501
            c30.277,4.367,63.867,19.924,93.594,45.636c29.727,25.711,49.963,56.709,58.648,86.04
            C822.022,469.288,819.157,496.953,802.684,516z"/>
                <path fill="#2E4C59" d="M594.462,902.638c-3.824,0-7.285-1.549-9.79-4.055s-4.055-5.967-4.055-9.79V772.315V655.837
            c0-3.824,1.549-7.285,4.055-9.79s5.967-4.055,9.79-4.055c3.824,0,7.285,1.549,9.79,4.055s4.055,5.967,4.055,9.79v116.477v116.477
            c0,3.824-1.549,7.285-4.055,9.79S598.286,902.638,594.462,902.638z"/>
                <path fill="#2E4C59" d="M590.46,669.683c-24.348,0-44.192-10.825-58.11-21.88c-13.917-11.055-21.908-22.341-22.549-23.263
            c-2.182-3.139-2.885-6.866-2.259-10.353c0.627-3.488,2.583-6.737,5.72-8.922c3.142-2.177,6.868-2.881,10.355-2.257
            c3.487,0.625,6.735,2.578,8.92,5.718c0.103,0.149,6.068,8.465,16.265,16.745s24.626,16.522,41.657,16.522
            c16.99,0,31.275-8.218,41.34-16.477s15.912-16.559,16.025-16.724c2.177-3.14,5.419-5.105,8.901-5.747
            c3.482-0.642,7.204,0.041,10.341,2.199c3.142,2.161,5.119,5.384,5.773,8.855c0.654,3.471-0.016,7.189-2.165,10.339
            c-0.633,0.925-8.492,12.236-22.291,23.316S614.848,669.683,590.46,669.683z"/>
            </g>
        </g>
    </svg>)
});

interface IBulbSVG {
    svg: SVGSVGElement;
    inside: SVGPathElement;
    outline: SVGPathElement;
    shine: SVGGElement;
}

interface IBulbSVGProperties {
    style?: React.CSSProperties;
    className?: string;
}

export { BulbSVG, type IBulbSVG };