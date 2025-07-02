function CompanyDescription() {
  return (
    <section className="bg-gray-50 py-16 px-4 mb-20 border-b border-gray-200">
      <div className="max-w-5xl mx-auto text-center">
        <h1 className="text-5xl font-bold mb-6">Overview</h1>
        <p className="text-lg text-gray-600 mb-6">
          We are a future-focused company delivering exceptional quality
          products. Crafted for professionals, artists, and dreamers alike.
          Discover how we blend design and utility seamlessly.
        </p>
        <div className="flex justify-center gap-4">
          <button className="px-6 py-2 bg-black text-white rounded-full text-sm font-semibold hover:opacity-90 transition">
            Discover
          </button>
          <button className="px-6 py-2 border border-black text-black rounded-full text-sm font-semibold hover:bg-black hover:text-white transition">
            Free Trial
          </button>
        </div>
      </div>
    </section>
  );
}

export default CompanyDescription;
