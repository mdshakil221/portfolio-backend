const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 w-full bg-gray-900 text-white z-50 shadow-lg">
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
        <h1 className="text-xl font-bold text-cyan-400">MD Shakil</h1>
        <ul className="flex gap-6 text-sm font-medium">
          <li><a href="#hero" className="hover:text-cyan-400 transition">Home</a></li>
          <li><a href="#about" className="hover:text-cyan-400 transition">About</a></li>
          <li><a href="#skills" className="hover:text-cyan-400 transition">Skills</a></li>
          <li><a href="#projects" className="hover:text-cyan-400 transition">Projects</a></li>
          <li><a href="#contact" className="hover:text-cyan-400 transition">Contact</a></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;