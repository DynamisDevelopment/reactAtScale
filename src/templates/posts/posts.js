import React from "react"
import { Link, graphql, useStaticQuery } from 'gatsby'

// * Components 
import Layout from "../../components/layout"
import { myContext } from '../../../provider'
import Banner from '../../components/banner/banner'

// * Styles 
import './posts.sass'

export const query = graphql`
    query($skip: Int!, $limit: Int!) {
        allMarkdownRemark(
            filter: {fileAbsolutePath: {regex: "/posts/"}},
            sort: { order: DESC }
            skip: $skip,
            limit: $limit
            ) {
            edges {
                node {
                    fields {
                        slug
                    }
                    frontmatter {
                        title
                        description
                        postDate
                    }
                    timeToRead
                }
            }
        }
    }`

const Posts = ({ data, pageContext }) => {
    const posts = data.allMarkdownRemark

    return (
        <Layout>
            <myContext.Consumer>
                {context => (
                    <React.Fragment>
                        <Banner imgSrc="./assets/banner/posts-mini-bg.jpg" imgAlt="Map" title="Posts" />
                        <div className="center">
                            <div className="posts">
                                {posts.edges.map(post => {
                                    const p = post.node
                                    const pf = p.frontmatter

                                    return <div className="post">
                                        <Link to={'/posts/' + p.fields.slug}>
                                            <h1 className='post-title'>{pf.title}</h1>
                                            {pf.description && <h3 className='post-description'>{pf.description}</h3>}
                                        </Link>

                                        {pf.postDate && <h4 className='posted-info'>Posted by Peter Kellner on {pf.postDate} · {p.timeToRead} mins read</h4>}
                                    </div>
                                })}
                            </div>
                        </div>
                    </React.Fragment>
                )}
            </myContext.Consumer>

        </Layout>
    )
}

export default Posts
