const Card = ({ 
    icon, 
    title, 
    description, 
    className = "",
    iconStyles = "text-4xl mb-3 text-blue-500" 
  }) => {
    return (
      <div className={`bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow ${className}`}>
        {icon && <div className={`${iconStyles}`}>{icon}</div>}
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <p className="text-gray-600">{description}</p>
      </div>
    );
};

export default Card;