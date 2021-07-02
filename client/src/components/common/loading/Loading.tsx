import React from 'react'
import loading from '../../../assets/loading.svg'

const Loading: React.FC = () => {
  return (
    <div className="spinner">
      Loading
      <img src={loading} alt="Loading" />
    </div>
  )
}

export default Loading
