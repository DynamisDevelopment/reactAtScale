import React from 'react'

// * Components 
import Layout from '../../components/layout'
import Banner from '../../components/banner/banner'
import { DiscussionEmbed } from "disqus-react"
import { remarkForm, DeleteAction } from 'gatsby-tinacms-remark'
import { Wysiwyg } from '@tinacms/fields'
import { TinaField } from '@tinacms/form-builder'

// * Styles 
import './post.sass'

export const query = graphql`
    query($slug: String!) {
        markdownRemark(fields: {slug: { eq: $slug } }) {
            frontmatter {
                title 
                postDate
            }
            fileRelativePath
            rawFrontmatter
            rawMarkdownBody
            html
            timeToRead
        }
    }
`

const Post = props => {
    const post = props.data.markdownRemark

    const disqusConfig = {
        shortname: process.env.GATSBY_DISQUS_NAME,
        config: { identifier: post.slug },
    }

    return (
        <Layout>
            <div className="post-content">
                <Banner title={post.frontmatter.title} subTitle={post.frontmatter.postDate && `Posted by Peter Kellner on ${post.frontmatter.postDate} · ${post.timeToRead} mins read`} />
                <div className="center">
                    <div className="post-structure post">
                        <div dangerouslySetInnerHTML={{ __html: post.html }}></div>
                    </div>
                </div>
                <div className="center">
                    <div className="post-comments"><DiscussionEmbed {...disqusConfig} /></div>
                </div>
            </div>
        </Layout>
    )
}

const deleteButton = {
    label: 'Delete',
    actions: [DeleteAction]
}

export default remarkForm(Post, deleteButton)