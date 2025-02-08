import React from "react";

const Contact = () => {
  return (
    <section className="py-20 px-6 bg-gray-100 text-center">
      <h2 className="text-4xl font-bold text-gray-900 mb-6">Contact Us</h2>

      <div className="max-w-3xl mx-auto bg-white p-8 shadow-md rounded-lg">
        <p className="text-gray-700 text-lg mb-6">
          Get in touch with us for inquiries, bulk orders, and more.
        </p>


        <div className="mt-8 text-gray-700">
          <p><strong>📍 Address:</strong> 123 Wire Manufacturing Lane, Industrial City</p>
          <p><strong>📞 Phone:</strong> +91 98765 43210</p>
          <p><strong>✉️ Email:</strong> contact@wiremanufacturing.com</p>
        </div>
      </div>
    </section>
  );
};

export default Contact;
