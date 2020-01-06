import React from 'react'

// * Components 
import Layout from '../components/layout'
import { myContext } from '../../provider'
import Banner from '../components/banner/banner'

//* Styles 
import '../styles/courses.sass'

const Courses = () => {
    return (
        <Layout>
            <myContext.Consumer>
                {context => (
                    <React.Fragment>
                        <Banner imgSrc="./assets/banner/courses-bg.jpeg" imgAlt="Map" title="Video Training Courses" />
                    </React.Fragment>
                )}
            </myContext.Consumer>
        </Layout>
    )
}

export default Courses