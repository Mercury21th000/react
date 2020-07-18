import React, { forwardRef } from 'react'
import { IconProps } from '../lib/Icon'

const WifiNone = forwardRef<SVGSVGElement, IconProps>(
  (
    { color = 'currentColor', size = '1em', weight = 'regular', ...rest },
    ref
  ) => {
    switch (weight) {
      case 'thin':
      case 'light':
      case 'regular':
        return (
          <svg
            ref={ref}
            xmlns='http://www.w3.org/2000/svg'
            width={size}
            height={size}
            viewBox='0 0 16 16'
            fill='none'
            stroke={color}
            {...rest}
          >
            {' '}
            <title>wifi-none</title>
            <g
              id='Page-1'
              stroke='none'
              strokeWidth='1'
              fill='none'
              fillRule='evenodd'
            >
              <g
                id='REFACTOR---Testing-32-line-style-MEDIUM---REFACTOR'
                transform='translate(-140.000000, -964.000000)'
              >
                <g id='wifi-none' transform='translate(140.000000, 964.000000)'>
                  <polygon id='Fill-1' points='0 16 16 16 16 0 0 0'></polygon>
                  <path
                    d='M0.530320514,4.68854581 C4.84102186,1.10413233 11.1598612,1.10382182 15.4697346,4.68859162 C15.6707894,4.85582047 15.705505,5.14446392 15.5646303,5.35264953 L15.5035534,5.42655339 L15.530262,5.39747995 L8.38126201,13.82348 L8.32347995,13.881262 L8.28745538,13.9091472 L8.24453666,13.9362769 L8.17020757,13.9702819 L8.08317994,13.9930438 L7.99824074,14.000008 L7.91682006,13.9930438 L7.82979243,13.9702819 L7.75026407,13.9332653 L7.67652005,13.881262 L7.61873799,13.82348 L0.497446609,5.42755339 C0.288394924,5.21850171 0.304084973,4.87666409 0.530320514,4.68854581 Z M14.3389493,5.0725781 C10.5887928,2.30917949 5.41198028,2.30941139 1.66109689,5.07264917 L1.566,5.144 L8,12.726 L14.434,5.145 L14.3389493,5.0725781 Z'
                    id='Stroke-2'
                    fill={color}
                    fillRule='nonzero'
                  ></path>
                </g>
              </g>
            </g>
          </svg>
        )
      case 'bold':
      case 'fill':
      case 'duotone':
      default:
        throw new Error(
          'Unsupported icon weight. Choose from "thin", "light", "regular", "bold", "fill", or "duotone".'
        )
    }
  }
)

WifiNone.displayName = 'WifiNone'

export default WifiNone
