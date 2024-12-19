import { Link } from 'react-router-dom';
import ThemeSwitcher from '../ThemeSwitcher';

const Header = () => {
  return (
    <header className="bg-white dark:bg-gray-800 shadow-sm border-b">
      <nav className="container h-16 flex items-center justify-between">
        <Link to="/" className="text-xl font-bold">
          Penny
        </Link>
        <div className="flex items-center space-x-6">
          <div className="space-x-4">
            <Link 
              to="/login" 
              className="text-sm font-medium text-gray-700 dark:text-gray-200 hover:text-accent-600 dark:hover:text-accent-400"
            >
              Login
            </Link>
            <Link 
              to="/signup" 
              className="text-sm font-medium text-gray-700 dark:text-gray-200 hover:text-accent-600 dark:hover:text-accent-400"
            >
              Sign up
            </Link>
          </div>
          <ThemeSwitcher />
        </div>
      </nav>
    </header>
  );
};

export default Header; 