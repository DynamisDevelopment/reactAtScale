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
                        <Banner imgSrc="./assets/banner/contact-mini-bg.jpg" imgAlt="Map"
                            title="Contact Me" subTitle="How can I help you?" />

                        <div className="center bb">
                            <div className="contact-form">
                                <h4 className='form-title'>Want to get in touch? Fill out the form below to send me a message and I will get back to you as soon as possible!</h4>
                            </div>
                        </div>
                    </React.Fragment>
                )}
            </myContext.Consumer>
        </Layout>
    )
}

// const ContactForm = ({ errors, touched }) => {
//     return (
//         <div>
//             <Form className='contact-form'>
//                 <Field type="text" name="name" placeholder="Name" required />
//                 {touched.name && errors.name && <p className='error'>{errors.name}</p>}
//                 <Field type="email" name="email" placeholder="Email" required />
//                 {touched.name && errors.email && <p className='error'>{errors.email}</p>}
//                 <Field component='textarea' name="message" id="message" placeholder="Message" />
//                 {touched.message && errors.message && <p className='error'>{errors.message}</p>}
//                 <button type="submit" className='btn'>Submit</button>
//             </Form>
//         </div>
//     )
// }
// // * HOC for form validation 
// //@ts-ignore
// const FormikForm = withFormik({
//     mapPropsToValues() {
//         return {
//             name: '',
//             email: '',
//             message: '',
//         }
//     },
//     validationSchema: Yup.object().shape({
//         name: Yup.string().required('A name is required'),
//         email: Yup.string().email('Please use a valid email').required('An email is required'),
//         message: Yup.string().min(25, 'Message must be more than 25 characters long, be descriptive :)').required('A message is required')
//     }),
//     handleSubmit(values, { resetForm }) {
//         axios({
//             method: 'post',
//             url: '/.netlify/functions/server',
//             data: {
//                 name: values.name,
//                 email: values.email,
//                 message: values.message,
//             }
//         })
//             .then(res => resetForm())
//             .catch(e => console.log(e))
//     }
//     // @ts-ignore
// })(ContactForm)

export default Contact