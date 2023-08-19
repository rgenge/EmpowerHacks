import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './Components/Navbar/Navbar'; // Import the Navbar component
import Signup from './Components/Signup/Signup';
import JobListings from './Components/JobListings/JobListings'; // Assuming this is the correct component for job listings

function App() {
  return (
    <BrowserRouter>
      {/* Include the Navbar */}
      <Navbar />

      <Routes>
        {/* <Route path="/" element={<Home />} /> Define your homepage component */}
        <Route path="/signUp" element={<Signup />} />
        <Route path="/jobListings" element={<JobListings />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
