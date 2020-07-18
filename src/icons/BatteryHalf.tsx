import React, { forwardRef } from 'react'
import { IconProps } from '../lib/Icon'

const BatteryHalf = forwardRef<SVGSVGElement, IconProps>(
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
            <title>ph-battery-half-hash</title>
            <g
              id='Page-1'
              stroke='none'
              strokeWidth='1'
              fill='none'
              fillRule='evenodd'
            >
              <g
                id='REFACTOR---Testing-32-line-style-MEDIUM---REFACTOR'
                transform='translate(-236.000000, -996.000000)'
              >
                <g
                  id='ph-battery-half-hash'
                  transform='translate(236.000000, 996.000000)'
                >
                  <polygon id='Fill-1' points='0 16 16 16 16 0 0 0'></polygon>
                  <path
                    d='M12.5,3.5 C13.3291424,3.5 14,4.17085763 14,5 L14,5 L14,11 C14,11.8291424 13.3291424,12.5 12.5,12.5 L12.5,12.5 L2.5,12.5 C1.67085763,12.5 1,11.8291424 1,11 L1.00226408,11.0476732 C1.00153224,11.0399872 1.00097783,11.0322875 1.00060083,11.0245806 L1,11 L1,5 C1,4.17085763 1.67085763,3.5 2.5,3.5 L2.5,3.5 Z M7,6.206 L2.03158804,11.1757995 C2.10249684,11.3655066 2.28506068,11.5 2.5,11.5 L2.5,11.5 L3.292,11.5 L7,7.792 L7,6.206 Z M12.5,4.5 L8,4.5 L8,11.5 L12.5,11.5 C12.7460957,11.5 12.9497497,11.32369 12.9919679,11.090064 L13,11 L13,5 C13,4.72314237 12.7768576,4.5 12.5,4.5 L12.5,4.5 Z M7,9.206 L4.706,11.5 L7,11.5 L7,9.206 Z M15,5.5 C15.2454599,5.5 15.4496084,5.67687516 15.4919443,5.91012437 L15.5,6 L15.5,10 C15.5,10.2761424 15.2761424,10.5 15,10.5 C14.7545401,10.5 14.5503916,10.3231248 14.5080557,10.0898756 L14.5,10 L14.5,6 C14.5,5.72385763 14.7238576,5.5 15,5.5 Z M7,4.5 L5.706,4.5 L2,8.206 L2,9.792 L7,4.792 L7,4.5 Z M4.292,4.5 L2.5,4.5 C2.22314237,4.5 2,4.72314237 2,5 L2,5 L2,6.792 L4.292,4.5 Z'
                    id='Combined-Shape'
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
            <title>ph-battery-half</title>
            <g
              id='Page-1'
              stroke='none'
              strokeWidth='1'
              fill='none'
              fillRule='evenodd'
            >
              <g
                id='REFACTOR---Testing-32-line-style-MEDIUM---REFACTOR'
                transform='translate(-172.000000, -932.000000)'
              >
                <g
                  id='ph-battery-half'
                  transform='translate(172.000000, 932.000000)'
                >
                  <polygon id='Fill-1' points='0 16 16 16 16 0 0 0'></polygon>
                  <path
                    d='M12.5,3.5 C13.3291424,3.5 14,4.17085763 14,5 L14,5 L14,11 C14,11.8291424 13.3291424,12.5 12.5,12.5 L12.5,12.5 L2.5,12.5 C1.67085763,12.5 1,11.8291424 1,11 L1,11 L1,5 C1,4.17085763 1.67085763,3.5 2.5,3.5 L2.5,3.5 Z M12.5,4.5 L8,4.5 L8,11.5 L12.5,11.5 C12.7460957,11.5 12.9497497,11.32369 12.9919679,11.090064 L13,11 L13,5 C13,4.72314237 12.7768576,4.5 12.5,4.5 L12.5,4.5 Z M15,5.5 C15.2454599,5.5 15.4496084,5.67687516 15.4919443,5.91012437 L15.5,6 L15.5,10 C15.5,10.2761424 15.2761424,10.5 15,10.5 C14.7545401,10.5 14.5503916,10.3231248 14.5080557,10.0898756 L14.5,10 L14.5,6 C14.5,5.72385763 14.7238576,5.5 15,5.5 Z'
                    id='Combined-Shape'
                    fill={color}
                    fillRule='nonzero'
                  ></path>
                </g>
              </g>
            </g>
          </svg>
        )
      case 'duotone':
      default:
        throw new Error(
          'Unsupported icon weight. Choose from "thin", "light", "regular", "bold", "fill", or "duotone".'
        )
    }
  }
)

BatteryHalf.displayName = 'BatteryHalf'

export default BatteryHalf
