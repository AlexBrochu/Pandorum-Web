import './CustomFooter.scss'
import React from 'react'
import { useTranslation } from 'react-i18next'

type CustomFooterProps = {}

const CustomFooter: React.FC<CustomFooterProps> = (
  props: CustomFooterProps
): any => {
  const { t } = useTranslation('footer')

  return (
    <div className="footer">
      <div>
        @ {new Date().getFullYear()} {t('allright')} {t('poweredby')}
      </div>
      <div></div>
    </div>
  )
}

export default CustomFooter
