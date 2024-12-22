import React from 'react';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';

const LoginSchema = Yup.object().shape({
  email: Yup.string().email('Invalid email').required('Required'),
  password: Yup.string().required('Required'),
});

function LoginForm({ onSubmit }) {
  return (
    <Formik
      initialValues={{ email: '', password: '' }}
      validationSchema={LoginSchema}
      onSubmit={(values, { setSubmitting }) => {
        setSubmitting(false);
        onSubmit(values); // Передаємо значення форми
      }}
    >
      {({ errors, touched }) => (
        <Form className="bg-white p-6 rounded-md shadow-md">
          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-700">
              Email
            </label>
            <Field
              id="email"
              name="email"
              type="email"
              className="w-full px-4 py-2 border rounded-md"
            />
            {errors.email && touched.email && (
              <p className="text-red-500 text-sm">{errors.email}</p>
            )}
          </div>
          <div className="mb-4">
            <label htmlFor="password" className="block text-gray-700">
              Password
            </label>
            <Field
              id="password"
              name="password"
              type="password"
              className="w-full px-4 py-2 border rounded-md"
            />
            {errors.password && touched.password && (
              <p className="text-red-500 text-sm">{errors.password}</p>
            )}
          </div>
          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 rounded-md"
          >
            Login
          </button>
        </Form>
      )}
    </Formik>
  );
}

export default LoginForm;
