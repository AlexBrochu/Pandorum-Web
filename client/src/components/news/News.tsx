import './News.scss'
import React, { useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'
import ReactMarkdown from 'react-markdown'
import { getAllNewsFile } from '../../services/news/NewsService'

type NewsPageProps = {}

const NewsPage: React.FunctionComponent<NewsPageProps> = (): any => {
  const { t, i18n } = useTranslation('news')
  const [filesNews, setFilesNews] = useState([])
  const [selectedFile, setSelectedFile] = useState()

  useEffect(() => {
    const filesNews = async () => {
      const response = await getAllNewsFile(i18n.language)
      setFilesNews(response.news)
      if(response.news.length > 0)
        setSelectedFile(response.news[0])
    }
    filesNews()
  }, [i18n.language])

  function handleClickNews(
    event: React.MouseEvent<HTMLDivElement, MouseEvent>
  ) {
    event.stopPropagation()
    event.preventDefault()
    const key = (event.target as HTMLDivElement).getAttribute('data-key')
    setSelectedFile(filesNews[+key])
  }

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
        <div>{filesNews.map((file, index) => {
          return (<div data-key={index} onClick={() => handleClickNews}>News {index}</div>)
        })}</div>
        <div className="news-body">
          <ReactMarkdown
            className="news"
            children={selectedFile}
          ></ReactMarkdown>
        </div>
      </main>
    </div>
  )
}

export default NewsPage
