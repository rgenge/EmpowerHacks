import React, { useState } from 'react';
export default function sign(){
    const [formData, setFormData] = useState({
  //      image: '',
//     email: '',
        password: '',
        userSkills: '',
        currentStatus: '', // Default value
        currentEmployment: '', // Additional field for employed users
        studentClass: '',
        jobAvailability: 0, // Initialize to 0
        location: '', // New location input
        profileImage: null,
    });
    const [image, setImage] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [userSkills, setSkills] = useState("");
    const [currentStatus, setCStatus] = useState("");
    const [currentEmployment, setCEmployment] = useState("");
    const [studentClass, setStudentClass] = useState("");
    const [jobAvailability, setJobA] = useState("");
    const [location, setLocation] = useState("");
    const [profileImage, setProfile] = useState("");

    async function handleSubmit(event) {
        // Prevent default behavior
        event.preventDefault();
        // Send a POST request to the API route with the input values
        const response = await fetch("/api/sign", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({image, email, password, userSkills, currentStatus, currentEmployment, studentClass, jobAvailability, location, profileImage}),
        });
        // Check if the request was successful
        if (response.ok) {
          // Reset the input values
          setFormData("");
          setEmail("");
          setImage("");
          setPassword("");
          setSkills("");
          setCStatus("");
          setCEmployment("");
          setStudentClass("");
          setJobA("");
          setLocation("");
          setProfile("");

          // Alert a success message
          alert("Form submitted successfully!");
        } else {
          // Alert an error message
          alert("Something went wrong!");
        }
      }

    return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
            <div className="bg-indigo-600 p-4 rounded-md mb-4">
                <h2 className="text-3xl font-extrabold text-white text-center">
                    Sign Up for <span className="text-indigo-200">Employee-Connect</span>
                </h2>
            </div>
            <div className="max-w-md w-full bg-white p-6 rounded-md shadow-md">
                <form className="space-y-6" onSubmit={handleSubmit}>
                    <div>
                        <label htmlFor="image" className="block text-sm font-medium text-gray-700">
                            Name
                        </label>
                        <input
                            id="image"
                            name="image"
                            type="text"
                            required
                            className="mt-1 p-2 block w-full border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500"
                            placeholder="image"
                            value={image}
                            onChange={(e) => setImage(e.target.value)}
                        />
                    </div>
                    <div>
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                            Email address
                        </label>
                        <input
                            id="email"
                            name="email"
                            type="email"
                            required
                            className="mt-1 p-2 block w-full border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500"
                            placeholder="Email address"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>
                    <div>
                        <label htmlFor="userSkills" className="block text-sm font-medium text-gray-700">
                            User Skills
                        </label>
                        <input
                            id="userSkills"
                            name="userSkills"
                            type="text"
                            className="mt-1 p-2 block w-full border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500"
                            placeholder="User Skills"
                            value={userSkills}
                            onChange={(e) => setSkills(e.target.value)}
                        />
                    </div>
                    <div>
                        <label htmlFor="currentStatus" className="block text-sm font-medium text-gray-700">
                            Current Status
                        </label>
                        <select
                            id="currentStatus"
                            name="currentStatus"
                            className="mt-1 p-2 block w-full border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500"
                            value={currentStatus}
                            onChange={(e) => setCStatus(e.target.value)}
                        >
                            <option value="employed">Employed</option>
                            <option value="student">Student</option>
                        </select>
                    </div>
                    {formData.currentStatus === 'student' && (
                        <div>
                            <label htmlFor="studentClass" className="block text-sm font-medium text-gray-700">
                                Student Class
                            </label>
                            <input
                                id="studentClass"
                                name="studentClass"
                                type="text"
                                className="mt-1 p-2 block w-full border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500"
                                placeholder="Student Class"
                                value={studentClass}
                                onChange={(e) => setStudentClass(e.target.value)}
                            />
                        </div>
                    )}
                    {formData.currentStatus === 'employed' && (
                        <div>
                            <label htmlFor="currentEmployment" className="block text-sm font-medium text-gray-700">
                                Current Employment
                            </label>
                            <input
                                id="currentEmployment"
                                name="currentEmployment"
                                type="text"
                                className="mt-1 p-2 block w-full border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500"
                                placeholder="Current Employment"
                                value={currentEmployment}
                                onChange={(e) => setCEmployment(e.target.value)}
                            />
                        </div>
                    )}
                    <div>
                        <label htmlFor="jobAvailability" className="block text-sm font-medium text-gray-700">
                            Job Availability (in hours)
                        </label>
                        <input
                            id="jobAvailability"
                            name="jobAvailability"
                            type="number"
                            min="0"
                            className="mt-1 p-2 block w-full border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500"
                            placeholder="Job Availability (in hours)"
                            value={jobAvailability}
                            onChange={(e) => setJobA(e.target.value)}
                        />
                    </div>
                    <div>
                        <label htmlFor="profileImage" className="block text-sm font-medium text-gray-700">
                            Profile Image
                        </label>
                        <input
                            id="profileImage"
                            name="profileImage"
                            type="file"
                            accept="image/*" // Allow only image files
                            className="mt-1 p-2 block w-full border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500"
                            onChange={(e) => setProfile(e.target.value)}
                        />
                    </div>

                    <div>
                        <label htmlFor="location" className="block text-sm font-medium text-gray-700">
                            Location
                        </label>
                        <input
                            id="location"
                            name="location"
                            type="text"
                            className="mt-1 p-2 block w-full border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500"
                            placeholder="Location"
                            value={location}
                            onChange={(e) => setLocation(e.target.value)}
                        />
                    </div>
                    <div>
                        <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                            Password
                        </label>
                        <input
                            id="password"
                            name="password"
                            type="password"
                            required
                            className="mt-1 p-2 block w-full border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500"
                            placeholder="Password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </div>
                    <div>
                        <button
                            type="submit"
                            className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                        >
                            Sign Up
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

