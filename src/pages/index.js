import React from "react"
import { Link } from "gatsby"

// * Components 
import Layout from "../components/layout"
import { myContext } from '../../provider'

// * Styles 
import '../styles/index.sass'

const Home = () => (
  <Layout>
    <myContext.Consumer>
      {context => (
        <React.Fragment>

        </React.Fragment>
      )}
    </myContext.Consumer>
  </Layout>
)

export default Home
