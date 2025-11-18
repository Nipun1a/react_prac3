import React from "react";
import "./App.css";
import Card from "./components/Card.jsx";

function App() {
  const jobs = [
    {
      logo: "https://imgs.search.brave.com/RXAhC7hMoa55jFecWzibah4VT5_vVbm7iPguxshhV2E/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9jZG4t/aWNvbnMtcG5nLmZy/ZWVwaWsuY29tLzI1/Ni8xMTM3Ni8xMTM3/NjMwMi5wbmc_c2Vt/dD1haXNfd2hpdGVf/bGFiZWw",
      company: "Amazon",
      postedAt: "5 days ago",
      jobtitle: "Senior UI/UX Designer",
      type: "Full time",
      level: "Senior",
      salary: "$120/hr",
      location: "Mumbai, India",
    },
    {
      logo: "https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg",
      company: "Google",
      postedAt: "2 days ago",
      jobtitle: "Junior Web Developer",
      type: "Part time",
      level: "Junior",
      salary: "$80/hr",
      location: "Bangalore, India",
    },
    {
      logo: "https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg",
      company: "Microsoft",
      postedAt: "1 day ago",
      jobtitle: "Software Engineer",
      type: "Full time",
      level: "Mid",
      salary: "$100/hr",
      location: "Hyderabad, India",
    },
    {
      logo: "https://upload.wikimedia.org/wikipedia/commons/0/05/Facebook_Logo_%282019%29.png",
      company: "Facebook",
      postedAt: "3 days ago",
      jobtitle: "Data Scientist",
      type: "Full time",
      level: "Senior",
      salary: "$120/hr",
      location: "Mumbai, India",
    },
    {
      logo: "https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg",
      company: "Apple",
      postedAt: "4 days ago",
      jobtitle: "Senior iOS Developer",
      type: "Full time",
      level: "Senior",
      salary: "$130/hr",
      location: "Bangalore, India",
    },
  ];

  // Store values in localStorage
  localStorage.setItem("user", "YUG");
  localStorage.setItem("role", "admin");
  localStorage.setItem("token", "abcd1234");

  // User is a plain string so no need for JSON.parse
  const user = localStorage.getItem("user");
  console.log("User from localStorage:", user);

  // Correct async fetch function
  async function getData() {
    try {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/todos"
      );
      const data = await response.json();
      console.log("Fetched data:", data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  }

  return (
    <>
      <h1>Job Listings</h1>

      <button onClick={getData}>Get Data</button>

      <div className="parent">
        {jobs.map((job, index) => (
          <Card key={index} {...job} />
        ))}
      </div>
    </>
  );
}

export default App;
