import Sidebar from "@/components/Sidebar";
import { useState } from "react";
import useUser  from "@/hooks/useUser";

const VerPerfil = () => {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const { user } = useUser();
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
        <h2 className="text-2xl font-bold mb-4">Perfil de Usuario</h2>
        {user ? (
          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="mb-4">
              <label className="font-semibold">Nombre:</label>
              <div>{user.name}</div>
            </div>
            <div className="mb-4">
              <label className="font-semibold">Apellido:</label>
              <div>{user.lastname}</div>
            </div>
            <div className="mb-4">
              <label className="font-semibold">Email:</label>
              <div>{user.email}</div>
            </div>
            <div className="mb-4">
              <label className="font-semibold">Teléfono:</label>
              <div>{user.number}</div>
            </div>
          </div>
        ) : (
          <p>No hay datos de usuario disponibles.</p>
        )}
      </main>
    </div>
  );
};

export default VerPerfil;