import React, { forwardRef } from 'react'
import { IconProps } from '../lib/Icon'

const Folder = forwardRef<SVGSVGElement, IconProps>(
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
            <title>ph-folder</title>
            <g
              id='Page-1'
              stroke='none'
              strokeWidth='1'
              fill='none'
              fillRule='evenodd'
            >
              <g
                id='REFACTOR---Testing-32-line-style-MEDIUM---REFACTOR'
                transform='translate(-236.000000, -868.000000)'
              >
                <g id='ph-folder' transform='translate(236.000000, 868.000000)'>
                  <polygon id='Fill-1' points='0 16 16 16 16 0 0 0'></polygon>
                  <path
                    d='M1.5005,3.5005 C1.5005,2.94735763 1.94735763,2.5005 2.5005,2.5005 L2.5005,2.5005 L5.7925,2.5005 C6.05805368,2.5005 6.31224111,2.60513433 6.50005339,2.79294661 L6.50005339,2.79294661 L8.2066,4.4995 L13.9996,4.5 C14.2450599,4.5 14.4492084,4.67687516 14.4915443,4.91012437 L14.4996,5 L14.4996,12.556 C14.4996,13.0815313 14.065512,13.5 13.5386,13.5 L13.5386,13.5 L2.4616,13.5 C1.93582548,13.5 1.4996,13.0807027 1.4996,12.556 L1.4996,12.556 Z M13.499,5.5 L8.0116,5.4995 L8.0005,5.5005 L2.4986,5.5005 L2.499,12.5 L13.499,12.5 L13.499,5.5 Z M5.79294661,3.50005339 L2.5005,3.5005 L2.5,4.5 L6.792,4.5 L5.79294661,3.50005339 Z'
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

Folder.displayName = 'Folder'

export default Folder
