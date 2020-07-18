import React, { forwardRef } from 'react'
import { IconProps } from '../lib/Icon'

const MusicNotesStraight = forwardRef<SVGSVGElement, IconProps>(
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
            <title>ph-music-notes-straight</title>
            <g
              id='Page-1'
              stroke='none'
              strokeWidth='1'
              fill='none'
              fillRule='evenodd'
            >
              <g
                id='REFACTOR---Testing-32-line-style-MEDIUM---REFACTOR'
                transform='translate(-108.000000, -932.000000)'
              >
                <g
                  id='ph-music-beam-straight'
                  transform='translate(108.000000, 932.000000)'
                >
                  <polygon id='Fill-1' points='0 16 16 16 16 0 0 0'></polygon>
                  <path
                    d='M5.5,11.75 C5.5,12.9928413 4.49244365,14 3.25,14 C2.00755635,14 1,12.9928413 1,11.75 C1,10.5071587 2.00755635,9.5 3.25,9.5 C3.71294604,9.5 4.14328088,9.63983159 4.50103263,9.87958459 L4.5,3 C4.5,2.72385763 4.72385763,2.5 5,2.5 L13,2.5 C13.2454599,2.5 13.4496084,2.67687516 13.4919443,2.91012437 L13.5,3 L13.5,11.75 C13.5,12.9928413 12.4924436,14 11.25,14 C10.0075564,14 9,12.9928413 9,11.75 C9,10.5071587 10.0075564,9.5 11.25,9.5 C11.712946,9.5 12.1432809,9.63983159 12.5010326,9.87958459 L12.5,6.5 L5.5,6.5 Z M11.25,10.5 C10.5597528,10.5 10,11.0595319 10,11.75 C10,12.4404681 10.5597528,13 11.25,13 C11.9402472,13 12.5,12.4404681 12.5,11.75 C12.5,11.0595319 11.9402472,10.5 11.25,10.5 Z M3.25,10.5 C2.55975276,10.5 2,11.0595319 2,11.75 C2,12.4404681 2.55975276,13 3.25,13 C3.94024724,13 4.5,12.4404681 4.5,11.75 C4.5,11.0595319 3.94024724,10.5 3.25,10.5 Z M5.5,5.5 L12.5,5.5 L12.5,3.5 L5.5,3.5 L5.5,5.5 Z'
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

MusicNotesStraight.displayName = 'MusicNotesStraight'

export default MusicNotesStraight
