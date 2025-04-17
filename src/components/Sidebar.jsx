import  useUser from '@/hooks/useUser'; // asegúrate de que esta ruta sea correcta
import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Sidebar = ({ 
  title = "",
  menuItems = [],
  logo,
  collapsible = true,
  initialOpen = true
}) => {
  const [isOpen, setIsOpen] = useState(initialOpen);
  const location = useLocation();
  const { logout } = useUser(); // <- aquí accedemos al logout

  const handleLogout = () => {
    logout();
  };

  return (
    <aside className={`bg-gray-800 text-white h-screen flex flex-col transition-all duration-300 ${isOpen ? 'w-64' : 'w-20'}`}>
      <div className={`p-4 border-b border-gray-700 flex items-center ${collapsible ? 'justify-between' : 'justify-center'}`}>
        {isOpen && (
          <div className="flex items-center">
            {logo && <img src={logo} alt="Logo" className="h-8 mr-2" />}
            <h2 className="text-xl font-bold">{title}</h2>
          </div>
        )}
        {collapsible && (
          <button 
            onClick={() => setIsOpen(!isOpen)}
            className="text-gray-400 hover:text-white"
            aria-label={isOpen ? 'Collapse menu' : 'Expand menu'}
          >
            {isOpen ? "◀" : "▶"}
          </button>
        )}
      </div>

      <nav className="flex-1 overflow-y-auto p-2">
        <ul className="space-y-1">
          {menuItems.map((item) => (
            <li key={item.path}>
              <Link 
                to={item.path}
                className={`flex items-center p-3 rounded-lg hover:bg-gray-700 transition-colors ${
                  location.pathname === item.path ? 'bg-gray-900' : ''
                }`}
              >
                <span className="text-xl flex-shrink-0">{item.icon}</span>
                {isOpen && (
                  <span className="ml-3 overflow-hidden overflow-ellipsis">
                    {item.label}
                    {item.badge && (
                      <span className="ml-2 bg-red-500 text-white text-xs px-2 py-1 rounded-full">
                        {item.badge}
                      </span>
                    )}
                  </span>
                )}
              </Link>
            </li>
          ))}
        </ul>
      </nav>

      <div className="p-4 border-t border-gray-700">
        <button 
          onClick={handleLogout}
          className="flex items-center w-full p-2 rounded-lg hover:bg-gray-700 transition-colors"
        >
          <span className="text-xl">🔒</span>
          {isOpen && <span className="ml-3">Cerrar Sesión</span>}
        </button>

        {isOpen && (
          <div className="mt-4 text-xs text-gray-400">
            Versión 1.0.0
          </div>
        )}
      </div>
    </aside>
  );
};

export default Sidebar;
