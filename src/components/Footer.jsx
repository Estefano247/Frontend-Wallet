
const Footer = ({ 
  sections = [], 
  socialLinks = [],
  copyrightText = "© 2024 TechVision. Todos los derechos reservados." 
}) => {
  return (
    <footer className="bg-gray-800 text-white pt-12 pb-6">
      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8">
        {sections.map((section, index) => (
          <div key={index}>
            <h4 className="text-lg font-semibold mb-4">{section.title}</h4>
            <ul className="space-y-2">
              {section.links.map((link, idx) => (
                <li key={idx}>
                  <a href={link.to} className="hover:text-blue-300 transition-colors">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}
        
        {socialLinks.length > 0 && (
          <div>
            <h4 className="text-lg font-semibold mb-4">Síguenos</h4>
            <div className="flex gap-4">
              {socialLinks.map((social, i) => (
                <a 
                  key={i} 
                  href={social.url} 
                  target="_blank"
                  className="text-2xl hover:text-blue-300 transition-colors"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>
        )}
      </div>
      
      <div className="border-t border-gray-700 mt-8 pt-6 text-center text-gray-400">
        <p>{copyrightText}</p>
      </div>
    </footer>
  );
};
export default Footer;