import { useState } from "react";

export default function Home() {
  // State variables for input values
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  // Function to handle form submission
  async function handleSubmit(event) {
    // Prevent default behavior
    event.preventDefault();
    // Send a POST request to the API route with the input values
    const response = await fetch("/api/form", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name, email }),
    });
    // Check if the request was successful
    if (response.ok) {
      // Reset the input values
      setName("");
      setEmail("");
      // Alert a success message
      alert("Form submitted successfully!");
    } else {
      // Alert an error message
      alert("Something went wrong!");
    }
  }

  return (

    <nav className="bg-indigo-600 p-4">
    <div className="max-w-7xl mx-auto flex justify-between items-center">
        <a href="/" className="text-white text-2xl font-semibold">
            Employee-Connect
        </a>
        <ul className="flex space-x-4">
            <li>
                <a href="sign"  className="text-white hover:text-indigo-200">
                    Sign Up
                </a>
            </li>
            <li>
                <a href="joblistings" className="text-white hover:text-indigo-200">
                    Job Listings
                </a>
            </li>
            {/* Add more navigation links as needed */}
        </ul>
    </div>
</nav>

    
  );
}