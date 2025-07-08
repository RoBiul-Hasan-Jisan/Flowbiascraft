export default function HeroSection() {
  return (
    <section className="relative bg-gradient-to-br from-blue-700 via-blue-600 to-indigo-700 text-white min-h-[80vh] flex items-center justify-center">
      <div className="container mx-auto px-6 text-center">
        <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-4">
          Welcome to <span className="text-yellow-300">FlowBiasCraft</span>
        </h1>
        <p className="text-lg md:text-xl max-w-2xl mx-auto mb-6">
          Your trusted software company delivering{" "}
          <span className="font-semibold">innovative digital solutions</span> for
          the future.
        </p>
        <div className="flex justify-center gap-4">
          <button className="bg-yellow-400 text-blue-900 font-semibold px-6 py-3 rounded-xl shadow-md hover:bg-yellow-300 transition duration-300">
            Explore Projects
          </button>
          <button className="border border-white text-white px-6 py-3 rounded-xl hover:bg-white hover:text-blue-700 transition duration-300">
            Contact Us
          </button>
        </div>
      </div>
    </section>
  );
}
