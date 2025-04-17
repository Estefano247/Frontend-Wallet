import { useState } from 'react';
import Sidebar from "@/components/Sidebar";
import Table from "@/components/Table";

const Provider = () => {
    const [sidebarOpen, setSidebarOpen] = useState(true);
    
  return (
    <div className="flex min-h-screen bg-gray-100">
       <Sidebar 
            title="Dashboard"
            menuItems= {[
              { icon: <i className="fas fa-home"></i>, label: "Inicio", path: "/dashboard" },
              { icon: <i className="fas fa-user"></i>, label: "Proveedores", path: "/dashboard/provider" },
              { icon: <i className="fas fa-cog"></i>, label: "Servicios", path: "/dashboard/services" },
            ]}
            isOpen={sidebarOpen}
            onToggle={() => setSidebarOpen(!sidebarOpen)}
            onLogout={() => {}}
        />
        <main className={`flex-1 ${sidebarOpen ? 'ml-5' : 'ml-20'} transition-all duration-300 p-6`}>
            <Table
                columns={[
                    { header: "Nombre", accessor: "name" },
                    { header: "RUC", accessor: "ruc" },
                    { header: "Correo", accessor: "email" },
                    { header: "Dirección", accessor: "address" },
                ]}

            />
        </main>
    </div>
  )
}

export default Provider