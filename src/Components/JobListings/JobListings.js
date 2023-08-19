import React, { useState } from 'react';

const JobListings = () => {
    const [jobs, setJobs] = useState([
        {
            id: 1,
            title: 'Full Stack Developer',
            company: 'TechCo',
            location: 'New York, NY',
            description: 'We are looking for a talented Full Stack Developer...',
            contact: 'jobs@techco.com',
            jobTime: 'Full-time',
            requiredSkills: 'JavaScript, React, Node.js',
        },
        {
            id: 2,
            title: 'Data Analyst',
            company: 'Data Insights Inc.',
            location: 'San Francisco, CA',
            description: 'Join our team as a Data Analyst and help analyze...',
            contact: 'hr@datainsights.com',
            jobTime: 'Part-time',
            requiredSkills: 'SQL, Python, Data Visualization',
        },
        {
            id: 3,
            title: 'UX/UI Designer',
            company: 'Design Studio',
            location: 'Los Angeles, CA',
            description: 'We are seeking a creative UX/UI Designer to join...',
            contact: 'designer@designstudio.com',
            jobTime: 'Full-time',
            requiredSkills: 'UI/UX Design, Adobe Creative Suite',
        },
    ]);

    return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl w-full">
                <h2 className="text-3xl font-extrabold text-gray-900 mb-4 text-center">
                    Job Listings
                </h2>
                {jobs.map((job) => (
                    <div key={job.id} className="bg-white p-6 rounded-md shadow-md mb-4">
                        <h3 className="text-xl font-semibold text-indigo-600 mb-2">{job.title}</h3>
                        <p className="text-gray-600">{job.company} - {job.location}</p>
                        <p className="text-gray-700 mt-2">{job.description}</p>
                        <div className="mt-4">
                            <div className="flex justify-between">
                                <p className="text-indigo-500">Job Time: {job.jobTime}</p>
                                <p className="text-indigo-500">Required Skills: {job.requiredSkills}</p>
                            </div>
                            <p className="text-indigo-500 mt-2">Contact: {job.contact}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default JobListings;
 