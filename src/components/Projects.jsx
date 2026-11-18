
function Projects() {

  const projects = [
    {
      id: 1,
      title: "Invoice Generator",
      description:
        "A web application for creating, managing and tracking invoices and payments.",
      technologies: ["HTML", "CSS", "JavaScript", "REST API"],
      link: "https://invoice-generator-2-g4yp.onrender.com/#invoices",
      status: "Live Project"
    },

    {
      id: 2,
      title: "Hospital Management System",
      description:
        "A system designed to help manage hospital operations, patient records and administrative activities.",
      technologies: [ "Php", "React", "JavaScript", "Tailwind CSS"],
      link: "",
      status: "Project"
    },

    {
      id: 3,
      title: "School Management System",
      description:
        "A system designed to organize school activities, student information and academic administration.",
      technologies: [ "Laravel", "React", "JavaScript", "Tailwind CSS"],
      link: "",
      status: "Project"
    }
  ];

  return (
    <section
      id="projects"
      className="bg-green-100 py-20 px-8"
    >
      <div className="max-w-6xl mx-auto">

        {/* Section Heading */}
        <div className="text-center mb-12">

          <h2 className="text-4xl font-bold text-black mb-4">
            My Projects
          </h2>

          <p className="text-green-800 text-lg">
            Here are some of the projects I have worked on.
          </p>

        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

          {projects.map((project) => (

            <div
              key={project.id}
              className="bg-white rounded-xl shadow-md p-6 hover:shadow-xl transition duration-300 border border-green-200"
            >

              {/* Project Number */}
              <span className="text-green-700 font-bold text-sm">
                PROJECT 0{project.id}
              </span>

              {/* Project Title */}
              <h3 className="text-2xl font-bold text-black mt-3 mb-4">
                {project.title}
              </h3>

              {/* Description */}
              <p className="text-gray-700 leading-relaxed mb-6">
                {project.description}
              </p>

              {/* Technologies */}
              <div className="flex flex-wrap gap-2 mb-6">

                {project.technologies.map((technology, index) => (
                  <span
                    key={index}
                    className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium"
                  >
                    {technology}
                  </span>
                ))}

              </div>

              {/* Project Link */}
              {project.link ? (
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block bg-green-600 text-white px-5 py-3 rounded-lg font-semibold hover:bg-green-700 transition"
                >
                  View Project →
                </a>
              ) : (
                <span className="inline-block text-green-700 font-semibold">
                  Project link coming soon
                </span>
              )}

            </div>

          ))}

        </div>

      </div>
    </section>
  );
}

export default Projects;
