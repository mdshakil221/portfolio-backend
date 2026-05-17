const Hero = () => {
    return (
        <section id="hero" className="min-h-screen bg-gray-900 flex items-center justify-center text-white">
            <div className="text-center px-6">
                <p className="text-cyan-400 text-lg font-medium mb-2">Hi, I'm</p>
                <h1 className="text-5xl font-bold mb-4">MD Shakil</h1>
                <h2 className="text-2xl text-gray-400 mb-6">
                    MERN Stack Developer
                </h2>
                <p className="text-gray-400 max-w-xl mx-auto mb-8">
                    I build modern, responsive full-stack web applications using MongoDB, Express, React, and Node.js.
                </p>
                <div className="flex gap-4 justify-center">


                    <a href="#projects" className="bg-cyan-400 text-gray-900 px-6 py-3 rounded-full font-semibold hover:bg-cyan-300 transition">
                        View Projects
                    </a>

                    <a href="#contact" className="border border-cyan-400 text-cyan-400 px-6 py-3 rounded-full font-semibold hover:bg-cyan-400 hover:text-gray-900 transition">
                        Contact Me
                    </a>
                </div>
            </div>
        </section>
    );
};

export default Hero;