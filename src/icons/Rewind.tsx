import React, { forwardRef } from 'react'
import { IconProps } from '../lib/Icon'

const Rewind = forwardRef<SVGSVGElement, IconProps>(
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
            <title>ph-rewind</title>
            <g
              id='Page-1'
              stroke='none'
              strokeWidth='1'
              fill='none'
              fillRule='evenodd'
            >
              <g
                id='REFACTOR---Testing-32-line-style-MEDIUM---REFACTOR'
                transform='translate(-236.000000, -1028.000000)'
              >
                <g
                  id='ph-rewind'
                  transform='translate(236.000000, 1028.000000)'
                >
                  <polygon id='Fill-1' points='0 16 16 16 16 0 0 0'></polygon>
                  <path
                    d='M3.5926693,3.223046 C6.14229264,0.866457279 10.1200997,0.926879039 12.5952779,3.40417118 C15.1346533,5.94246315 15.1346533,10.0582202 12.5955043,12.5952025 C10.0582202,15.1346533 5.94246315,15.1346533 3.40439754,12.5955043 C0.864946735,10.0582202 0.864946735,5.94246315 3.40432205,3.40417118 L3.40432205,3.40417118 Z M11.8880957,4.11120246 C9.74137978,1.96265326 6.25913685,1.96265326 4.11142882,4.11127795 C1.96265326,6.25913685 1.96265326,9.74137978 4.11142882,11.8883221 C6.25913685,14.0369467 9.74137978,14.0369467 11.8883975,11.8880957 C14.0369467,9.74137978 14.0369467,6.25913685 11.8880957,4.11120246 Z M10.1876525,5.6095656 C10.5150341,5.34766026 11,5.5807469 11,6 L11,6 L11,10 C11,10.4192531 10.5150341,10.6523397 10.1876525,10.3904344 L10.1876525,10.3904344 L7.68765248,8.3904344 C7.43744917,8.19027176 7.43744917,7.80972824 7.68765248,7.6095656 L7.68765248,7.6095656 Z M6.68765248,5.6095656 C7.01503415,5.34766026 7.5,5.5807469 7.5,6 L7.5,6 L7.5,10 C7.5,10.4192531 7.01503415,10.6523397 6.68765248,10.3904344 L6.68765248,10.3904344 L4.18765248,8.3904344 C3.93744917,8.19027176 3.93744917,7.80972824 4.18765248,7.6095656 L4.18765248,7.6095656 Z'
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

Rewind.displayName = 'Rewind'

export default Rewind
