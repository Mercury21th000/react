import React, { forwardRef } from "react";
import { IconProps } from "../lib";

const renderPathFor = (weight: string, color: string): JSX.Element | null => {
  switch (weight) {
    case "thin":
      return (
        <g fill="none" fillRule="evenodd" stroke="none" strokeWidth="1">
          <polygon points="0 16 16 16 16 0 0 0" />
          <path
            fill={color}
            fillRule="nonzero"
            d="M8,1.75 C11.4510712,1.75 14.25,4.54892881 14.25,8 C14.25,11.4510712 11.4510712,14.25 8,14.25 C4.54892881,14.25 1.75,11.4510712 1.75,8 C1.75,4.54892881 4.54892881,1.75 8,1.75 Z M8,2.25 C4.82507119,2.25 2.25,4.82507119 2.25,8 C2.25,11.1749288 4.82507119,13.75 8,13.75 C11.1749288,13.75 13.75,11.1749288 13.75,8 C13.75,4.82507119 11.1749288,2.25 8,2.25 Z M10.9308467,6.32738927 C11.0102886,6.41062168 11.0209683,6.53438839 10.9645211,6.62849994 L10.9226107,6.68084672 L7.25561073,10.1808467 C7.17509959,10.2576913 7.05610334,10.2704915 6.96277111,10.2192518 L6.91036464,10.1808232 L5.07736464,8.43082321 C4.97749874,8.33547933 4.97383292,8.17723054 5.06917679,8.07736464 C5.14863002,7.99414306 5.27176722,7.97772708 5.36839869,8.02974265 L5.42263536,8.06917679 L7.083,9.654 L10.5773893,6.31915328 C10.6772682,6.22382301 10.8355165,6.22751039 10.9308467,6.32738927 Z"
          />
        </g>
      );
    case "light":
      return (
        <g fill="none" fillRule="evenodd" stroke="none" strokeWidth="1">
          <polygon points="0 16 16 16 16 0 0 0" />
          <path
            fill={color}
            fillRule="nonzero"
            d="M8,1.625 C11.5201068,1.625 14.375,4.47989322 14.375,8 C14.375,11.5201068 11.5201068,14.375 8,14.375 C4.47989322,14.375 1.625,11.5201068 1.625,8 C1.625,4.47989322 4.47989322,1.625 8,1.625 Z M8,2.375 C4.89410678,2.375 2.375,4.89410678 2.375,8 C2.375,11.1058932 4.89410678,13.625 8,13.625 C11.1058932,13.625 13.625,11.1058932 13.625,8 C13.625,4.89410678 11.1058932,2.375 8,2.375 Z M11.0212701,6.24108391 C11.1463911,6.37217495 11.1577965,6.5702996 11.0583262,6.71357822 L11.0089161,6.77127008 L7.34191609,10.2712701 C7.21769891,10.3898303 7.03240821,10.406756 6.89075332,10.3220545 L6.82404696,10.2712348 L4.99104696,8.52123481 C4.84124811,8.378219 4.83574937,8.14084581 4.97876519,7.99104696 C5.10390403,7.85997297 5.30128523,7.83937875 5.44902876,7.93208765 L5.50895304,7.97876519 L7.083,9.481 L10.4910839,6.22872992 C10.6409022,6.08573451 10.8782747,6.09126558 11.0212701,6.24108391 Z"
          />
        </g>
      );
    case "regular":
      return (
        <g fill="none" fillRule="evenodd" stroke="none" strokeWidth="1">
          <polygon points="0 16 16 16 16 0 0 0" />
          <path
            fill={color}
            fillRule="nonzero"
            d="M8,1.5 C11.5891424,1.5 14.5,4.41085763 14.5,8 C14.5,11.5891424 11.5891424,14.5 8,14.5 C4.41085763,14.5 1.5,11.5891424 1.5,8 C1.5,4.41085763 4.41085763,1.5 8,1.5 Z M8,2.5 C4.96314237,2.5 2.5,4.96314237 2.5,8 C2.5,11.0368576 4.96314237,13.5 8,13.5 C11.0368576,13.5 13.5,11.0368576 13.5,8 C13.5,4.96314237 11.0368576,2.5 8,2.5 Z M11.1116934,6.15477855 C11.2811695,6.33234101 11.2941732,6.60214155 11.1546743,6.79381209 L11.0952215,6.86169345 L7.42822145,10.3616934 C7.25914806,10.523067 7.00521501,10.5432228 6.81494354,10.4221711 L6.73772928,10.3616464 L4.90472928,8.61164642 C4.70499748,8.42095866 4.69766583,8.10446108 4.88835358,7.90472928 C5.05785381,7.7271899 5.32675933,7.7016704 5.52470155,7.83211734 L5.59527072,7.88835358 L7.083,9.308 L10.4047785,6.13830655 C10.6045363,5.94764601 10.9210329,5.95502077 11.1116934,6.15477855 Z"
          />
        </g>
      );
    case "bold":
      return (
        <g fill="none" fillRule="evenodd" stroke="none" strokeWidth="1">
          <polygon points="0 16 16 16 16 0 0 0" />
          <path
            fill={color}
            fillRule="nonzero"
            d="M8,1.25 C11.7272136,1.25 14.75,4.27278644 14.75,8 C14.75,11.7272136 11.7272136,14.75 8,14.75 C4.27278644,14.75 1.25,11.7272136 1.25,8 C1.25,4.27278644 4.27278644,1.25 8,1.25 Z M8,2.75 C5.10121356,2.75 2.75,5.10121356 2.75,8 C2.75,10.8987864 5.10121356,13.25 8,13.25 C10.8987864,13.25 13.25,10.8987864 13.25,8 C13.25,5.10121356 10.8987864,2.75 8,2.75 Z M11.2925402,5.98216782 C11.5525318,6.25456479 11.5670252,6.67167928 11.3423902,6.9601362 L11.2678322,7.04254017 L7.60083218,10.5425402 C7.33997609,10.7915165 6.94445292,10.816389 6.65669089,10.6171741 L6.56509392,10.5424696 L4.73209392,8.79246962 C4.43249622,8.506438 4.42149875,8.03169162 4.70753038,7.73209392 C4.96755913,7.45973237 5.38355048,7.42588341 5.68212846,7.63687977 L5.76790608,7.70753038 L7.083,8.963 L10.2321678,5.95745983 C10.5318045,5.67146902 11.0065494,5.68253116 11.2925402,5.98216782 Z"
          />
        </g>
      );
    case "fill":
      return (
        <g fill="none" fillRule="evenodd" stroke="none" strokeWidth="1">
          <polygon points="0 16 16 16 16 0 0 0" />
          <path
            fill={color}
            d="M11.0957,6.8618 L7.4287,10.3618 C7.3317,10.4538 7.2067,10.4998 7.0827,10.4998 C6.9587,10.4998 6.8337,10.4538 6.7377,10.3618 L4.9047,8.6118 C4.7047,8.4208 4.6977,8.1048 4.8887,7.9048 C5.0787,7.7048 5.3947,7.6978 5.5957,7.8878 L7.0827,9.3088 L10.4047,6.1378 C10.6057,5.9478 10.9207,5.9548 11.1117,6.1548 C11.3027,6.3548 11.2947,6.6708 11.0957,6.8618 M7.9997,1.4998 C4.4157,1.4998 1.4997,4.4158 1.4997,7.9998 C1.4997,11.5838 4.4157,14.4998 7.9997,14.4998 C11.5837,14.4998 14.4997,11.5838 14.4997,7.9998 C14.4997,4.4158 11.5837,1.4998 7.9997,1.4998"
          />
        </g>
      );
    case "duotone":
      return (
        <g fill="none" fillRule="evenodd" stroke="none" strokeWidth="1">
          <polygon points="0 16 16 16 16 0 0 0" />
          <path
            fill={color}
            d="M14,8 C14,11.313 11.313,14 8,14 C4.687,14 2,11.313 2,8 C2,4.687 4.687,2 8,2 C11.313,2 14,4.687 14,8"
            opacity=".2"
          />
          <path
            fill={color}
            fillRule="nonzero"
            d="M8,1.5 C11.5891424,1.5 14.5,4.41085763 14.5,8 C14.5,11.5891424 11.5891424,14.5 8,14.5 C4.41085763,14.5 1.5,11.5891424 1.5,8 C1.5,4.41085763 4.41085763,1.5 8,1.5 Z M8,2.5 C4.96314237,2.5 2.5,4.96314237 2.5,8 C2.5,11.0368576 4.96314237,13.5 8,13.5 C11.0368576,13.5 13.5,11.0368576 13.5,8 C13.5,4.96314237 11.0368576,2.5 8,2.5 Z M11.1116934,6.15477855 C11.2811695,6.33234101 11.2941732,6.60214155 11.1546743,6.79381209 L11.0952215,6.86169345 L7.42822145,10.3616934 C7.25914806,10.523067 7.00521501,10.5432228 6.81494354,10.4221711 L6.73772928,10.3616464 L4.90472928,8.61164642 C4.70499748,8.42095866 4.69766583,8.10446108 4.88835358,7.90472928 C5.05785381,7.7271899 5.32675933,7.7016704 5.52470155,7.83211734 L5.59527072,7.88835358 L7.083,9.308 L10.4047785,6.13830655 C10.6045363,5.94764601 10.9210329,5.95502077 11.1116934,6.15477855 Z"
          />
        </g>
      );
    default:
      console.error(
        'Unsupported icon weight. Choose from "thin", "light", "regular", "bold", "fill", or "duotone".'
      );
      return null;
  }
};

const CheckCircle = forwardRef<SVGSVGElement, IconProps>(
  (
    {
      color = "currentColor",
      size = "1.25em",
      weight = "regular",
      mirrored = false,
      ...rest
    },
    ref
  ) => {
    return (
      <svg
        ref={ref}
        xmlns="http://www.w3.org/2000/svg"
        width={size}
        height={size}
        viewBox="0 0 16 16"
        fill="none"
        stroke={color}
        transform={mirrored ? "scale(-1, 1)" : undefined}
        {...rest}
      >
        {renderPathFor(weight, color)}
      </svg>
    );
  }
);

CheckCircle.displayName = "CheckCircle";

export default CheckCircle;
