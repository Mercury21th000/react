import React, { forwardRef } from 'react'
import { IconProps } from '../lib/Icon'

const FolderDip = forwardRef<SVGSVGElement, IconProps>(
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
            <title>ph-folder-dip</title>
            <g
              id='Page-1'
              stroke='none'
              strokeWidth='1'
              fill='none'
              fillRule='evenodd'
            >
              <g
                id='REFACTOR---Testing-32-line-style-MEDIUM---REFACTOR'
                transform='translate(-140.000000, -996.000000)'
              >
                <g
                  id='ph-folder-dip'
                  transform='translate(140.000000, 996.000000)'
                >
                  <polygon id='Fill-1' points='0 16 16 16 16 0 0 0'></polygon>
                  <path
                    d='M5.882,3.5 C5.99729191,3.5 6.11189138,3.52058636 6.22117372,3.5600485 L6.32851238,3.60573921 L8.119,4.5 L14,4.5 C14.2454599,4.5 14.4496084,4.67687516 14.4919443,4.91012437 L14.5,5 L14.5,12.556 C14.5,13.0438464 14.1250069,13.4396515 13.6502139,13.4937061 L13.539,13.5 L2.461,13.5 C1.97341687,13.5 1.56272792,13.1381841 1.50654574,12.6666488 L1.5,12.556 L1.5,4.5 C1.5,3.98729637 1.88616295,3.56451173 2.38340518,3.50672975 L2.5,3.5 L5.882,3.5 Z M6.32600298,6.39550605 C6.22266132,6.44642804 6.11104941,6.47974489 5.9968506,6.49322069 L5.882,6.5 L2.5,6.5 L2.5,12.5 L13.5,12.5 L13.5,5.5 L8.117,5.5 L6.32600298,6.39550605 Z M2.5,5.5 L5.88148762,5.49973921 L6.881,4.999 L5.882,4.5 L2.5,4.5 L2.5,5.5 Z'
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

FolderDip.displayName = 'FolderDip'

export default FolderDip
