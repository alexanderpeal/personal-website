import { Head } from "next/document";

interface HeaderProps {
    setContent: (content: string) => void; // Defines the setContent function type
}

const Header: React.FC<HeaderProps> = ({ setContent }) => {
    return (
      <header className="text-slate-500 p-4">
        <div className="container mx-auto flex justify-center items-center">
          <h1 className="text-3xl font-bold"></h1>
          <nav>
            <ul className="flex space-x-4">
              <li><a href="#" onClick={() => setContent('home')} className="hover:text-blue-200">home</a></li>
              <li><a href="#resume" onClick={() => setContent('resume')} className="hover:text-blue-200">links</a></li>
              <li><a href="#contact" onClick={() => setContent('contact')} className="hover:text-blue-200">resume</a></li>
              <li><a href="#contact" onClick={() => setContent('contact')} className="hover:text-blue-200">contact</a></li>
            </ul>
          </nav>
        </div>
      </header>
    );
  };
  
  export default Header;