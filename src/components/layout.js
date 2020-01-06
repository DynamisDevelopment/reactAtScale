import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

// * Components
import Header from './header/header'
import Footer from './footer/footer'
import { myContext } from '../../provider'

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
    <myContext.Consumer>
      {context => (
        <React.Fragment>
          <div className={context.isDark ? 'darkTheme' : 'lightTheme'}>
            <Header />
            {children}
            <Footer />
          </div>
        </React.Fragment>
      )}
    </myContext.Consumer>
  )
}

export default Layout
