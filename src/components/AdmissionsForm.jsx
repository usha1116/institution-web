import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';

// Define validation schema using Yup
const validationSchema = Yup.object({
  name: Yup.string().required('Name is required'),
  email: Yup.string().email('Invalid email address').required('Email is required'),
  phone: Yup.string()
    .matches(/^[0-9]{10}$/, 'Phone number is not valid')
    .required('Phone number is required'),
  message: Yup.string(),
});

function AdmissionsForm() {
  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      phone: '',
      message: '',
    },
    validationSchema: validationSchema,
    onSubmit: (values, { setSubmitting, resetForm }) => {
      // Simulate API call
      setTimeout(() => {
        alert(JSON.stringify(values, null, 2));
        console.log('Form submitted:', values);
        setSubmitting(false);
        resetForm(); // Clear the form after submission
      }, 1000);
    },
  });

  return (
    <div className="bg-white p-8 rounded-lg shadow-lg max-w-md mx-auto my-10">
      <h2 className="text-3xl font-bold text-center text-blue-800 mb-6">Admissions Enquiry</h2>
      <form onSubmit={formik.handleSubmit} className="space-y-5">
        <div>
          <label htmlFor="name" className="block text-gray-700 text-sm font-semibold mb-2">
            Full Name:
          </label>
          <input
            id="name"
            type="text"
            {...formik.getFieldProps('name')}
            className={`w-full p-3 border ${
              formik.touched.name && formik.errors.name ? 'border-red-500' : 'border-gray-300'
            } rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500`}
            placeholder="John Doe"
          />
          {formik.touched.name && formik.errors.name ? (
            <div className="text-red-500 text-sm mt-1">{formik.errors.name}</div>
          ) : null}
        </div>

        <div>
          <label htmlFor="email" className="block text-gray-700 text-sm font-semibold mb-2">
            Email Address:
          </label>
          <input
            id="email"
            type="email"
            {...formik.getFieldProps('email')}
            className={`w-full p-3 border ${
              formik.touched.email && formik.errors.email ? 'border-red-500' : 'border-gray-300'
            } rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500`}
            placeholder="john.doe@example.com"
          />
          {formik.touched.email && formik.errors.email ? (
            <div className="text-red-500 text-sm mt-1">{formik.errors.email}</div>
          ) : null}
        </div>

        <div>
          <label htmlFor="phone" className="block text-gray-700 text-sm font-semibold mb-2">
            Phone Number:
          </label>
          <input
            id="phone"
            type="tel"
            {...formik.getFieldProps('phone')}
            className={`w-full p-3 border ${
              formik.touched.phone && formik.errors.phone ? 'border-red-500' : 'border-gray-300'
            } rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500`}
            placeholder="9876543210"
          />
          {formik.touched.phone && formik.errors.phone ? (
            <div className="text-red-500 text-sm mt-1">{formik.errors.phone}</div>
          ) : null}
        </div>

        <div>
          <label htmlFor="message" className="block text-gray-700 text-sm font-semibold mb-2">
            Message (Optional):
          </label>
          <textarea
            id="message"
            {...formik.getFieldProps('message')}
            rows="4"
            className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Tell us more about your enquiry..."
          ></textarea>
        </div>

        <button
          type="submit"
          disabled={formik.isSubmitting}
          className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 rounded-md transition duration-300 ease-in-out disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {formik.isSubmitting ? 'Submitting...' : 'Submit Enquiry'}
        </button>
      </form>
    </div>
  );
}

export default AdmissionsForm;