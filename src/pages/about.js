import React from 'react'
import { graphql, useStaticQuery } from "gatsby"

// * Components 
import Layout from '../components/layout'
import Banner from '../components/banner/banner'
import Head from '../components/head'

//* Styles 
import '../styles/about.sass'

const About = () => {
    const data = useStaticQuery(graphql`
    query {
        imageSharp(fixed:{ originalName: {eq: "about-mini-bg.jpg"}}) {
            fluid { ...GatsbyImageSharpFluid }
        } }`)

    return (
        <Layout>
            <Banner imgSrc={data.imageSharp.fluid} imgAlt="Map" title="About Me" />
            <Content />
        </Layout>
    )
}

export default About

const Content = () => {
    return (
        <div className='center'>
            <Head title='About Me' />
            <div className="about post-structure">

                <p>Peter is an independent software consultant, and a technology leader in full stack software development. Earlier, he founded and was president of Tufden Inc. a company that delivered software systems (500+ companies nationwide) for clinic scheduling, insurance company management, and medical claims processing. More recently, Peter has authored courses for Pluralsight.com covering a wide range of programming topics. Pluralsight, with close to a million subscribers, is known as the top training destination for hardcore software developers. He also founded in 2007, and continues to run Silicon Valley Code Camp. It’s an annual weekend educational event for programmers that most recently was hosted at PayPal HQ. Top sponsors include Google, Microsoft, IBM, PayPal and others.</p>

                <p> > Cornell University, Ithaca, New York — Bachelors and Masters in Mechanical and Aerospace Engineering</p>

                <p> > Founder, president, chief technology officer, and software developer at 73rd Street Associates.</p>

                <ul>
                    <li>Successfully delivered systems for university clinic scheduling, insurance company management, and a turnkey physician office management system for more than 500 customers nationwide. </li>
                    <li>Developed a medical software suite that included electronic billing which aggregated insurance claims, securely sent them to a central location, and then distributed them to the appropriate online insurance carriers. The technologies involved native TCP/IP secure connections on Windows 2000 clients and Unix servers running Oracle with substantial business logic on the servers. </li>
                    <li>Developed a two-year project to replace the online processing of a $200 million annual revenue insurance company in Florida. This project involved both architecting a sophisticated three-tier application that managed all business processes of this insurance company from adjudicating claims, billing groups, as well as paying commission-based brokers and sales people. The project was delivered and signed off successfully and <strong>on schedule.</strong> </li>
                </ul>

                <p>73rd Street Associates (then Tuften, Inc.) assets were all purchased by a large insurance company</p>

                <h2>Focus Areas</h2>

                <h4>Leadership</h4>

                <p>Leadership is about developing and keeping the group focused on common goals and then enthusiastically working toward them.</p>

                <p>Having founded and built from the ground up a computer business that included custom software, sales, service and training, I’ve learned how important the team is to the success of achieving goals. That said, it’s important to keep perspective, and when common consensus is orthogonal to common goals, it’s most important to educate and steer the group towards a better consensus. Often, that’s the biggest challenge and its importance cannot be understated.</p>

                <h4>Reliability Engineering</h4>

                <p>Reliability engineering is about making sure that the software produced is engineered and tested in a way to have minimal problems and performs to expectations. High quality engineering processes and people are critical to delivering products that will have the highest probability of success at achieving their goal.</p>

                <p>In my career, reliability engineering has always been my primary focus when building and delivering services and products. From my first job out of college, working at Lockheed Missiles and Space, where rocket launches are successful only when every part works, to building high speed LDAP authentication servers for Gannett, my focus and passion is and has always been achieving appropriately high reliability.</p>

                <h4>Legacy Migrations</h4>

                <p>Successful legacy migration of existing system is about successfully replacing underlying implementations of user requirements from one (usually older) technology to another one.  Often, system being replaced are either not scaling to meet needs, are no longer maintainable or do not meet expanded requirements without significant changes. They key is almost always evolution rather than revolution. Building and testing sub systems and replacing them one at a time is almost always the best approach for success.</p>

                <p>From the time I founded 73rd Street Associates and ultimately sold to Vision Service Plan (VSP), we did 4 major technology shifts while moving our hundreds of remote customers though each transition successfully.  Following that, I’ve worked with many companies migrating legacy system to newer technologies.  The model for success I’ve always used, starts with having a very clean specification for what the requirements of the new system need to be, what the final deliverable should achieve, and having a clear and agreed upon definition of what success looks like for everyone.</p>

                <h4>Solution Architecture</h4>

                <p>Solution Architecture is about describing what technologies and components are required to solve a given problem.  In architecting a solution, understanding the problem to be solved is the number one priority.</p>

                <p>At Transportation Logistics, I architected a freight processing system that queued and processed incoming freight requests.  On demand consolidation plans were created as needed while highly optimized delivery schedules were created daily based on up to the minute data updates.  Regenerations of the these plans could be requeued as often as necessary. We spent 60% of the project time understanding the problem to solve, writing requirements with quick user interface prototypes and designing the architecture. In the remaining time we developed the solution in a series of sprints with customer review and adjustments. First release delivered a fully working solution that fully met the customer needs. It’s critical for the success of the architecture that sufficient time is  spent understanding the problem to be solved.  The solution implementation is also important but care always needs to be taken to avoid shortchanging the architecture work.</p>

                <h4>Full Stack Engineering</h4>

                <p>Full stack engineering is about being able to architect and build all the moving parts necessary to create applications that persist data to servers, reliably process requests from remote devices (desktops and mobile devices) and provide excellent user experiences.</p>

                <p>Successfully growing Silicon Valley Code Camp, Code Stars Summit and AngularU conference sites over many years to a community of over twenty thousand members has its roots in my ability to lead a team to develop a full stack web application to manage all the details. Currently, the community around Silicon Valley Code Camp enjoys receiving over a million correspondences a year, all tracked. The site processes credit cards for registration classes and more, as well as supports for both desktop and mobile devices.</p>

                <h4>Managing Remote Engineering Teams</h4>

                <p>Managing remote engineering teams is about understanding the value add that can be achieved by using off site engineering resources. Understand (or providing) the remote leadership structure is critical as well as understanding the culture that team respects.</p>

                <p>At PSM, I managed a growing team of Ukrainian engineers who were tasked with short delivery cycles to produce both high quality, designed to specs and upgradeable deliverables. Key to making this team successful was making sure that the remote team understood the requirements and had ample time and permission to push back Another project, where I was tasked to work with a team of engineers from the Philippines, had different challenges. This team would often do exactly as requested without question or comment. To make this team successful it was essential to give clear instructions, to spent a lot of time ensuring the instructions were understood and to schedule frequent status updates.</p>

                <h4>Professional Training</h4>

                <p>Professional Training is about not just teaching the what and how but also the why. It’s about passing on best practice thought processes to solve problems both large and small.</p>

                <p>As a Pluralsight author, I’ve done seven multi-hour training videos, and like all authors I ensure my courses are technically correct and provide value above the written documentation. I also take pride in going beyond the basics and provide explanations of the reasons behind the requirements and constraints. For example, in my ASP.NET Core Tag Helpers course, tag queries are limited, confusing and non-intuitive. To fully explain this I showed the Microsoft Tag Helper source code highlighting the Tag Helper implementation and specifically the hardcoded, not likely to change, limitations.</p>

                <h4>Software Tooling Enthusiast</h4>

                <p>Software tooling is about making sure that when you work on a software project, you are prepared to work efficiently and correctly.  Understanding how much tooling is needed is very important to the overall success of many projects. It is tempting to move too quickly to product development and not take the time to build the tools that create efficiencies for development throughout the project.</p>

                <p>In my career, I’ve always made a point to spend time both at the beginning of projects I work on as well as during, to make sure my tooling is excellent.  While working with Gannett to implement multi-tenant authentication on their high speed LDAP servers, early on, I worked with the team to build a multithreaded request simulator to simulate complex loading patterns.  Ultimately, this simulator uncovered a bug that Novell fixed in the secure socket layer implementation.</p>
            </div>
        </div>
    )
}