import React from 'react'
import { graphql, useStaticQuery } from "gatsby"

// * Components 
import Layout from '../components/layout'
import Banner from '../components/banner/banner'

//* Styles 
import '../styles/courses.sass'

const Courses = () => {
    const data = useStaticQuery(graphql`
    query {
        imageSharp(fixed:{ originalName: {eq: "courses-mini-bg.jpg"}}) {
            fluid { ...GatsbyImageSharpFluid }
        } }`)

    return (
        <Layout>
            <Banner imgSrc={data.imageSharp.fluid} imgAlt="Map" title="Video Training Courses" />
            <div className="center">
                <div className="courses">
                    {/*// * Using React Hooks */}
                    <a href="https://www.pluralsight.com/courses/using-react-hooks" target="_black" rel="noreferrer" className="course">
                        <img src="../assets/courses/react-hooks.png" alt="Using React Hooks" />
                    </a>

                    {/*// * Server-side React with NextJS */}
                    <a href="https://www.pluralsight.com/courses/building-server-side-rendered-react-apps-beginners" target="_black" rel="noreferrer" className="course">
                        <img src="../assets/courses/nextjs.png" alt="Server-side React with NextJS" />
                    </a>

                    {/*// * React and APT.NET CoreT */}
                    <a href="https://www.pluralsight.com/courses/aspdotnet-core-react-building-website" target="_black" rel="noreferrer" className="course">
                        <img src="../assets/courses/react-and-net.png" alt="React and APT.NET Core" />
                    </a>

                    {/*// * Securing Multi-tenant ASP.NET */}
                    <a href="https://www.pluralsight.com/courses/aspnet-multi-tenant-app-mvc-extjs-angular" target="_black" rel="noreferrer" className="course">
                        <img src="../assets/courses/multi-tenant-net.png" alt="Securing Multi-tenant ASP.NET" />
                    </a>

                    {/*// * ASP.NET Core helpers */}
                    <a href="https://www.pluralsight.com/courses/aspdotnet-core-tag-helpers" target="_black" rel="noreferrer" className="course">
                        <img src="../assets/courses/net-tag-helpers.png" alt="ASP.NET Core helpers" />
                    </a>

                    {/*// * React and ASP.NET Core */}
                    <a href="https://www.pluralsight.com/courses/aspdotnet-core-react-building-website" target="_black" rel="noreferrer" className="course">
                        <img src="../assets/courses/react-net-core.png" alt="React and ASP.NET Core" />
                    </a>

                    {/*// * ExtJS Fundamentals */}
                    <a href="" target="_black" rel="noreferrer" className="course">
                        <img src="../assets/courses/extjs.png" alt="ExtJS Fundamentals" />
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
                        loading="lazy"
                        className='video-preview'></iframe>
                </div>
            </div>
        </Layout>
    )
}

export default Courses