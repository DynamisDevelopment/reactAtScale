import React from "react"
import { Link } from "gatsby"

// * Components 
import Layout from '../components/layout'
import Banner from '../components/banner/banner'
import { myContext } from '../../provider'

// * Styles 
import '../styles/index.sass'

const Index = () => {
  return (
    <Layout>
      <myContext.Consumer>
        {context => (
          <React.Fragment>
            <Banner />

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
                  <Link to='/posts/solutions-architecture'><button className='more-btn'>Learn More</button></Link>
                </div>

                <div className="card">
                  <img className='icon' src="./assets/illustrations/migration.jpg" alt="Migration Strategies" />
                  <h2 className='title'>Migration Strategies</h2>
                  <p className='desc'>Bridging Legacy Systems</p>
                  <Link to='/posts/migration-strategies'><button className='more-btn'>Learn More</button></Link>
                </div>

                <div className="card">
                  <img className='icon' src="./assets/illustrations/cto-advisor.jpg" alt="CTO Advisor" />
                  <h2 className='title'>CTO Advisor</h2>
                  <p className='desc'>Translating Truth from Hype</p>
                  <Link to='/posts/cto-advisor'><button className='more-btn'>Learn More</button></Link>
                </div>
              </div>
            </div>

            <div className="center">
              <div className="content">
                <h2>What Others Say</h2>
                <div className="reviews">

                  <p className="review">“As CEO of VisionCare, Inc., I contracted with Peter Kellner to replace our aging PIC-based computer system, so we could continue working into the Year 2000. Our company depends on the computer system for millions of dollars in annual claims processing, broker payments, and physician payments as well as many other critical functions. Peter and his team were great at communicating issues as they came up, resolving them, and, most importantly, delivering a properly working system on schedule. We had a team of six QA people verify that everything converted perfectly, and the new programs worked exactly as specified. I can’t say it is ever a pleasure to change computer systems, but it was a pleasure working with Peter and his team!”
                  <br />— Howard Braverman, O.D., CEO, VCI</p>

                  <p className="review">“Peter is a very passionate person. His knowledge of AngularJS is beyond comparison.”
                  <br /> — Caro Waelens, RFID and Data Analyst</p>

                  <p className="review">“Peter delivers complex product solutions on time and on budget. He achieves this through a well rounded, insightful business perspective coupled with impressive technical depth and breadth. Even when we were faced with the most difficult of challenges, Peter was a resourceful problem solver with far-reaching connections into Microsoft and many open source projects. I believe his most unique ability is to utilize technology to solve real customer problems, not just for technology’s sake. Peter will be a strong asset to any team.”
                  <br />  — Todd Berger, COO, Transportation Solutions Group</p>
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
