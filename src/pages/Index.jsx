
const Index = () => {
  return (
    <div>
        <Sidebar
          title="Tech-Pay"
          menuItems= {[
            { icon: "🏠", label: "Index", path: "/Index" },
            { icon: "📦", label: "Ver-Perfil", path: "/View-Profile" },
            { icon: "📊", label: "Pagar", path: "/Pagar" },
            { icon: "📊", label: "Enviar", path: "/Enviar" },
          ]}
          isOpen={true}
          onToggle={() => {}}
          onLogout={() => {}}
        />
        
    </div>

  )
}

export default Index