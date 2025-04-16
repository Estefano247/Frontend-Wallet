const Header = ({ 
  logo = "", 
  menuItems = [], 
  buttons = [],
  logoStyles = "text-2xl font-bold text-blue-600" 
}) => {
  return (
    <header className="shadow-md">
      <nav className="container mx-auto px-4 py-3 flex justify-between items-center">
        <div className={`${logoStyles}`}>{logo}</div>
        
        <div className="flex items-center gap-6">
          {menuItems.map((item, index) => (
            <div key={index} className="relative group">
              <button className="flex items-center gap-1 font-medium hover:text-blue-500">
                {item.label} {item.hasDropdown && "▼"}
              </button>
              {item.hasDropdown && (
                <div className="hidden group-hover:block absolute bg-white shadow-lg rounded-md mt-2">
                  {item.dropdownItems?.map((subItem, i) => (
                    <a key={i} href={subItem.to} className="block px-4 py-2 hover:bg-gray-100">
                      {subItem.label}
                    </a>
                  ))}
                </div>
              )}
            </div>
          ))}

          {buttons.map((button, index) => (
            <a
              key={index}
              href={button.to}
              className={`px-4 py-2 rounded-md font-medium ${
                button.variant === "primary" 
                  ? "bg-blue-600 text-white hover:bg-blue-700" 
                  : "border border-blue-600 text-blue-600 hover:bg-blue-50"
              }`}
            >
              {button.label}
            </a>
          ))}
        </div>
      </nav>
    </header>
  );
};

export default Header;