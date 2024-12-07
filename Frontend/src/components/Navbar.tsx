import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";
import { ImCross } from "react-icons/im";
import axios from "axios";

const Navbar: React.FC = () => {
  const [showMenu, setShowMenu] = useState<boolean>(false);
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);

  useEffect(() => {
    axios
      .get("http://localhost:8081/auth/check-session", { withCredentials: true })
      .then((response) => {
        // If session is valid
        if (response.status === 200) {
          setIsLoggedIn(true);
        }
      })
      .catch(() => {
        setIsLoggedIn(false);
      });
  }, []);


  const handleClick = (): void => {
    setShowMenu(!showMenu);
  };

  return (
    <>
    

      <div className="px-[6vw] xl:px-[14vw] py-[4vh]">
        
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link to="/home">
            <p className="text-3xl font-mono">Jobify</p>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden lg:flex gap-[5rem] items-center">
            <Link to="/jobs">
              <p>Jobs</p>
            </Link>
            <p className="text-l">Saved</p>

            {/* Show Logoff if logged in, otherwise show Login */}
            {isLoggedIn ? (
              <Link to="/home">
                <button className="bg-blue-500 text-white px-[1rem] py-[0.5rem] rounded-full">
                  Logoff
                </button>
              </Link>
            ) : (
              <Link to="/login">
                <button className="bg-blue-500 text-white px-[1rem] py-[0.5rem] rounded-full">
                  Login
                </button>
              </Link>
            )}
          </div>

          {/* Mobile Menu */}
          {showMenu && (
            <div className="flex flex-col items-center gap-[2rem] lg:hidden border absolute bg-gray-200 top-[13%] left-[6%] p-[1.4rem] w-[90%]">
              <Link to="/jobs">
                <p>Jobs</p>
              </Link>

              {/* Show Logoff if logged in, otherwise show Login */}
              {isLoggedIn ? (
                <Link to="/logoff">
                  <button className="bg-blue-500 text-white px-[1rem] py-[0.5rem] rounded-full">
                    Logoff
                  </button>
                </Link>
              ) : (
                <Link to="/login">
                  <button className="bg-blue-500 text-white px-[1rem] py-[0.5rem] rounded-full">
                    Login
                  </button>
                </Link>
              )}
            </div>
          )}

          {/* Hamburger Menu Toggle */}
          <div onClick={handleClick} className="text-xl lg:hidden cursor-pointer">
            {showMenu ? <ImCross /> : <GiHamburgerMenu />}
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
