import { HexColor, threeDigitHexRegex } from '../../shared';

/**
 * Converts 3 digit hex color triplet to 6 digits color triplet
 * @example input: #444 -> output: #444444
 * @param {HexColor} color - 3 digit hexadecimal color triplet
 * @returns {HexColor} 6 digit hexadecimal color triplet
 * */
export default function threeDigitHexToSixDigit(color: HexColor): HexColor {
  const hexColorArray = threeDigitHexRegex.exec(color);
  if (hexColorArray){
    return `#${hexColorArray[1].repeat(2)}${hexColorArray[2].repeat(2)}${hexColorArray[3].repeat(2)}`;
  }
  else {
    throw new Error(`Invalid hex, got: ${color}`,)
  }
}