import getFontColor from './utils/getFontColor/getFontColor';
import getColorShade from "./utils/colorShade/getColorShade";
import getColorShadeHex from "./utils/colorShade/getColorShadeHex";
import getColorTintHex from "./utils/colorTint/getColorTintHex";
import getColorTint from "./utils/colorTint/getColorTint";
import getLuminance from "./utils/getLuminance/getLuminance";
import isFontColorDark from "./utils/IsFontColorDark/isFontColorDark";
import getShadowColor from "./utils/getShadowColor/getShadowColor";
import hexToRGB from "./utils/hexToRgb/hexToRgb";
import isHexSixDigits from "./utils/isHexSixDigits/isHexSixDigits";
import isValidHexColor from "./utils/isValidHexColor/isValidHexColor";
import rgbToHex from "./utils/rgbToHex/rgbToHex";
import threeDigitHexToSixDigit from "./utils/threeDigitHexToSixDigit/threeDigitHexToSixDigit";

const ColorProcessingModule = {
    getFontColor: getFontColor,
    getColorShade: getColorShade,
    getColorShadeHex: getColorShadeHex,
    getColorTint: getColorTint,
    getColorTintHex: getColorTintHex,
    getLuminance: getLuminance,
    getShadowColor: getShadowColor,
    hexToRGB: hexToRGB,
    rgbToHex: rgbToHex,
    isFontColorDark: isFontColorDark,
    isHexSixDigits: isHexSixDigits,
    isValidHexColor: isValidHexColor,
    threeDigitHexToSixDigit: threeDigitHexToSixDigit,
}

export default ColorProcessingModule