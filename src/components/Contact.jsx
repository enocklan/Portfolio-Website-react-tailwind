
function Contact() {
  return (
    <section
      id="contact"
      className="bg-green-100 text-black py-20 px-6"
    >
      <div className="max-w-4xl mx-auto text-center">

        {/* Section Heading */}
        <h2 className="text-4xl font-bold text-green-800 mb-4">
          Contact Me
        </h2>

        <p className="text-gray-700 text-lg mb-10">
          Have a project, opportunity, or question?
          Feel free to get in touch with me.
        </p>

        {/* Contact Information */}
        <div className="bg-white border border-green-200 rounded-xl shadow-lg p-8">

          {/* Email */}
          <div className="mb-6">
            <h3 className="text-xl font-bold text-green-800 mb-2">
              Email
            </h3>

            <a
              href="mailto:enockkipkirui003@gmail.com"
              className="text-black hover:text-green-700 transition"
            >
              enockkipkirui003@gmail.com
            </a>
          </div>

          {/* GitHub */}
          <div className="mb-6">
            <h3 className="text-xl font-bold text-green-800 mb-2">
              GitHub
            </h3>

            <a
              href="https://github.com/enocklan"
              target="_blank"
              rel="noopener noreferrer"
              className="text-black hover:text-green-700 transition"
            >
              github.com/enocklan
            </a>
          </div>

          {/* LinkedIn */}
          <div className="mb-8">
            <h3 className="text-xl font-bold text-green-800 mb-2">
              LinkedIn
            </h3>

            <a
              href="https://www.linkedin.com/in/enock-lan-6918a9269/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-black hover:text-green-700 transition"
            >
              View my LinkedIn Profile
            </a>
          </div>

          {/* Email Button */}
          <a
            href="mailto:enockkipkirui003@gmail.com"
            className="inline-block bg-green-600 text-white font-bold px-8 py-3 rounded-lg hover:bg-green-700 transition"
          >
            Send Me an Email
          </a>

        </div>

        {/* Footer */}
        <p className="text-gray-700 mt-10 text-sm">
          © {new Date().getFullYear()} Enock. All rights reserved.
        </p>

      </div>
    </section>
  );
}

export default Contact;
