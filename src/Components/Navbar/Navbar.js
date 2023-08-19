import { Link } from 'react-router-dom'; // You'll need to set up React Router for navigation

const Navbar = () => {
    return (
        <nav className="bg-indigo-600 p-4">
            <div className="max-w-7xl mx-auto flex justify-between items-center">
                <Link to="/" className="text-white text-2xl font-semibold">
                    Employee-Connect
                </Link>
                <ul className="flex space-x-4">
                    <li>
                        <Link to="/signUp" className="text-white hover:text-indigo-200">
                            Sign Up
                        </Link>
                    </li>
                    <li>
                        <Link to="/joblistings" className="text-white hover:text-indigo-200">
                            Job Listings
                        </Link>
                    </li>
                    {/* Add more navigation links as needed */}
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;
