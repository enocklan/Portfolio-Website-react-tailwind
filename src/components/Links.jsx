
function Links({ github, linkedin }) {
  return (
    <div className="border-t border-green-200 pt-6">

      <h3 className="text-2xl font-bold text-black mb-5">
        Connect With Me
      </h3>

      <div className="flex flex-wrap gap-4">

        {/* GitHub */}
        <a
          href={github}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-green-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-700 transition"
        >
          GitHub
        </a>

        {/* LinkedIn */}
        <a
          href={linkedin}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-black text-white px-6 py-3 rounded-lg font-semibold hover:bg-gray-800 transition"
        >
          LinkedIn
        </a>

      </div>
    </div>
  );
}

export default Links;
