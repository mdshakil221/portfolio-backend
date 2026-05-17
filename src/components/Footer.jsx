const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h2 className="text-xl font-bold text-cyan-400 mb-2">MD Shakil</h2>
        <p className="text-gray-400 text-sm mb-4">MERN Stack Developer</p>
        <div className="flex justify-center gap-6 mb-6">
          <a href="https://github.com/mdshakil221" target="_blank" rel="noreferrer" className="text-gray-400 hover:text-cyan-400 transition">GitHub</a>
          <a href="https://www.linkedin.com/in/md-shakil-ahammod/" target="_blank" rel="noreferrer" className="text-gray-400 hover:text-cyan-400 transition">LinkedIn</a>
          <a href="mdshakil6539@gmail.com" className="text-gray-400 hover:text-cyan-400 transition">Email</a>
        </div>
        <p className="text-gray-500 text-xs">© 2025 MD Shakil. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;