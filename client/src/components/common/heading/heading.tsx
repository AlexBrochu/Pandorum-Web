import React from 'react'

type HeadingProps = {
  title: string
}

const Heading: React.FC<HeadingProps> = (props) => {
  return (
    <header className="bg-white shadow">
      <div className="mx-auto py-6 px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold leading-tight text-gray-900">
          {props.title}
        </h1>
      </div>
    </header>
  )
}

export default Heading
