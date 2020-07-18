import React, { forwardRef } from 'react'
import { IconProps } from '../lib/Icon'

const Clock = forwardRef<SVGSVGElement, IconProps>(
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
            <title>ph-clock</title>
            <g
              id='Page-1'
              stroke='none'
              strokeWidth='1'
              fill='none'
              fillRule='evenodd'
            >
              <g
                id='REFACTOR---Testing-32-line-style-MEDIUM---REFACTOR'
                transform='translate(-172.000000, -836.000000)'
              >
                <g id='ph-clock' transform='translate(172.000000, 836.000000)'>
                  <polygon id='Fill-2' points='0 16 16 16 16 0 0 0'></polygon>
                  <path
                    d='M8,1.5 C11.5891424,1.5 14.5,4.41085763 14.5,8 C14.5,11.5891424 11.5891424,14.5 8,14.5 C4.41085763,14.5 1.5,11.5891424 1.5,8 C1.5,4.41085763 4.41085763,1.5 8,1.5 Z M8,2.5 C4.96314237,2.5 2.5,4.96314237 2.5,8 C2.5,11.0368576 4.96314237,13.5 8,13.5 C11.0368576,13.5 13.5,11.0368576 13.5,8 C13.5,4.96314237 11.0368576,2.5 8,2.5 Z M8,4.5 C8.24545989,4.5 8.44960837,4.67687516 8.49194433,4.91012437 L8.5,5 L8.5,7.5 L10.5,7.5 C10.7454599,7.5 10.9496084,7.67687516 10.9919443,7.91012437 L11,8 C11,8.24545989 10.8231248,8.44960837 10.5898756,8.49194433 L10.5,8.5 L8,8.5 C7.75454011,8.5 7.55039163,8.32312484 7.50805567,8.08987563 L7.5,8 L7.5,5 C7.5,4.72385763 7.72385763,4.5 8,4.5 Z'
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

Clock.displayName = 'Clock'

export default Clock
