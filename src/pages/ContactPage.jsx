// src/pages/ContactPage.jsx
import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
// Optional: If you installed react-icons, uncomment these
// import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope, FaClock, FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa';


// Define validation schema for the contact form
const contactValidationSchema = Yup.object({
  name: Yup.string().required('Name is required'),
  email: Yup.string().email('Invalid email address').required('Email is required'),
  subject: Yup.string().required('Subject is required'),
  message: Yup.string().required('Message is required'),
});

function ContactPage() {
  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      subject: '',
      message: '',
    },
    validationSchema: contactValidationSchema,
    onSubmit: (values, { setSubmitting, resetForm }) => {
      // Simulate API call for contact form submission
      console.log('Contact Form Submitted:', values);
      setTimeout(() => {
        alert('Thank you for your message! We will get back to you shortly.');
        setSubmitting(false);
        resetForm(); // Clear the form after submission
      }, 1500); // Simulate network delay
    },
  });

  return (
    <div className="container mx-auto px-4 md:px-6 lg:px-8 py-16 md:py-24">
      <h1 className="text-5xl font-bold text-gray-800 mb-8 text-center animate-fade-in-up">Contact Us</h1>

      <p className="text-lg text-gray-700 text-center mb-12 max-w-3xl mx-auto animate-fade-in-up delay-200">
        We'd love to hear from you! Whether you have questions about admissions, academics, or general inquiries, please feel free to reach out to us.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        {/* Contact Information Section */}
        <div className="bg-white p-8 rounded-lg shadow-lg animate-fade-in-left">
          <h2 className="text-3xl font-bold text-blue-700 mb-6">Our Contact Details</h2>
          <div className="space-y-6 text-lg text-gray-700">
            <p className="flex items-start">
              {/* Using Font Awesome classes here. If you use react-icons, replace `i` with icon components */}
              <i className="fas fa-map-marker-alt text-blue-600 mr-4 mt-1 text-2xl"></i>
              <span>123 School Lane, Near City Center, Vadodara, Gujarat, India - 390001</span>
            </p>
            <p className="flex items-center">
              <i className="fas fa-phone-alt text-blue-600 mr-4 text-2xl"></i>
              <span>+91 12345 67890</span>
            </p>
            <p className="flex items-center">
              <i className="fas fa-envelope text-blue-600 mr-4 text-2xl"></i>
              <span>info@gujaratpublicschool.in</span>
            </p>
            <p className="flex items-center">
              <i className="fas fa-clock text-blue-600 mr-4 text-2xl"></i>
              <span>Office Hours: Mon - Fri: 9:00 AM - 4:00 PM</span>
            </p>
          </div>
          <div className="mt-8">
            <h3 className="text-xl font-bold text-gray-800 mb-4">Follow Us:</h3>
            <div className="flex space-x-5">
              <a href="#" className="text-blue-600 hover:text-blue-800 transition-colors duration-300">
                <i className="fab fa-facebook-f text-3xl"></i> {/* Or <FaFacebookF size={30} /> */}
              </a>
              <a href="#" className="text-blue-600 hover:text-blue-800 transition-colors duration-300">
                <i className="fab fa-twitter text-3xl"></i> {/* Or <FaTwitter size={30} /> */}
              </a>
              <a href="#" className="text-blue-600 hover:text-blue-800 transition-colors duration-300">
                <i className="fab fa-instagram text-3xl"></i> {/* Or <FaInstagram size={30} /> */}
              </a>
              <a href="#" className="text-blue-600 hover:text-blue-800 transition-colors duration-300">
                <i className="fab fa-linkedin-in text-3xl"></i> {/* Or <FaLinkedinIn size={30} /> */}
              </a>
            </div>
          </div>
        </div>

        {/* Contact Form Section */}
        <div className="bg-white p-8 rounded-lg shadow-lg animate-fade-in-right">
          <h2 className="text-3xl font-bold text-blue-700 mb-6 text-center">Send Us a Message</h2>
          <form onSubmit={formik.handleSubmit} className="space-y-5">
            <div>
              <label htmlFor="name" className="sr-only">Your Name</label>
              <input
                id="name"
                type="text"
                placeholder="Your Full Name"
                {...formik.getFieldProps('name')}
                className={`w-full p-3 border ${formik.touched.name && formik.errors.name ? 'border-red-500' : 'border-gray-300'} rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-200`}
              />
              {formik.touched.name && formik.errors.name ? (
                <div className="text-red-500 text-sm mt-1">{formik.errors.name}</div>
              ) : null}
            </div>

            <div>
              <label htmlFor="email" className="sr-only">Email Address</label>
              <input
                id="email"
                type="email"
                placeholder="Your Email Address"
                {...formik.getFieldProps('email')}
                className={`w-full p-3 border ${formik.touched.email && formik.errors.email ? 'border-red-500' : 'border-gray-300'} rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-200`}
              />
              {formik.touched.email && formik.errors.email ? (
                <div className="text-red-500 text-sm mt-1">{formik.errors.email}</div>
              ) : null}
            </div>

            <div>
              <label htmlFor="subject" className="sr-only">Subject</label>
              <input
                id="subject"
                type="text"
                placeholder="Subject of your message"
                {...formik.getFieldProps('subject')}
                className={`w-full p-3 border ${formik.touched.subject && formik.errors.subject ? 'border-red-500' : 'border-gray-300'} rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-200`}
              />
              {formik.touched.subject && formik.errors.subject ? (
                <div className="text-red-500 text-sm mt-1">{formik.errors.subject}</div>
              ) : null}
            </div>

            <div>
              <label htmlFor="message" className="sr-only">Your Message</label>
              <textarea
                id="message"
                placeholder="Your detailed message..."
                {...formik.getFieldProps('message')}
                rows="5"
                className={`w-full p-3 border ${formik.touched.message && formik.errors.message ? 'border-red-500' : 'border-gray-300'} rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-200`}
              ></textarea>
              {formik.touched.message && formik.errors.message ? (
                <div className="text-red-500 text-sm mt-1">{formik.errors.message}</div>
              ) : null}
            </div>

            <button
              type="submit"
              disabled={formik.isSubmitting}
              className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 rounded-md shadow-md transition duration-300 ease-in-out transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {formik.isSubmitting ? 'Sending Message...' : 'Send Message'}
            </button>
          </form>
        </div>
      </div>

      {/* Google Map Embed (optional) */}
      <div className="mt-16 bg-white p-6 rounded-lg shadow-lg animate-fade-in-up delay-800">
        <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">Find Us on Map</h2>
        <div className="overflow-hidden rounded-lg border border-gray-200">
          {/* Replace this iframe src with your actual Google Maps embed code for your school's location */}
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3671.391264667926!2d72.54471927508933!3d23.047094279165685!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e848f583e29f3%3A0x633534b86e09395f!2sGujarat%20Public%20School!5e0!3m2!1sen!2sin!4v1718001550541!5m2!1sen!2sin"
            width="100%"
            height="450"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Gujarat Public School Location Map"
          ></iframe>
        </div>
      </div>
    </div>
  );
}

export default ContactPage;