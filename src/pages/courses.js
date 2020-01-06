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
                        <div className="center">
                            <div className="courses">
                                <a href="https://app.pluralsight.com/profile/author/peter-kellner?clickid=yEHV9rz0pxyOT-UwUx0Mo3cjUknRtoUxwzzg1M0&irgwc=1&mpid=1196644&utm_source=impactradius&utm_medium=digital_affiliate&utm_campaign=1196644&aid=7010a000001xAKZAA2" target="_black" rel="noreferrer" className="course">
                                    <img src="../assets/courses/react-hooks.png" alt="Using React Hooks" />
                                </a>
                                <a href="" target="_black" rel="noreferrer" className="course">
                                    <img src="../assets/courses/nextjs.png" alt="Server-side React with NextJS" />
                                </a>
                                <a href="" target="_black" rel="noreferrer" className="course">
                                    <img src="../assets/courses/react-and-net.png" alt="React and APT.NET Core" />
                                </a>
                                <a href="" target="_black" rel="noreferrer" className="course">
                                    <img src="../assets/courses/multi-tenant-net.png" alt="Securing Multi-tenant ASP.NET" /></a>
                                <a href="" target="_black" rel="noreferrer" className="course">
                                    <img src="../assets/courses/net-tag-helpers.png" alt="" />
                                </a>
                                <a href="" target="_black" rel="noreferrer" className="course">
                                    <img src="../assets/courses/react-net-core.png" alt="" />
                                </a>
                                <a href="" target="_black" rel="noreferrer" className="course">
                                    <img src="../assets/courses/extjs.png" alt="" />
                                </a>
                            </div>
                        </div>

                        <div className="center text-sizing">
                            <div className="video">
                                <h3 className='video-title'>Preview of Server-side Rendering in React with NextJS on Pluralsight</h3>

                                <iframe src="https://www.youtube.com/embed/rJSXRGegxFw"
                                    frameborder="0"
                                    allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                                    allowfullscreen
                                    className='video-preview'></iframe>
                            </div>
                        </div>
                    </React.Fragment>
                )}
            </myContext.Consumer>
        </Layout>
    )
}

export default Courses