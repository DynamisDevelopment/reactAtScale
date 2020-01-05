import React from "react"
import { Link } from "gatsby"

// * Components 
import Layout from "../components/layout"
import { myContext } from '../../provider'

// * Styles 
import '../styles/index.sass'

const Index = () => {
  return (
    <Layout>
      <myContext.Consumer>
        {context => (
          <React.Fragment>
            <div className="banner">
              <img src="./assets/logos/logo-white.png" alt="React at Scale Logo" className='banner-logo' />
            </div>
            <div className="center">
              <div className="featured">
                <div className="card">
                  <img className='icon' src="./assets/illustrations/solutions.jpg" alt="Solutions Architecture" />
                  <div className="title">
                    <h2>Solutions</h2>
                    <h2>Architecture</h2>
                  </div>
                  <div className="desc">
                    <p>Creating Structure &</p>
                    <p>Consistency</p>
                  </div>
                  <button className='more-btn'>Learn More</button>
                </div>

                <div className="card">
                  <img className='icon' src="./assets/illustrations/migration.jpg" alt="Migration Strategies" />
                  <h2 className='title'>Migration Strategies</h2>
                  <p className='desc'>Bridging Legacy Systems</p>
                  <button className='more-btn'>Learn More</button>
                </div>

                <div className="card">
                  <img className='icon' src="./assets/illustrations/cto-advisor.jpg" alt="CTO Advisor" />
                  <h2 className='title'>CTO Advisor</h2>
                  <p className='desc'>Translating Truth from Hype</p>
                  <button className='more-btn'>Learn More</button>
                </div>
              </div>
            </div>
          </React.Fragment>
        )}
      </myContext.Consumer>
    </Layout>
  )
}

export default Index
