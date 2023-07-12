import { useRouteError } from 'react-router-dom'
import Header from './Header'
import Footer from './Footer'
import React from 'react'

const ErrorPage = () => {
  const error = useRouteError()
  console.error(error)

  return (
        <>
            <Header />
            <div className="errorPage">
                <h1>Page Not Found</h1>
                <h3>An Unexpected Error has Occured</h3>
                <p>
                    <i>{error.statusText || error.message}</i>
                </p>
            </div>
            <Footer/>
        </>
  )
}

export default ErrorPage
