import { useState } from 'react';
import Sidebar from "@/components/Sidebar";
import Table from "@/components/Table";

const Services = () => {
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
                    { header: "RUC", accessor: "ruc" },
                    { header: "Name", accessor: "name" },
                    { header: "Description", accessor: "description" },
                    { header: "Price", accessor: "price" },
                ]}

            />
        </main>
    </div>
  )
}

export default Services