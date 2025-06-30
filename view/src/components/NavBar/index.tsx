import { Link } from "react-router-dom"


export const NavBar = () => {
  return (
    <nav className="bg-white fixed w-full h-[100px] z-20 top-0 start-0 border-b border-gray-200">
      <div className="max-w-screen relative flex flex-wrap items-center justify-center mx-auto p-4">
        <div className="absolute left-4 top-8">
          <a href="https://www.cognyte.com/" className="flex items-center space-x-3 rtl:space-x-reverse">
            <img width="140" height="36" src="https://www.cognyte.com/wp-content/uploads/2022/02/Cognyte_Logo.svg" className="h-8" alt="Cognyte Logo" />
          </a>
        </div>
        <div className="text-center" id="navbar-sticky">
          <ul className="flex justify-center font-medium text-2xl hover:cursor-pointer hover:text-3xl rounded-lg p-2">
            <li>
              <Link to='/'>
                <a href="#" className="block py-2 px-3 text-custom-dark-blue rounded-sm bg-transparent " aria-current="page">Home</a>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}