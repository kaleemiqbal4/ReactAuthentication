import ContactForm from "./ConatctForm";

const Contact = () => {
  return (
    <div className="bg-gray-100 min-h-screen">
      {/* Banner Section */}
      <div className="bg-blue-600 text-white text-center py-4">
        <h1 className="text-3xl font-bold">Get in Touch with Us</h1>
      </div>

      {/* Main Content Section */}
      <div className="max-w-7xl mx-auto p-6 flex flex-col lg:flex-row justify-between items-start space-y-6 lg:space-y-0 lg:space-x-5">
        {/* Address Details Section */}
        <div className="lg:w-1/3 bg-white rounded-lg shadow-md p-6 flex flex-col justify-between mb-6 lg:mb-0">
          <h2 className="text-2xl font-bold mb-4">Our Office</h2>
          <p className="text-gray-700 mb-2">
            <strong>Address:</strong> 123 Main St, Suite 100, Anytown, USA
          </p>
          <p className="text-gray-700 mb-2">
            <strong>Email:</strong> contact@example.com
          </p>
          <p className="text-gray-700 mb-2">
            <strong>Phone:</strong> (123) 456-7890
          </p>
        </div>

        {/* Contact Form Section */}
        <div className="lg:w-2/3">
          <ContactForm />
        </div>
      </div>

      {/* Bottom White Space */}
      <div className="h-24 bg-white"></div>
    </div>
  );
};

export default Contact;
