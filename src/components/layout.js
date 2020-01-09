import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

// * Components
import Header from './header/header'
import Footer from './footer/footer'
import { withPlugin } from 'tinacms'
import { createRemarkButton } from 'gatsby-tinacms-remark'
import slugify from 'react-slugify'

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

const CreatePostButton = createRemarkButton({
  label: "New Post",
  filename(form) {
    let slug = slugify(form.title.toLowerCase())
    return `src/posts/${slug}.md`
  },
  frontmatter(form) {
    let slug = slugify(form.title.toLowerCase())
    return new Promise(resolve => {
      resolve({
        title: form.title,
        description: form.description,
        postDate: form.postDate,
        type: "post",
        path: `src/posts/${slug}`,
      })
    })
  },
  fields: [
    { name: "title", label: "Title", component: "text", required: true },
    { name: "description", label: "Description", component: "text", required: true },
    { name: "postDate", label: "Posted Date", component: "text", required: true },
  ],
})

export default withPlugin(Layout, CreatePostButton)
