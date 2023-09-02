const Header = () => {
    return (
      <div className="">
        <header>
          <ul className="list-none flex justify-center gap-4">
            <li className="p-2"><a href="/">Home</a></li>
            <li className="p-2"><a href="/dashboard">Dashboard</a></li>
            <li className="p-2"><a href="/about">About</a></li>
            <li className="p-2"><a href="/login">Login</a></li>
          </ul>
        </header>
      </div>
    );
  };
  export default Header;
  