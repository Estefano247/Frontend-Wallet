const Button = ({ 
    name = "", 
    color = "indigo", 
    onClick, 
    disabled = false,
    type = "button",
    className = ""
  }) => {
    const colorClasses = {
      indigo: `bg-indigo-600 hover:bg-indigo-700 focus:ring-indigo-500`,
      red: `bg-red-600 hover:bg-red-700 focus:ring-red-500`,
      green: `bg-green-600 hover:bg-green-700 focus:ring-green-500`,
      blue: `bg-blue-600 hover:bg-blue-700 focus:ring-blue-500`,
      gray: `bg-gray-600 hover:bg-gray-700 focus:ring-gray-500`,
    };
  
    return (
      <button
        type={type}
        onClick={onClick}
        disabled={disabled}
        className={`px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white focus:outline-none focus:ring-2 focus:ring-offset-2 ${
          colorClasses[color] || colorClasses.indigo
        } ${disabled ? "opacity-50 cursor-not-allowed" : ""} ${className}`}
      >
        {name}
      </button>
    );
  };
  
  export default Button;