type RGBColor = [number, number, number];
type DecimalColor = number;

const ColorAt = (percent: number, ...colors: (RGBColor | DecimalColor)[] ): RGBColor => {
    let rgb = colors.map(e => (typeof(e) == "number") ? Decimal2RGB(e) : e);

    let colorDiff = 1 / (rgb.length - 1);
    let startIndex = Math.floor(percent / colorDiff);
    let colorPercent = (percent % colorDiff) / colorDiff;

    return [
        Math.round((rgb[startIndex + 1][0] - rgb[startIndex][0]) * colorPercent + rgb[startIndex][0]),
        Math.round((rgb[startIndex + 1][1] - rgb[startIndex][1]) * colorPercent + rgb[startIndex][1]),
        Math.round((rgb[startIndex + 1][2] - rgb[startIndex][2]) * colorPercent + rgb[startIndex][2])
    ];
};

const Decimal2RGB = (dec: DecimalColor): RGBColor => [(dec >> 16) & 0xFF, (dec >> 8) & 0xFF, dec & 0xFF];
const RGB2Decimal = (rgb: RGBColor): DecimalColor => rgb[0] << 16 | rgb[1] << 8 | rgb[2];
const Decimal2HexString = (dec: DecimalColor): string => `#${(((dec >> 16) & 0xFF).toString(16)).slice(-2)}${(((dec >> 8) & 0xFF).toString(16)).slice(-2)}${((dec & 0xFF).toString(16)).slice(-2)}`;
const RGB2HexString = (rgb: RGBColor): string => `#${("0" + rgb[0].toString(16)).slice(-2)}${("0" + rgb[1].toString(16)).slice(-2)}${("0" + rgb[2].toString(16)).slice(-2)}`;

export { type RGBColor, type DecimalColor, ColorAt, Decimal2RGB, RGB2Decimal, Decimal2HexString, RGB2HexString };
