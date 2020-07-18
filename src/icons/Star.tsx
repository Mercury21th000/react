import React, { forwardRef } from 'react'
import { IconProps } from '../lib/Icon'

const Star = forwardRef<SVGSVGElement, IconProps>(
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
            <title>ph-star</title>
            <g
              id='Page-1'
              stroke='none'
              strokeWidth='1'
              fill='none'
              fillRule='evenodd'
            >
              <g
                id='REFACTOR---Testing-32-line-style-MEDIUM---REFACTOR'
                transform='translate(-140.000000, -1028.000000)'
              >
                <g id='ph-star' transform='translate(140.000000, 1028.000000)'>
                  <polygon id='Fill-1' points='0 16 16 16 16 0 0 0'></polygon>
                  <path
                    d='M5.507,4.821 L0.929690529,5.4712681 L0.844935577,5.49052755 C0.494955008,5.60180766 0.374183632,6.06094797 0.65529905,6.32848953 L3.961,9.474 L3.18153776,13.9138076 L3.17369842,13.9938108 C3.16646191,14.3601962 3.55936869,14.6211995 3.90236496,14.4451027 L8,12.341 L12.097635,14.4451027 L12.1717342,14.4762683 C12.5195643,14.5916147 12.8851583,14.2935551 12.8184622,13.9138076 L12.038,9.474 L15.3447009,6.32848953 L15.4025183,6.26359355 C15.6228267,5.96976733 15.4545312,5.52583919 15.0703095,5.4712681 L10.492,4.821 L8.44622903,0.774734821 C8.26126291,0.408821726 7.73873709,0.408821726 7.55377097,0.774734821 L5.507,4.821 Z M8,2.108 L9.71677097,5.50486518 L9.76864571,5.58669521 C9.84750981,5.68787176 9.96323694,5.75594558 10.0926905,5.7743319 L13.907,6.316 L11.1552991,8.93511047 L11.0905909,9.01025925 C11.0152372,9.11773391 10.9843732,9.25189999 11.0075378,9.38379241 L11.659,13.096 L8.22836496,11.3344973 L8.13958055,11.299171 C8.01807053,11.2638448 7.8863142,11.2756202 7.77163504,11.3344973 L4.34,13.096 L4.99246224,9.38379241 L4.99985438,9.28489937 C4.99660085,9.15368043 4.94170342,9.0274291 4.84470095,8.93511047 L2.092,6.316 L5.90730947,5.7743319 C6.06912645,5.751349 6.20949585,5.65072939 6.28322903,5.50486518 L8,2.108 Z'
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

Star.displayName = 'Star'

export default Star
