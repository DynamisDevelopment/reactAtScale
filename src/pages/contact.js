import React from 'react'

// * Components 
import Layout from '../components/layout'
import { myContext } from '../../provider'

//* Styles 
import '../styles/contact.sass'

const Contact = () => {
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

export default Contact