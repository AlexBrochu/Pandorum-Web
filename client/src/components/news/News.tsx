import './News.scss'
import React, { useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'
import ReactMarkdown from 'react-markdown'
import ReactPaginate from 'react-paginate'
import {
  getAllNewsFile,
  getAllNewsFileProtected,
} from '../../services/news/NewsService'
import { useAuth0 } from '@auth0/auth0-react'

type NewsPageProps = {}
const PER_PAGE = 10

const NewsPage: React.FunctionComponent<NewsPageProps> = (): any => {
  const { t, i18n } = useTranslation('news')
  const [filesNews, setFilesNews] = useState([])
  const [currentPage, setCurrentPage] = useState(0)
  const [selectedFile, setSelectedFile] = useState()
  const { getAccessTokenSilently } = useAuth0()

  const callSecureApiSecure = async () => {
    try {
      const token = await getAccessTokenSilently()

      const response = await getAllNewsFileProtected(i18n.language, token)

      setFilesNews(response.news)
      if (response.news.length > 0) setSelectedFile(response.news[0])
    } catch (error) {
      console.error(error.message)
    }
  }

  useEffect(() => {
    callSecureApiSecure()
    // const filesNews = async () => {
    //   const response = await getAllNewsFile(i18n.language)
    //   setFilesNews(response.news)
    //   if (response.news.length > 0) setSelectedFile(response.news[0])
    // }
    // filesNews()
  }, [i18n.language])

  function handlePageClick(selectedPage: { selected: number }) {
    setCurrentPage(selectedPage.selected)
    setSelectedFile(filesNews[+selectedPage.selected])
  }
  const pageCount = filesNews.length

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
          <div className="pagination-container">
            {/* https://github.com/AdeleD/react-paginate */}
            <ReactPaginate
              previousLabel={'←'}
              nextLabel={'→'}
              pageCount={pageCount}
              onPageChange={handlePageClick}
              containerClassName={'pagination'}
              previousLinkClassName={'pagination__link'}
              nextLinkClassName={'pagination__link'}
              disabledClassName={'pagination__link--disabled'}
              activeClassName={'pagination__link--active'}
              pageRangeDisplayed={1}
              marginPagesDisplayed={1}
              breakLabel="..."
            />
          </div>
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
