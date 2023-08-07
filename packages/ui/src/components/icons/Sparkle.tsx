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
    <Svg ref={ref} fill="none" height={size} viewBox="0 0 17 16" width={size} {...svgProps}>
      <Path
        d="M14.5913 7.67945L12.7733 7.1601C11.1013 6.6821 9.81729 5.39876 9.33929 3.7261L8.81997 1.9081C8.73797 1.6221 8.26063 1.6221 8.17863 1.9081L7.6593 3.7261C7.1813 5.39876 5.8973 6.68276 4.2253 7.1601L2.40729 7.67945C2.26395 7.72011 2.16528 7.85144 2.16528 8.0001C2.16528 8.14877 2.26395 8.27943 2.40729 8.32076L4.2253 8.84011C5.8973 9.31811 7.1813 10.6014 7.6593 12.2741L8.17863 14.0921C8.21996 14.2354 8.35062 14.3341 8.49929 14.3341C8.64795 14.3341 8.77863 14.2354 8.81997 14.0921L9.33929 12.2741C9.81729 10.6014 11.1013 9.31744 12.7733 8.84011L14.5913 8.32076C14.7346 8.2801 14.8333 8.14877 14.8333 8.0001C14.8333 7.85144 14.7346 7.72078 14.5913 7.67945Z"
        fill={color}
      />
    </Svg>
  )
})

Icon.displayName = 'Sparkle'

export const Sparkle = memo<IconProps>(Icon)
