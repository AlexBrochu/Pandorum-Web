import React from 'react'
import './SmallCard.scss'

type SmallCardProps = {
  title: string
  paragraph: string
  media: string
}

const SmallCard: React.FunctionComponent<SmallCardProps> = (
  props: SmallCardProps
): any => {
  return (
    <div className="small-card">
      {props.media !== '' && <img src={props.media} />}
      <h3>{props.title}</h3>
      <div>{props.paragraph}</div>
    </div>
  )
}

export default SmallCard
