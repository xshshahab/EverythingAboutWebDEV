const Footer = () => {
  return (
    <footer className="py-4 mt-10 text-white bg-gray-800">
      <div className="px-2 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          <div className="text-sm">
            <p>
              &copy; {new Date().getFullYear()} Syphar WebDev Agency. All Rights
              Reserved.
            </p>
          </div>
          <div className="space-x-4">
            <a
              href="#"
              className="text-sm font-medium text-gray-300 hover:text-white"
            >
              Privacy Policy
            </a>
            <a
              href="#"
              className="text-sm font-medium text-gray-300 hover:text-white"
            >
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
