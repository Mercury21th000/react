import React, { forwardRef } from 'react'
import { IconProps } from '../lib/Icon'

const Table = forwardRef<SVGSVGElement, IconProps>(
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
            <title>ph-table</title>
            <g
              id='Page-1'
              stroke='none'
              strokeWidth='1'
              fill='none'
              fillRule='evenodd'
            >
              <g
                id='REFACTOR---Testing-32-line-style-MEDIUM---REFACTOR'
                transform='translate(-172.000000, -772.000000)'
              >
                <g id='ph-table' transform='translate(172.000000, 772.000000)'>
                  <polygon id='Fill-1' points='0 16 16 16 16 0 0 0'></polygon>
                  <path
                    d='M2,13 C1.72385763,13 1.5,12.7761424 1.5,12.5 L1.5,12.5 L1.5,3.5 C1.5,3.22385763 1.72385763,3 2,3 L2,3 L14,3 C14.2761424,3 14.5,3.22385763 14.5,3.5 L14.5,3.5 L14.5,12.5 C14.5,12.7761424 14.2761424,13 14,13 L14,13 Z M5,10 L2.5,10 L2.5,12 L5,12 L5,10 Z M13.5,10 L6,10 L6,12 L13.5,12 L13.5,10 Z M5,7 L2.5,7 L2.5,9 L5,9 L5,7 Z M13.5,7 L6,7 L6,9 L13.5,9 L13.5,7 Z M13.5,4 L2.5,4 L2.5,6 L13.5,6 L13.5,4 Z'
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

Table.displayName = 'Table'

export default Table
