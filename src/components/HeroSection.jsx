const HeroSection = ({ 
  title, 
  description, 
  buttonText, 
  buttonLink,
  imageUrl,
  reverse = false 
}) => {
  return (
    <div className={`container mx-auto px-4 py-12 flex flex-col ${reverse ? "md:flex-row-reverse" : "md:flex-row"} gap-8 items-center`}>
      <div className="md:w-1/2 space-y-4">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-800">{title}</h1>
        <p className="text-xl text-gray-600">{description}</p>
        <a
          href={buttonLink}
          className="inline-block px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
        >
          {buttonText}
        </a>
      </div>
      <div className="md:w-1/2">
        {imageUrl ? (
          <img src={imageUrl} alt="Hero" className="rounded-lg shadow-xl" />
        ) : (
          <div className="bg-gray-200 h-64 rounded-lg flex items-center justify-center">
            <span className="text-gray-400">Imagen ilustrativa</span>
          </div>
        )}
      </div>
    </div>
  );
};

export default HeroSection;