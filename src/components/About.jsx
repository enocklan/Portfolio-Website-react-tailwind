
import Links from "./Links";

function About({ description, skills, github, linkedin }) {
  return (
    <section
      id="about"
      className="bg-green-50 py-20 px-8"
    >
      <div className="max-w-6xl mx-auto">

        {/* Section Heading */}
        <h2 className="text-4xl font-bold text-black text-center mb-4">
          About Me
        </h2>

        <p className="text-green-700 text-center mb-12">
          Get to know more about me
        </p>

        {/* About Content */}
        <div className="bg-white p-8 rounded-xl shadow-md">

          <h3 className="text-2xl font-bold text-green-700 mb-4">
            Who I Am
          </h3>

          <p className="text-gray-700 text-lg leading-relaxed mb-8">
            {description}
          </p>

          {/* Skills */}
          <h3 className="text-2xl font-bold text-green-700 mb-4">
            My Skills
          </h3>

          <div className="flex flex-wrap gap-3 mb-10">
            {skills.map((skill, index) => (
              <span
                key={index}
                className="bg-green-100 text-green-800 px-4 py-2 rounded-full font-medium"
              >
                {skill}
              </span>
            ))}
          </div>

          {/* Social Links */}
          <Links
            github={github}
            linkedin={linkedin}
          />

        </div>
      </div>
    </section>
  );
}

export default About;
