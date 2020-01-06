import React from 'react'

// * Components 
import Layout from '../components/layout'
import { myContext } from '../../provider'
import Banner from '../components/banner/banner'

//* Styles 
import '../styles/contact.sass'

const Contact = () => {
    return (
        <Layout>
            <myContext.Consumer>
                {context => (
                    <React.Fragment>
                        <Banner imgSrc="./assets/banner/contact-bg.jpg" imgAlt="Map"
                            title="Contact Me" subTitle="How can I help you?" />
                    </React.Fragment>
                )}
            </myContext.Consumer>
        </Layout>
    )
}

export default Contact