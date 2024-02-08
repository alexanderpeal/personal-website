import { Head } from "next/document";

interface HeaderProps {
    setContent: (content: string) => void; // Defines the setContent function type
}

const Header: React.FC<HeaderProps> = ({ setContent }) => {
    return (
      <header className="text-slate-500 p-4">
        <div className="container mx-auto flex justify-center items-center bg-slate-100">
          <h1 className="text-3xl font-bold"></h1>
          <nav>
            <ul className="flex space-x-4">
              <li><a href="#" onClick={() => setContent('home')} className="hover:text-blue-200">Home</a></li>
              <li><a href="#" onClick={() => setContent('about')} className="hover:text-blue-200">About</a></li>
              <li><a href="#" onClick={() => setContent('resume')} className="hover:text-blue-200">Resume</a></li>
              <li><a href="#" onClick={() => setContent('contact')} className="hover:text-blue-200">Contact</a></li>
            </ul>
          </nav>
        </div>
      </header>
    );
  };
  
  export default Header;