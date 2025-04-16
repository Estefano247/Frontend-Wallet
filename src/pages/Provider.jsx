import { useState } from 'react';
import Sidebar from "@/components/Sidebar";

const Provider = () => {
      const [sidebarOpen, setSidebarOpen] = useState(true);
    
  return (
    <div className="flex min-h-screen bg-gray-100">
       <Sidebar 
            title="Dashboard"
            menuItems= {[
                { icon: "🏠", label: "Inicio", path: "/dashboard" },
                { icon: "📦", label: "Proveedores", path: "/dashboard/provider" },
                { icon: "📊", label: "Servicios", path: "/dashboard/services" },
            ]}
            isOpen={sidebarOpen}
            onToggle={() => setSidebarOpen(!sidebarOpen)}
            onLogout={() => {}}
        />
        <main className={`flex-1 ${sidebarOpen ? 'ml-5' : 'ml-20'} transition-all duration-300 p-6`}>
            <h1>Proveedores Kbros</h1>
        </main>
    </div>
  )
}

export default Provider