import React from "react"
import { Link } from "gatsby"

// * Components 
import Layout from "../components/layout"
import { myContext } from '../../provider'
import Banner from '../components/banner/banner'

// * Styles 
import '../styles/posts.sass'

const Posts = () => {
    return (
        <Layout>
            <myContext.Consumer>
                {context => (
                    <React.Fragment>
                        <Banner imgSrc="./assets/banner/posts-bg.jpg" imgAlt="Map" title="Posts" />
                    </React.Fragment>
                )}
            </myContext.Consumer>
        </Layout>
    )
}

export default Posts
