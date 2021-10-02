import * as React from 'react'
import { useTranslation } from 'react-i18next'
import { styled } from '@mui/material/styles'
import ArrowForwardIosSharpIcon from '@mui/icons-material/ArrowForwardIosSharp'
import MuiAccordion from '@mui/material/Accordion'
import MuiAccordionSummary from '@mui/material/AccordionSummary'
import MuiAccordionDetails from '@mui/material/AccordionDetails'
import Typography from '@mui/material/Typography'

const Accordion = styled((props: any) => (
    <MuiAccordion disableGutters elevation={0} square {...props} >{props.children}</MuiAccordion>
))(({ theme }) => ({
    border: `1px solid ${theme.palette.divider}`,
    '&:not(:last-child)': {
        borderBottom: 0,
    },
    '&:before': {
        display: 'none',
    },
}))

const AccordionSummary = styled((props: any) => (
    <MuiAccordionSummary
        expandIcon={<ArrowForwardIosSharpIcon sx={{ fontSize: '0.9rem' }} />}
        {...props}
    >
        {props.children}
    </MuiAccordionSummary>
))(({ theme }) => ({
    backgroundColor:
        theme.palette.mode === 'dark'
            ? 'rgba(255, 255, 255, .05)'
            : 'rgba(0, 0, 0, .03)',
    flexDirection: 'row-reverse',
    '& .MuiAccordionSummary-expandIconWrapper.Mui-expanded': {
        transform: 'rotate(90deg)',
    },
    '& .MuiAccordionSummary-content': {
        marginLeft: theme.spacing(1),
    },
}))

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
    padding: theme.spacing(2),
    borderTop: '1px solid rgba(0, 0, 0, 0.125)',
}))

export default function AccordionQACard() {
    const { t } = useTranslation('qa')
    const [expanded, setExpanded] = React.useState('panel1')

    const handleChange = (panel: any) => (event: any, newExpanded: any) => {
        setExpanded(newExpanded ? panel : false)
    }

    return (
        <div>
            {[1, 2].map((value, index) => (
                <Accordion expanded={expanded === `planel${index}`} onChange={handleChange(`planel${index}`)}>
                    <AccordionSummary aria-controls={`planel${index}-content`} id={`planel${index}-header`}>
                        <Typography>{t('card' + value + '.title')}</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography>
                            {t('card' + value + '.text')}
                        </Typography>
                    </AccordionDetails>
                </Accordion>
            ))}

        </div>
    )
}
