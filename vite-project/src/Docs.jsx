import React from "react";

const docs = [
  "central exicse act.pdf",
  "constitution of india.pdf",
  "fir.pdf",
  "indian evidence act.pdf",
  "indian penal code.pdf",
  "it_act_2000_updated.pdf",
  "pocso act 2012.pdf",
  "protection_of_women_from_domestic_violence_act_2012.pdf",
  "Rights of Women and Child.pdf",
  "the_code_of_criminal_procedure,_1973.pdf",
];

const DocsPage = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6 text-center">Legal Documents</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {docs.map((doc, index) => (
          <div
            key={index}
            className="bg-white rounded-lg shadow-md p-6 flex flex-col justify-between hover:shadow-lg transition"
          >
            <h2 className="text-lg font-semibold mb-4">{doc}</h2>
            <a
              href={`/pdfs/${encodeURIComponent(doc)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-auto inline-block bg-blue-600 text-white text-center py-2 px-4 rounded hover:bg-blue-700 transition text-decoration-none no-underline"
            >
              View PDF
            </a>
          </div>
        ))}
      </div>
    
    </div>
    
  );
};

export default DocsPage;
