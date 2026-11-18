
import NavBar from "./components/NavBar";
import Home from "./components/Home";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";

function App() {

  // User information
  const user = {
    description:
      "I am a passionate frontend developer who enjoys building beautiful, responsive and user-friendly websites.",

    skills: [
      "HTML",
      "CSS",
      "JavaScript",
      "React",
      "Tailwind CSS"
    ],

    github: "https://github.com/enocklan",
    linkedin: "https://www.linkedin.com/"
  };

  return (
    <>
      <NavBar />

      <Home />

      <About
        description={user.description}
        skills={user.skills}
        github={user.github}
        linkedin={user.linkedin}
      />
      <Projects/>
      <Contact/>
    </>
  );
}

export default App;
