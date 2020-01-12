const path = require("path")
const { paginate } = require('gatsby-awesome-pagination')

// * Generate slug per post
module.exports.onCreateNode = ({ node, actions }) => {
    const { createNodeField } = actions

    if (node.internal.type === 'MarkdownRemark') {
        const slug = path.basename(node.fileAbsolutePath, '.md')

        createNodeField({
            node,
            name: 'slug',
            value: slug
        })
    }
}

// * Generate page per post
module.exports.createPages = async ({ graphql, actions }) => {
    const { createPage } = actions
    const postTemplate = path.resolve('./src/templates/post/post.js')
    const res = await graphql(`
        query {
            allMarkdownRemark {
                edges {
                    node {
                        fields {
                            slug
                        }
                    }
                }
            }
        }
    `)

    paginate({
        createPage,
        items: res.data.allMarkdownRemark.edges,
        itemsPerPage: 5,
        pathPrefix: '/posts',
        component: path.resolve('src/templates/posts/posts.js')
    })

    res.data.allMarkdownRemark.edges.forEach(edge => {
        createPage({
            component: postTemplate,
            path: `/posts/${edge.node.fields.slug}`,
            context: {
                slug: edge.node.fields.slug
            }
        })
    })
}






