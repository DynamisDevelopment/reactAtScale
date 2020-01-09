import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

// * Components
import Header from './header/header'
import Footer from './footer/footer'

// * Styles
import '../global.sass'

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <div>
      <Header />
      {children}
      <Footer />
    </div>
  )
}

export default Layout
