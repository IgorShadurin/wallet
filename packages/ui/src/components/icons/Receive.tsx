import type { IconProps } from '@tamagui/helpers-icon'
import { forwardRef, memo } from 'react'
import { Path, Svg } from 'react-native-svg'
import { getTokenValue, isWeb, useTheme } from 'tamagui'

const Icon = forwardRef<Svg, IconProps>((props, ref) => {
  // isWeb currentColor to maintain backwards compat a bit better, on native uses theme color
  const {
    color: colorProp = isWeb ? 'currentColor' : undefined,
    size: sizeProp = '$true',
    strokeWidth: strokeWidthProp,
    ...restProps
  } = props
  const theme = useTheme()

  const size =
    getTokenValue(
      // @ts-expect-error it falls back to undefined
      sizeProp,
      'size'
    ) ?? sizeProp

  const strokeWidth =
    getTokenValue(
      // @ts-expect-error it falls back to undefined
      strokeWidthProp,
      'size'
    ) ?? strokeWidthProp

  const color =
    // @ts-expect-error its fine to access colorProp undefined
    theme[colorProp]?.get() ?? colorProp ?? theme.color.get()

  const svgProps = {
    ...restProps,
    size,
    strokeWidth,
    color,
  }

  return (
    <Svg ref={ref} fill="none" height={size} viewBox="0 0 18 18" width={size} {...svgProps}>
      <Path
        d="M0.00731584 3.11067C0.0356588 1.38453 1.14565 0.0938307 2.87057 0.0228177C3.22043 0.00841446 3.61217 0 4.05 0C4.48783 0 4.87957 0.00841446 5.22943 0.0228176C6.95435 0.0938307 8.06434 1.38453 8.09268 3.11067C8.09736 3.39513 8.1 3.70744 8.1 4.05C8.1 4.39256 8.09736 4.70487 8.09268 4.98932C8.06434 6.71547 6.95435 8.00617 5.22943 8.07718C4.87957 8.09159 4.48783 8.1 4.05 8.1C3.61217 8.1 3.22043 8.09159 2.87057 8.07718C1.14566 8.00617 0.0356587 6.71547 0.00731582 4.98932C0.00264513 4.70487 0 4.39256 0 4.05C0 3.70744 0.00264513 3.39513 0.00731584 3.11067Z"
        fill={color}
      />
      <Path
        d="M0.00731584 14.8893C0.0356588 16.6155 1.14565 17.9062 2.87057 17.9772C3.22043 17.9916 3.61217 18 4.05 18C4.48783 18 4.87957 17.9916 5.22943 17.9772C6.95435 17.9062 8.06434 16.6155 8.09268 14.8893C8.09736 14.6049 8.1 14.2926 8.1 13.95C8.1 13.6074 8.09736 13.2951 8.09268 13.0107C8.06434 11.2845 6.95435 9.99383 5.22943 9.92282C4.87957 9.90841 4.48783 9.9 4.05 9.9C3.61217 9.9 3.22043 9.90841 2.87057 9.92282C1.14566 9.99383 0.0356587 11.2845 0.00731582 13.0107C0.00264513 13.2951 0 13.6074 0 13.95C0 14.2926 0.00264513 14.6049 0.00731584 14.8893Z"
        fill={color}
      />
      <Path
        d="M14.8893 0.0073157C16.6155 0.0356587 17.9062 1.14565 17.9772 2.87057C17.9916 3.22043 18 3.61217 18 4.05C18 4.48783 17.9916 4.87957 17.9772 5.22943C17.9062 6.95434 16.6155 8.06434 14.8893 8.09268C14.6049 8.09735 14.2926 8.1 13.95 8.1C13.6074 8.1 13.2951 8.09735 13.0107 8.09268C11.2845 8.06434 9.99383 6.95434 9.92282 5.22943C9.90841 4.87957 9.9 4.48783 9.9 4.05C9.9 3.61217 9.90841 3.22043 9.92282 2.87057C9.99383 1.14566 11.2845 0.0356584 13.0107 0.00731561C13.2951 0.00264492 13.6074 -1.92005e-07 13.95 -1.77031e-07C14.2926 -1.62058e-07 14.6049 0.00264498 14.8893 0.0073157Z"
        fill={color}
      />
      <Path
        d="M14.8893 17.9927C16.6155 17.9643 17.9062 16.8543 17.9772 15.1294C17.9916 14.7796 18 14.3878 18 13.95C18 13.5122 17.9916 13.1204 17.9772 12.7706C17.9062 11.0457 16.6155 9.93566 14.8893 9.90732C14.6049 9.90265 14.2926 9.9 13.95 9.9C13.6074 9.9 13.2951 9.90265 13.0107 9.90732C11.2845 9.93566 9.99383 11.0457 9.92282 12.7706C9.90841 13.1204 9.9 13.5122 9.9 13.95C9.9 14.3878 9.90841 14.7796 9.92282 15.1294C9.99383 16.8543 11.2845 17.9643 13.0107 17.9927C13.2951 17.9974 13.6074 18 13.95 18C14.2926 18 14.6049 17.9974 14.8893 17.9927Z"
        fill={color}
      />
    </Svg>
  )
})

Icon.displayName = 'Receive'

export const Receive = memo<IconProps>(Icon)
