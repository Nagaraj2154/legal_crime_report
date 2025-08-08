import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
export default function Home() {
  return (
    <div className="bg-gray-100 text-gray-800">
      {/* Hero Image */}
      <section className="w-full bg-gray-100">
        <div className="max-w-7xl mx-auto px-4 py-8">
          <div className="rounded-xl overflow-hidden shadow-lg">
            <img
              src="https://static.vecteezy.com/system/resources/previews/027/105/968/large_2x/legal-law-and-justice-concept-open-law-book-with-a-wooden-judges-gavel-in-a-courtroom-or-law-enforcement-office-free-photo.jpg"
              alt="Legal Justice"
              className="w-full h-72 sm:h-96 object-cover object-center"
            />
          </div>
        </div>
      </section>

      {/* Intro Section */}
      <section className="py-10 text-center max-w-4xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-indigo-700 mb-4">Empowering Justice for All</h2>
        <p className="text-lg text-gray-700">
          Welcome to <strong>NyaySathi</strong> – your trusted digital companion for accessible and anonymous legal aid. Explore Indian laws, understand your rights, and report crimes safely with confidence and clarity.
        </p>
      </section>

      {/* Cards Section */}
      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 px-4 max-w-7xl mx-auto mb-12">
        <div className="bg-white shadow-md rounded-xl p-6 hover:shadow-xl transition duration-300">
          <h3 className="text-xl font-semibold mb-2 text-indigo-600">📚 Docs</h3>
          <p className="text-gray-600">Browse laws, rights, and FAQs explained in a simple way for everyone.</p>
          <a href="/Docs" className="text-indigo-500 font-medium mt-3 inline-block">Learn more →</a>
        </div>
        <div className="bg-white shadow-md rounded-xl p-6 hover:shadow-xl transition duration-300">
          <h3 className="text-xl font-semibold mb-2 text-red-600">📢 Report</h3>
          <p className="text-gray-600">Anonymously report crimes or incidents with secure submission.</p>
          <a href="/report" className="text-red-500 font-medium mt-3 inline-block">Report now →</a>
        </div>
        <div className="bg-white shadow-md rounded-xl p-6 hover:shadow-xl transition duration-300">
          <h3 className="text-xl font-semibold mb-2 text-green-600">🤖 Bot</h3>
          <p className="text-gray-600">Chat with our AI Legal Assistant for quick help and legal info.</p>
          <a href="/services" className="text-green-500 font-medium mt-3 inline-block">Chat now →</a>
        </div>
        <div className="bg-white shadow-md rounded-xl p-6 hover:shadow-xl transition duration-300">
          <h3 className="text-xl font-semibold mb-2 text-blue-600">ℹ️ About</h3>
          <p className="text-gray-600">Learn more about our mission, vision, and the team behind NyaySathi.</p>
          <a href="/about" className="text-blue-500 font-medium mt-3 inline-block">Read more →</a>
        </div>
      </section>

      {/* Importance of Legal Aid */}
      <section className="bg-indigo-50 py-12 px-6">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-4xl font-extrabold text-indigo-800 mb-6">Why Legal Aid Matters</h2>
          <p className="text-lg text-gray-700 leading-relaxed mb-4">
            Access to legal help is a <span className="font-semibold text-indigo-700">fundamental right</span> in any just society. Legal aid empowers vulnerable and underrepresented communities to stand up for themselves, understand their rights, and seek justice.
          </p>
          <p className="text-lg text-gray-700 leading-relaxed mb-4">
            In a country as diverse and populous as India, <span className="font-semibold">digital platforms like <span className="text-indigo-700">NyaySathi</span></span> help bridge the justice gap by offering legal knowledge, guidance, and support — all at your fingertips.
          </p>
          <p className="text-lg text-gray-700 leading-relaxed mb-4">
            <span className="font-semibold text-indigo-700">Sustainable Development Goal 16 (SDG 16)</span> aims to promote peaceful and inclusive societies, provide access to justice for all, and build effective, accountable institutions at every level.
          </p>
          <p className="text-lg text-gray-700 leading-relaxed">
            It emphasizes peace as a foundation for human rights and sustainable development. Achieving SDG 16 is essential because ongoing conflict and insecurity threaten progress and the well-being of communities worldwide.
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white border-t mt-10">
        <div className="max-w-7xl mx-auto py-6 px-4 flex flex-col md:flex-row justify-between items-center text-gray-600">
          <p>© 2025 NyaySathi. All rights reserved.</p>
          <p className="mt-2 md:mt-0">Made with ❤️ for Justice & Empowerment</p>
        </div>
      </footer>
    </div>
  );
}

