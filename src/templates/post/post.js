import React from 'react'

export const query = graphql`
    query($slug: String!) {
        markdownRemark(fields: {slug: { eq: $slug } }) {
            # frontmatter {
            #     title 
            #     date
            # }
            html
        }
    }
`

const Post = props => {
    const post = props.data.markdownRemark
    return (
        <div>
            <div dangerouslySetInnerHTML={{ __html: post.html }}></div>
        </div>
    )
}

export default Post