import React from 'react'
import { useTranslation } from 'react-i18next'
import { SpinningLoader } from 'src/components/loading/SpinningLoader'
import { InlineNetworkPill } from 'src/components/Network/NetworkPill'
import { Flex, Icons, Text, TouchableArea } from 'ui/src'
import { iconSizes } from 'ui/src/theme'
import { NumberType } from 'utilities/src/format/types'
import { ChainId } from 'wallet/src/constants/chains'
import { useFiatConverter } from 'wallet/src/features/fiatCurrency/conversion'
import { useUSDValue } from 'wallet/src/features/gas/hooks'
import { GasFeeResult } from 'wallet/src/features/gas/types'

export function NetworkFee({
  chainId,
  gasFee,
  onShowNetworkFeeInfo,
}: {
  chainId: ChainId
  gasFee: GasFeeResult
  onShowNetworkFeeInfo?: () => void
}): JSX.Element {
  const { t } = useTranslation()
  const { convertFiatAmountFormatted } = useFiatConverter()

  const gasFeeUSD = useUSDValue(chainId, gasFee.value ?? undefined)
  const gasFeeFormatted = convertFiatAmountFormatted(gasFeeUSD, NumberType.FiatTokenPrice)

  return (
    <Flex row alignItems="center" justifyContent="space-between">
      <TouchableArea onPress={onShowNetworkFeeInfo}>
        <Flex centered row gap="$spacing4">
          <Text color="$neutral2" variant="body3">
            {t('Network cost')}
          </Text>
          <Icons.InfoCircleFilled color="$neutral3" size="$icon.16" />
        </Flex>
      </TouchableArea>
      <Flex row alignItems="center" gap="$spacing8">
        <InlineNetworkPill chainId={chainId} />
        {gasFee.loading ? (
          <SpinningLoader size={iconSizes.icon16} />
        ) : (
          <Flex row alignItems="center" justifyContent="space-between">
            {gasFee.error ? (
              <Text color="$neutral2" variant="body3">
                {t('N/A')}
              </Text>
            ) : (
              <Text color="$neutral1" variant="body3">
                {gasFeeFormatted}
              </Text>
            )}
          </Flex>
        )}
      </Flex>
    </Flex>
  )
}
