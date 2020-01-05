import React from 'react'

// * Components 
import Layout from '../components/layout'
import { myContext } from '../../provider'

//* Styles 
import '../styles/courses.sass'

const Courses = () => {
    return (
        <Layout>
            <myContext.Consumer>
                {context => (
                    <React.Fragment>

                    </React.Fragment>
                )}
            </myContext.Consumer>
        </Layout>
    )
}

export default Courses