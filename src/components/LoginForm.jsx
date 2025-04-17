import InputField from "@/components/InputField";

const LoginForm = ({
  email,
  setEmail,
  password,
  setPassword,
  isLoading,
  loginUser,
}) => {
  return (
    <form onSubmit={loginUser} className="space-y-6">
      <div className="bg-white py-8 px-6 shadow rounded-lg sm:px-10 max-w-md w-full">
        <fieldset className="border-none p-0 m-0">
          <legend className="text-2xl font-bold text-gray-900 mb-6 text-center">
            Iniciar Sesión
          </legend>
          
          <InputField
            label="Email"
            type="email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            autoComplete="email"
            required
          />
          
          <InputField
            label="Contraseña"
            type="password"
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            autoComplete="current-password"
            required
          />

          <div className="flex items-center justify-end mb-4">
            <a 
              href="#" 
              className="text-sm text-indigo-600 hover:text-indigo-500"
            >
              ¿Olvidó su contraseña?
            </a>
          </div>

          <button
            type="submit"
            disabled={isLoading}
            className={`w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 ${
              isLoading ? "opacity-70 cursor-not-allowed" : ""
            }`}
          >
            {isLoading ? "Iniciando sesión..." : "Iniciar sesión"}
          </button>
        </fieldset>
      </div>
    </form>
  );
};

export default LoginForm;