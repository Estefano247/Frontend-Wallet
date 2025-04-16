
const Banner = ({ 
    text, 
    bgColor = "bg-blue-600", 
    textColor = "text-white",
    className = "" 
  }) => {
    return (
      <div 
        className={`w-full py-2 text-center font-medium ${bgColor} ${textColor} ${className}`}
      >
        {text}
      </div>
    );
};

export default Banner;