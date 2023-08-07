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
    <Svg ref={ref} fill="none" height={size} viewBox="0 0 21 20" width={size} {...svgProps}>
      <Path
        d="M20.4641 3.3352L17.0112 17.1471C16.5164 19.1157 14.832 20 13.3582 20C13.3477 20 13.3372 20 13.3372 20C11.8528 19.9895 10.1579 19.0841 9.6947 17.0945L8.78937 13.2521L14.4531 7.58827C14.8636 7.17771 14.8636 6.50404 14.4531 6.09348C14.0425 5.68291 13.3687 5.68291 12.9581 6.09348L7.29445 11.757L3.45202 10.8518C1.46236 10.3886 0.557007 8.69379 0.54648 7.21997C0.535952 5.73562 1.42027 4.0302 3.3994 3.53542L17.2112 0.0824317C18.1271 -0.149169 19.0851 0.113931 19.7588 0.787679C20.4325 1.46143 20.6957 2.41933 20.4641 3.3352Z"
        fill={color}
      />
    </Svg>
  )
})

Icon.displayName = 'SendRoundedAirplane'

export const SendRoundedAirplane = memo<IconProps>(Icon)
