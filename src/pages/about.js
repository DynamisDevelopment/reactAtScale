import React from 'react'

// * Components 
import Layout from '../components/layout'
import { myContext } from '../../provider'
import Banner from '../components/banner/banner'

//* Styles 
import '../styles/about.sass'

const About = () => {
    return (
        <Layout>
            <myContext.Consumer>
                {context => (
                    <React.Fragment>
                        <Banner imgSrc="./assets/banner/about-bg.jpg" imgAlt="Map" title="About Me" />
                    </React.Fragment>
                )}
            </myContext.Consumer>
        </Layout>
    )
}

export default About