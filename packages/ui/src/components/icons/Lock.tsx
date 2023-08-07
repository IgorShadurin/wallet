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
    <Svg ref={ref} fill="none" height={size} viewBox="0 0 24 24" width={size} {...svgProps}>
      <Path
        d="M16.75 9.05811V7C16.75 4.38 14.62 2.25 12 2.25C9.38 2.25 7.25 4.38 7.25 7V9.05811C5.752 9.29111 5 10.269 5 12V18C5 20 6 21 8 21H16C18 21 19 20 19 18V12C19 10.269 18.248 9.29111 16.75 9.05811ZM12.75 14.9871V17C12.75 17.414 12.414 17.75 12 17.75C11.586 17.75 11.25 17.414 11.25 17V14.9619C10.962 14.7329 10.7649 14.395 10.7649 14C10.7649 13.31 11.32 12.75 12.01 12.75H12.02C12.71 12.75 13.27 13.31 13.27 14C13.27 14.412 13.057 14.7601 12.75 14.9871ZM15.25 9H8.75V7C8.75 5.21 10.21 3.75 12 3.75C13.79 3.75 15.25 5.21 15.25 7V9Z"
        fill={color}
      />
    </Svg>
  )
})

Icon.displayName = 'Lock'

export const Lock = memo<IconProps>(Icon)
