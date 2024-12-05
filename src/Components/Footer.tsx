import logo from "/src/assets/logo.png";

const Footer = () => {
  return (
    <>
    <footer className="w-full rounded-lg shadow bg-[#0E369E]">
      <div className="w-full max-w-screen-xl mx-auto p-2 md:py-3">
        <div className="sm:flex sm:items-center sm:justify-between ">
          <a
            href="/"
            className="flex items-center mb-4 sm:mb-0 space-x-3 rtl:space-x-reverse"
          >
            <img src={logo} className="h-8" alt="DelarLogo" />
            <span className="self-center text-2xl font-semibold whitespace-nowrap text-transparent bg-clip-text bg-gradient-to-r from-[#a47f6e] to-[#5C4033]">
              FemFund
            </span>
          </a>
          <ul className="flex flex-wrap items-center mb-6 text-sm font-medium text-white sm:mb-0">
            <li>
              <a href="#" className="hover:underline me-4 md:me-6">
                Privacy Policy
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Contact
              </a>
            </li>
            
          </ul>
            <div className="hidden md:flex md:flex-row md:gap-10 items-center">
              <w3m-button />
            </div>
        </div>
        <hr className="my-6 border-gray-500 sm:mx-auto dark:border-gray-700 lg:my-8" />
        <span className="block text-sm text-white sm:text-center dark:text-gray-400">
          © 2024{" "}
          <a href="" className="hover:underline">
            FemFund™
          </a>
          . All Rights Reserved.
        </span>
      </div>
    </footer>
    </>
  );
};

export default Footer;
