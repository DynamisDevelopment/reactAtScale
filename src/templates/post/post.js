import React from 'react'

// * Components 
import Layout from '../../components/layout'
import { myContext } from '../../../provider'
import Banner from '../../components/banner/banner'

export const query = graphql`
    query($slug: String!) {
        markdownRemark(fields: {slug: { eq: $slug } }) {
            frontmatter {
                title 
                postDate
                author
            }
            html
            timeToRead
        }
    }
`

const Post = props => {
    const post = props.data.markdownRemark

    return (
        <Layout>
            <myContext.Consumer>
                {context => (
                    <React.Fragment>
                        <div className="post-content">
                            <Banner title={post.frontmatter.title} subTitle={post.frontmatter.author && `Posted by ${post.frontmatter.author} on ${post.frontmatter.postDate} · ${post.timeToRead} mins read`} />
                            <div className="center">
                                <div className="post-structure post">
                                    <div dangerouslySetInnerHTML={{ __html: post.html }}></div>
                                </div>
                            </div>
                        </div>
                    </React.Fragment>
                )}
            </myContext.Consumer>
        </Layout>
    )
}

export default Post