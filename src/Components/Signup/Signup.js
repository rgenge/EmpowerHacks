import React, { useState } from 'react';

const Signup = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: '',
        userSkills: '',
        currentStatus: 'employed', // Default value
        currentEmployment: '', // Additional field for employed users
        studentClass: '',
        jobAvailability: 0, // Initialize to 0
        location: '', // New location input
        profileImage: null,
    });

    const handleChange = (e) => {
        const { name, value, type } = e.target;
        if (type === 'file') {
            setFormData({ ...formData, [name]: e.target.files[0] });
        } else {
            // Ensure jobAvailability is not negative
            if (name === 'jobAvailability' && Number(value) < 0) {
                return;
            }
            setFormData({ ...formData, [name]: value });
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Here, you would typically send the formData to your backend for processing.
        // You can use Axios or the fetch API for this.
        console.log('Form data submitted:', formData);
    };

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
                        <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                            Name
                        </label>
                        <input
                            id="name"
                            name="name"
                            type="text"
                            required
                            className="mt-1 p-2 block w-full border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500"
                            placeholder="Name"
                            value={formData.name}
                            onChange={handleChange}
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
                            value={formData.email}
                            onChange={handleChange}
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
                            value={formData.userSkills}
                            onChange={handleChange}
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
                            value={formData.currentStatus}
                            onChange={handleChange}
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
                                value={formData.studentClass}
                                onChange={handleChange}
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
                                value={formData.currentEmployment}
                                onChange={handleChange}
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
                            value={formData.jobAvailability}
                            onChange={handleChange}
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
                            onChange={handleChange}
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
                            value={formData.location}
                            onChange={handleChange}
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
                            value={formData.password}
                            onChange={handleChange}
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

export default Signup;
