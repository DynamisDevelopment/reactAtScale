import React from "react"
import { Link, graphql } from 'gatsby'

// * Components 
import Layout from "../../components/layout"
import Banner from '../../components/banner/banner'
import Pager from '../../components/pager/pager'

// * Styles 
import './posts.sass'

export const query = graphql`
    query($skip: Int!, $limit: Int!) {
        allMarkdownRemark(
            filter: {fileAbsolutePath: {regex: "/posts/"}},
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
        imageSharp(fixed:{ originalName: {eq: "posts-mini-bg.jpg"}}) {
            fluid { ...GatsbyImageSharpFluid }
        } 
    }`

const Posts = ({ data, pageContext }) => {
    const posts = data.allMarkdownRemark

    return (
        <Layout>
            <Banner imgSrc={data.imageSharp.fluid} imgAlt="Pen writing on a book" title="Posts" />
            <div className="center">
                <div className="posts">
                    {posts.edges.map((post, i) => {
                        const p = post.node
                        const pf = p.frontmatter

                        return <div className="post" key={i}>
                            <Link to={'/posts/' + p.fields.slug}>
                                <h1 className='post-title'>{pf.title}</h1>
                                {pf.description && <h3 className='post-description'>{pf.description}</h3>}
                            </Link>

                            {pf.postDate && <h4 className='posted-info'>Posted by Peter Kellner on {pf.postDate} · {p.timeToRead} mins read</h4>}
                        </div>
                    })}
                    <Pager pageContext={pageContext} />
                </div>
            </div>
        </Layout>
    )
}

export default Posts
