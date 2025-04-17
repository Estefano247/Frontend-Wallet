import Sidebar from "@/components/Sidebar";
import { useState } from "react";

const Send = () => {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  return (
    <div className="flex min-h-screen bg-gray-200">
      <Sidebar
        title="Tech-Pay"
        menuItems= {[
          { icon: <i className="fas fa-home"></i>,label : "Inicio", path: "/index" },
          { icon: <i className="fas fa-user"></i>,label: "Ver-Perfil", path: "/index/viewProfile" },
          { icon: <i className="fas fa-cog"></i>, label: "Pagar", path: "/index/pay" },
          { icon: <i className="fas fa-paper-plane"></i>, label: "Enviar", path: "/index/send" },
        ]}
        isOpen={sidebarOpen}
        onToggle={() => setSidebarOpen(!sidebarOpen)}
        
      />
      <main className={`flex-1 transition-all duration-300 ${sidebarOpen ? 'ml-4' : 'ml-20'} p-6`}>
        
      </main>
    </div>
  );
};

export default Send