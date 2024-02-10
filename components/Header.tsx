interface HeaderProps {
    setContent: (content: string) => void;
}

const Header: React.FC<HeaderProps> = ({ setContent }) => {
    return (
      <header className="p-4">
        <div className="container mx-auto flex justify-center items-center">
          <h1 className="text-3xl font-bold"></h1>
          <nav>
            <ul className="flex space-x-4">
              <li><a href="#" onClick={() => setContent('home')} className="hover:text-neutral-300 text-netural-900">home</a></li>
              <li><a href="#resume" onClick={() => setContent('links')} className="hover:text-neutral-300 text-netural-900">links</a></li>
              <li><a href="#contact" onClick={() => setContent('resume')} className="hover:text-neutral-300 text-netural-900">resume</a></li>
              <li><a href="#contact" onClick={() => setContent('contact')} className="hover:text-neutral-300 text-netural-900">contact</a></li>
            </ul>
          </nav>
        </div>
      </header>
    );
  };
  
  export default Header;