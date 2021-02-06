import './Footer.scss'
import React from 'React'
import { useTranslation } from 'react-i18next'

type FooterProps = {}

const Footer: React.FunctionComponent<FooterProps> = (
  props: FooterProps
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

export default Footer
