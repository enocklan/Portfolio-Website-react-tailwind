
function NavBar() {
  return (
    <nav class="bg-green-100 text-shadow-black text-bold  px-8 py-5 flex justify-between items-center shadow-lg">

      {/* Logo */}
      <h2 class="text-2xl font-bold text-shadow-black-400">
        My Portfolio
      </h2>

      {/* Navigation Links */}
      <ul class="flex gap-8 items-center">
        <li>
          <a href="#home" class="navlinks">
            Home
          </a>
        </li>

        <li>
          <a href="#about" class="navlinks">
            About
          </a>
        </li>

        <li>
          <a href="#projects" class="navlinks">
            Projects
          </a>
        </li>

        <li>
          <a href="#contact" class="navlinks">
            Contact
          </a>
        </li>
      </ul>

    </nav>
  );
}

export default NavBar;
