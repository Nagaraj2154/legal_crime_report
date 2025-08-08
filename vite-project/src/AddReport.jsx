import React, { useState, useEffect } from "react";
import './AddReport.css';

const backendURL = import.meta.env.VITE_SAVE_REPORT_API_URL; // ✅ fixed env var
console.log("Using backend:", backendURL); // ✅ test log

const crimeData = {
  'Crimes Against Persons': ['Murder / Homicide', 'Assault / Battery', 'Kidnapping', 'Rape / Sexual Assault', 'Domestic Violence'],
  'Crimes Against Property': ['Theft / Larceny', 'Burglary', 'Robbery', 'Arson', 'Vandalism', 'Shoplifting', 'Motor Vehicle Theft'],
  'White-Collar Crimes': ['Fraud', 'Embezzlement', 'Money Laundering', 'Tax Evasion', 'Insider Trading', 'Bribery and Corruption'],
  'Cyber Crimes': ['Hacking', 'Phishing', 'Online Fraud / Scams', 'Cyberbullying', 'Data Theft', 'Identity Theft', 'Online Harassment'],
  'Organized Crimes': ['Drug Trafficking', 'Human Trafficking', 'Smuggling', 'Illegal Arms Trade', 'Extortion / Racket'],
  'Crimes Against Morality': ['Prostitution', 'Gambling (illegal)', 'Drug Use / Possession', 'Public Drunkenness'],
  'Crimes Against the State': ['Treason', 'Espionage', 'Sedition', 'Terrorism', 'Rioting', 'Illegal Protest / Assembly'],
  'Juvenile Crimes': ['Underage Drinking', 'Vandalism', 'Truancy', 'Curfew Violations'],
  'Environmental Crimes': ['Illegal Dumping of Waste', 'Poaching', 'Pollution Violations', 'Illegal Mining / Deforestation']
};

export default function AddReport() {
  const [crimeCategory, setCrimeCategory] = useState("");
  const [categoryType, setCategoryType] = useState("");
  const [description, setDescription] = useState("");
  const [location, setLocation] = useState("");
  const [date, setDate] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const reportData = {
      crime_type: crimeCategory,
      category: categoryType,
      description,
      location,
      date
    };

    try {
      const response = await fetch(`${backendURL}/store`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(reportData)
      });

      const result = await response.json();

      if (response.ok) {
        alert("Report submitted successfully!");
        setCrimeCategory("");
        setCategoryType("");
        setDescription("");
        setLocation("");
        setDate("");
      } else {
        alert("Error: " + result.error);
      }
    } catch (error) {
      console.error("Submission error:", error);
      alert("Failed to submit report");
    }
  };

  useEffect(() => {
    if (crimeCategory) {
      console.log(`Selected crime category: ${crimeCategory}`);
    }
  }, [crimeCategory]);


  return (
    <>
        <div>
            <h4>Your voice is the first step toward justice — by speaking up, you’re not just reporting a crime, you’re protecting your community and inspiring others to stand for what's right.</h4>
        </div>
      <form action="" method="post" className="add-report-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="crime_type">Crime Type:</label>
            <select name="crime_type" id="crime_type" value={crimeCategory} onChange={
                e =>{
                    setCrimeCategory(e.target.value);
                }
            } >
            <option value="">Select a crime type</option>
            {Object.keys(crimeData).map((catagery) => (
               <option value={catagery} key={catagery}>{catagery}</option>
            ))}
            </select>

            <select name="category_types" id="category_types">
            <option value="">Select a category</option>
            {crimeCategory && crimeData[crimeCategory].map((type) => (
              <option value={type} key={type}>{type}</option>
            ))}

            </select>
           
          


          
        </div>

        <div className="form-group">
          <label htmlFor="description">Description:</label>
          <textarea name="description" id="description" cols="30" rows="6" />
        </div>
    <br />
        <div className="form-group">
          <label htmlFor="location">Location:</label>
          <input type="text" name="location" id="location" />
        </div>

        <div className="form-group">
          <label htmlFor="date">Date:</label>
          <input type="date" name="date" id="date" />
        </div>
        <div className="form-group" style={{ display: 'flex', justifyContent: 'space-between' }}>

        <button type="submit">Submit Report</button>
        <button type="reset"  >reset</button>
        </div>
      </form>
    </>
  );
}
