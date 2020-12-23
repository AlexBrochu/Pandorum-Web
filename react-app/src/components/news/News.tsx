import './News.scss'
import React from 'react'

type NewsPageProps = {}

const NewsPage: React.FunctionComponent<NewsPageProps> = (): any => {
  return (
    <div className="page-container">
      <header className="bg-white shadow">
        <div className="mx-auto py-6 px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold leading-tight text-gray-900">
            News page
          </h1>
        </div>
      </header>
      <main>
        <div className="mx-auto py-6 sm:px-6 lg:px-8">
          <div className="px-4 py-6 sm:px-0">
            <div className="border-4 border-gray-200 rounded-lg h-64"></div>
          </div>
        </div>
      </main>
    </div>
  )
}

export default NewsPage
