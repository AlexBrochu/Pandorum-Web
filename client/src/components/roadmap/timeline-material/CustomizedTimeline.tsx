import * as React from 'react'
import { useTranslation } from 'react-i18next'
import Timeline from '@mui/lab/Timeline'
import TimelineItem from '@mui/lab/TimelineItem'
import TimelineSeparator from '@mui/lab/TimelineSeparator'
import TimelineConnector from '@mui/lab/TimelineConnector'
import TimelineContent from '@mui/lab/TimelineContent'
import TimelineOppositeContent from '@mui/lab/TimelineOppositeContent'
import TimelineDot from '@mui/lab/TimelineDot'
import FastfoodIcon from '@mui/icons-material/Fastfood'
import LaptopMacIcon from '@mui/icons-material/LaptopMac'
import HotelIcon from '@mui/icons-material/Hotel'
import RepeatIcon from '@mui/icons-material/Repeat'
import Typography from '@mui/material/Typography'

type TimelineCellProps = {
  cells: TimelineContent[]
}

type TimelineContent = {
  title: string, 
  time: string,
  description: string,
}

const CustomizedTimeline: React.FunctionComponent<TimelineCellProps> = (props) => {
  console.log(props.cells)
  const { t } = useTranslation('roadmap')
  return (
    <Timeline position="alternate">
      {props.cells.map((cell, index) => (
        <TimelineItem key={index}>
          <TimelineOppositeContent
            sx={{ m: 'auto 0' }}
            align="right"
            variant="body2"
            color="text.secondary"
          >
            {t(cell.time)}
          </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineConnector />
            <TimelineDot>
              <LaptopMacIcon />
            </TimelineDot>
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent sx={{ py: '12px', px: 2 }}>
            <Typography variant="h6" component="span">
              {t(cell.title)}
            </Typography>
            <Typography>{t(cell.description)}</Typography>
          </TimelineContent>
        </TimelineItem>
      ))}
    </Timeline>
  )
}

export default CustomizedTimeline