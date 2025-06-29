

export const NavBar = () => {
  return (
    <nav className="bg-white fixed w-full z-20 top-0 start-0 border-b border-gray-200">
      <div className="max-w-screen relative flex flex-wrap items-center justify-center mx-auto p-4">
        <div className="absolute left-4">
          <a href="https://www.cognyte.com/" className="flex items-center space-x-3 rtl:space-x-reverse">
            <img width="140" height="36" src="https://www.cognyte.com/wp-content/uploads/2022/02/Cognyte_Logo.svg" className="h-8" alt="Cognyte Logo" />
          </a>
        </div>
        <div className="text-center" id="navbar-sticky">
          <ul className="flex justify-center font-medium hover:cursor-pointer hover:bg-blue-100 rounded-lg p-2">
            <li>
              <a href="#" className="block py-2 px-3 text-2xl text-[#090f37] rounded-sm bg-transparent " aria-current="page">Home</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}