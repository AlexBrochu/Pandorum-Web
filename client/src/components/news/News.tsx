import './News.scss'
import React, { useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'
import news1 from '../../assets/news/showdown-demo.md'
import ReactMarkdown from 'react-markdown'
import { getAllNewsFile } from '../../services/news/NewsService'

type NewsPageProps = {}

const NewsPage: React.FunctionComponent<NewsPageProps> = (): any => {
  const { t, i18n } = useTranslation('news')
  const [filesNews, setFilesNews] = useState([])
  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    const filesNews = async () => {
      const response = await getAllNewsFile('fr')
    }
    filesNews()
  }, [i18n.language])

  return (
    <div className="news-page-container">
      <header className="bg-white shadow">
        <div className="mx-auto py-6 px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold leading-tight text-gray-900">
            {t('mainPage.title')}
          </h1>
        </div>
      </header>
      <main>
        <div className="news-body">
          <ReactMarkdown className="news" children={news1}></ReactMarkdown>
        </div>
      </main>
    </div>
  )
}

export default NewsPage
