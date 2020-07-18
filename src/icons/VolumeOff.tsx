import React, { forwardRef } from 'react'
import { IconProps } from '../lib/Icon'

const VolumeOff = forwardRef<SVGSVGElement, IconProps>(
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
            <title>ph-volume-off</title>
            <g
              id='Page-1'
              stroke='none'
              strokeWidth='1'
              fill='none'
              fillRule='evenodd'
            >
              <g
                id='REFACTOR---Testing-32-line-style-MEDIUM---REFACTOR'
                transform='translate(-236.000000, -772.000000)'
              >
                <g
                  id='ph-volume-off'
                  transform='translate(236.000000, 772.000000)'
                >
                  <polygon id='Fill-1' points='0 16 16 16 16 0 0 0'></polygon>
                  <path
                    d='M8.7,2.1 C9.02961813,1.8527864 9.5,2.08797734 9.5,2.5 L9.5,2.5 L9.5,13.5 C9.5,13.9120227 9.02961813,14.1472136 8.7,13.9 L8.7,13.9 L4.833,11 L1.5,11 C1.25454011,11 1.05039163,10.8231248 1.00805567,10.5898756 L1.00805567,10.5898756 L1,10.5 L1,5.5 C1,5.22385763 1.22385763,5 1.5,5 L1.5,5 L4.833,5 Z M8.5,3.5 L5.3,5.9 C5.21345191,5.96491106 5.10818511,6 5,6 L5,6 L2,6 L2,10 L5,10 C5.08113883,10 5.16063612,10.0197375 5.23182606,10.0569906 L5.23182606,10.0569906 L5.3,10.1 L8.5,12.5 L8.5,3.5 Z M11.7843055,6.08859116 L11.8535534,6.14644661 L13,7.29309221 L14.1464466,6.14644661 C14.3417088,5.95118446 14.6582912,5.95118446 14.8535534,6.14644661 C15.0271197,6.32001296 15.0464049,6.58943736 14.9114088,6.7843055 L14.8535534,6.85355339 L13.707,8.00009221 L14.8535534,9.14644661 C15.0488155,9.34170876 15.0488155,9.65829124 14.8535534,9.85355339 C14.679987,10.0271197 14.4105626,10.0464049 14.2156945,9.91140884 L14.1464466,9.85355339 L13,8.70709221 L11.8535534,9.85355339 C11.6582912,10.0488155 11.3417088,10.0488155 11.1464466,9.85355339 C10.9728803,9.67998704 10.9535951,9.41056264 11.0885912,9.2156945 L11.1464466,9.14644661 L12.293,8.00009221 L11.1464466,6.85355339 C10.9511845,6.65829124 10.9511845,6.34170876 11.1464466,6.14644661 C11.320013,5.97288026 11.5894374,5.95359511 11.7843055,6.08859116 Z'
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
      case 'duotone':
      default:
        throw new Error(
          'Unsupported icon weight. Choose from "thin", "light", "regular", "bold", "fill", or "duotone".'
        )
    }
  }
)

VolumeOff.displayName = 'VolumeOff'

export default VolumeOff
