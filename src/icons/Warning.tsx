import React, { forwardRef } from 'react'
import { IconProps } from '../lib/Icon'

const Warning = forwardRef<SVGSVGElement, IconProps>(
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
            <title>ph-warning</title>
            <g
              id='Page-1'
              stroke='none'
              strokeWidth='1'
              fill='none'
              fillRule='evenodd'
            >
              <g
                id='REFACTOR---Testing-32-line-style-MEDIUM---REFACTOR'
                transform='translate(-108.000000, -868.000000)'
              >
                <g
                  id='ph-warning'
                  transform='translate(108.000000, 868.000000)'
                >
                  <polygon id='Fill-1' points='0 16 16 16 16 0 0 0'></polygon>
                  <path
                    d='M5.84229544,2.66557673 C6.80735528,1.01547442 9.19244472,1.01547442 10.1574115,2.66541767 L10.1574115,2.66541767 L14.5744485,10.211481 C15.5495748,11.8779467 14.347933,13.974 12.4169,13.974 L12.4169,13.974 L3.5829,13.974 C1.65186702,13.974 0.450225212,11.8779467 1.42538851,10.2114177 L1.42538851,10.2114177 Z M9.29429544,3.17042327 C8.71535528,2.18052558 7.28444472,2.18052558 6.70541149,3.17058233 L6.70541149,3.17058233 L2.28844854,10.716519 C1.70337089,11.7164017 2.42433665,12.974 3.5829,12.974 L3.5829,12.974 L12.4169,12.974 C13.5754633,12.974 14.2964291,11.7164017 13.7113885,10.7165823 L13.7113885,10.7165823 Z M8,10 C8.414,10 8.75,10.336 8.75,10.75 C8.75,11.164 8.414,11.5 8,11.5 C7.586,11.5 7.25,11.164 7.25,10.75 C7.25,10.336 7.586,10 8,10 Z M8,5 C8.24545989,5 8.44960837,5.17687516 8.49194433,5.41012437 L8.5,5.5 L8.5,8.5 C8.5,8.77614237 8.27614237,9 8,9 C7.75454011,9 7.55039163,8.82312484 7.50805567,8.58987563 L7.5,8.5 L7.5,5.5 C7.5,5.22385763 7.72385763,5 8,5 Z'
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

Warning.displayName = 'Warning'

export default Warning
