
import React, { forwardRef, useContext } from "react";
import { IconProps, IconContext } from "../lib";

const renderPathFor = (weight: string, color: string): JSX.Element | null => {
  switch (weight) {
    case "bold":
      return (
  <g fill="none" fillRule="evenodd" stroke="none" strokeWidth="1">
    <polygon points="0 16 16 16 16 0 0 0"/>
    <path fill={color} fillRule="nonzero" d="M8,1.25 C11.7272136,1.25 14.75,4.27278644 14.75,8 C14.75,11.7272136 11.7272136,14.75 8,14.75 C4.27278644,14.75 1.25,11.7272136 1.25,8 C1.25,6.13944331 2.003225,4.45441742 3.22130063,3.23329668 C3.22313176,3.23133417 3.22530826,3.22913132 3.22750117,3.22693866 C4.45441742,2.003225 6.13944331,1.25 8,1.25 Z M3.79546625,4.85611435 C3.13893808,5.73259799 2.75,6.8210092 2.75,8 C2.75,10.8987864 5.10121356,13.25 8,13.25 C9.1789908,13.25 10.267402,12.8610619 11.1438856,12.2045338 Z M8,2.75 C6.8210092,2.75 5.73259799,3.13893808 4.85611435,3.79546625 L12.2045338,11.1438856 C12.8610619,10.267402 13.25,9.1789908 13.25,8 C13.25,5.10121356 10.8987864,2.75 8,2.75 Z"/>
  </g>

)
    case "duotone":
      return (
  <g fill="none" fillRule="evenodd" stroke="none" strokeWidth="1">
    <polygon points="0 16 16 16 16 0 0 0"/>
    <path fill={color} d="M14,8 C14,11.313 11.313,14 8,14 C4.687,14 2,11.313 2,8 C2,4.687 4.687,2 8,2 C11.313,2 14,4.687 14,8" opacity=".2"/>
    <path fill={color} fillRule="nonzero" d="M8,1.5 C11.5891424,1.5 14.5,4.41085763 14.5,8 C14.5,11.5891424 11.5891424,14.5 8,14.5 C4.41085763,14.5 1.5,11.5891424 1.5,8 C1.5,6.20892993 2.22487771,4.58677004 3.3971917,3.41096176 C3.39926864,3.40877652 3.40175184,3.40624108 3.40426745,3.40372577 C4.58767603,2.22447292 6.20943009,1.5 8,1.5 Z M3.77366956,4.4806767 C2.97847886,5.43449246 2.5,6.66152257 2.5,8 C2.5,11.0368576 4.96314237,13.5 8,13.5 C9.33847743,13.5 10.5655075,13.0215211 11.5193233,12.2263304 Z M8,2.5 C6.66199738,2.5 5.43536302,2.97813946 4.48169186,3.77282343 L12.2263304,11.5193233 C13.0215211,10.5655075 13.5,9.33847743 13.5,8 C13.5,4.96314237 11.0368576,2.5 8,2.5 Z"/>
  </g>

)
    case "fill":
      return (
  <g fill="none" fillRule="evenodd" stroke="none" strokeWidth="1">
    <polygon points="0 16 16 16 16 0 0 0"/>
    <path fill={color} d="M4.8535,5.5601 L10.4395,11.1471 C9.7625,11.6731 8.9225,12.0001 7.9995,12.0001 C5.7935,12.0001 3.9995,10.2061 3.9995,8.0001 C3.9995,7.0781 4.3265,6.2381 4.8535,5.5601 M11.1465,10.4401 L5.5605,4.8531 C6.2375,4.3271 7.0775,4.0001 7.9995,4.0001 C10.2065,4.0001 11.9995,5.7941 11.9995,8.0001 C11.9995,8.9221 11.6735,9.7621 11.1465,10.4401 M12.6425,12.5441 C13.8385,11.3221 14.4995,9.7131 14.4995,8.0001 C14.4995,6.2641 13.8235,4.6311 12.5955,3.4041 C11.3685,2.1761 9.7365,1.5001 7.9995,1.5001 C6.2875,1.5001 4.6775,2.1611 3.4565,3.3571 C3.4365,3.3721 3.4145,3.3791 3.3965,3.3961 C3.3785,3.4141 3.3715,3.4361 3.3575,3.4561 C2.1615,4.6781 1.4995,6.2871 1.4995,8.0001 C1.4995,9.7361 2.1765,11.3691 3.4045,12.5961 C4.6315,13.8241 6.2635,14.5001 7.9995,14.5001 C9.7125,14.5001 11.3225,13.8391 12.5435,12.6431 C12.5635,12.6281 12.5855,12.6211 12.6035,12.6031 C12.6215,12.5861 12.6285,12.5631 12.6425,12.5441"/>
  </g>

)
    case "light":
      return (
  <g fill="none" fillRule="evenodd" stroke="none" strokeWidth="1">
    <polygon points="0 16 16 16 16 0 0 0"/>
    <path fill={color} fillRule="nonzero" d="M8,1.625 C11.5201068,1.625 14.375,4.47989322 14.375,8 C14.375,11.5201068 11.5201068,14.375 8,14.375 C4.47989322,14.375 1.625,11.5201068 1.625,8 C1.625,4.47989322 4.47989322,1.625 8,1.625 Z M3.76637836,4.29678827 C2.90008964,5.28628707 2.375,6.58198784 2.375,8 C2.375,11.1058932 4.89410678,13.625 8,13.625 C9.41801216,13.625 10.7137129,13.0999104 11.7032117,12.2336216 Z M8,2.375 C6.58198784,2.375 5.28628707,2.90008964 4.29678827,3.76637836 L12.2327414,11.7042169 C13.0995547,10.7145905 13.625,9.41849236 13.625,8 C13.625,4.89410678 11.1058932,2.375 8,2.375 Z"/>
  </g>

)
    case "thin":
      return (
  <g fill="none" fillRule="evenodd" stroke="none" strokeWidth="1">
    <polygon points="0 16 16 16 16 0 0 0"/>
    <path fill={color} fillRule="nonzero" d="M8,1.75 C11.4510712,1.75 14.25,4.54892881 14.25,8 C14.25,9.72400178 13.5515112,11.2852577 12.422167,12.4161344 C12.4209622,12.4166674 12.4197717,12.4178819 12.4185663,12.4190871 C11.2843317,13.5519254 9.72349051,14.25 8,14.25 C4.54892881,14.25 1.75,11.4510712 1.75,8 C1.75,6.27599822 2.44848879,4.71474231 3.57783302,3.58386564 C3.5785929,3.58297847 3.57980559,3.58174088 3.58103372,3.58051289 C4.71566834,2.44807456 6.27650949,1.75 8,1.75 Z M3.76113065,4.11533996 C2.82278051,5.138658 2.25,6.50261497 2.25,8 C2.25,11.1749288 4.82507119,13.75 8,13.75 C9.49738503,13.75 10.861342,13.1772195 11.88466,12.2388694 Z M8,2.25 C6.50261497,2.25 5.138658,2.82278051 4.11533996,3.76113065 L12.2388694,11.88466 C13.1772195,10.861342 13.75,9.49738503 13.75,8 C13.75,4.82507119 11.1749288,2.25 8,2.25 Z"/>
  </g>

)
    case "regular":
      return (
  <g fill="none" fillRule="evenodd" stroke="none" strokeWidth="1">
    <polygon points="0 16 16 16 16 0 0 0"/>
    <path fill={color} fillRule="nonzero" d="M3.40407118,3.40432205 C5.94235057,0.864959317 10.0580494,0.864959317 12.5963288,3.40432205 C15.1345281,5.94252133 15.1345281,10.058162 12.5963288,12.5952779 C10.0580494,15.1346407 5.94235057,15.1346407 3.40429754,12.5955043 C0.864846735,10.0582202 0.864846735,5.94246315 3.40407118,3.40432205 Z M3.77381526,4.48026517 C1.96915006,6.6409243 2.08161219,9.86033713 4.11132882,11.8883221 C6.14004895,13.917908 9.35955447,14.0303629 11.5203594,12.2255596 Z M11.7070624,3.93719854 C9.67226957,2.07706147 6.5783851,2.0223303 4.48114143,3.77312123 L12.2264317,11.5194869 C14.0302783,9.35963559 13.9178711,6.14007793 11.8891466,4.11135339 L11.8891466,4.11135339 Z"/>
  </g>

)
    default:
      console.error(
        'Unsupported icon weight. Choose from "thin", "light", "regular", "bold", "fill", or "duotone".'
      );
      return null;
  }
};

const Prohibit = forwardRef<SVGSVGElement, IconProps>(
  (props, ref) => {
    const { color, size, weight, mirrored, ...rest } = props;
    const {
      color: contextColor,
      size: contextSize,
      weight: contextWeight,
      mirrored: contextMirrored,
      ...contextRest
    } = useContext(IconContext);

    return (
      <svg
        ref={ref}
        xmlns="http://www.w3.org/2000/svg"
        width={size ?? contextSize}
        height={size ?? contextSize}
        viewBox="0 0 16 16"
        fill="none"
        stroke={color ?? contextColor}
        transform={mirrored || contextMirrored ? "scale(-1, 1)" : undefined}
        {...contextRest}
        {...rest}
      >
        {renderPathFor(weight ?? contextWeight, color ?? contextColor)}
      </svg>
    );
  }
);

Prohibit.displayName = "Prohibit";

export default Prohibit;
