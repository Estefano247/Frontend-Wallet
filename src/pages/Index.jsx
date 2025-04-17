import Sidebar from "@/components/Sidebar";
import Card from "../components/Card";
import { useState } from "react";

const Index = () => {
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
        <h1 className="text-2xl font-bold mb-6">Panel de Control</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <Card
            icon={<span className="text-4xl mb-4 text-indigo-600">📊</span>}
            title="Resumen"
            description="Bienvenido al panel de administración"
            className="hover:scale-[1.02] transition-transform"
          />
          <Card
            icon={<span className="text-4xl mb-4 text-green-600">📦</span>}
            title="Proveedores"
            description="Gestión de proveedores"
            className="hover:scale-[1.02] transition-transform"
          />
          <Card
            icon={<span className="text-4xl mb-4 text-purple-600">🛠️</span>}
            title="Servicios"
            description="Administración de servicios"
            className="hover:scale-[1.02] transition-transform"
          />
        </div>
      </main>
    </div>

  )
}

export default Index