import InputField from "@/components/InputField";
import Button from "./Button";

const RegisterForm = ({
  name,
  setName,
  lastname,
  setLastname,
  number,
  setNumber,
  email,
  setEmail,
  password,
  setPassword,
  isLoading,
  registerUser
}) => {
  return (
    <form onSubmit={registerUser} className="space-y-6">
      <div className="bg-white py-8 px-6 shadow rounded-lg sm:px-10 max-w-md w-full">
        <fieldset className="border-none p-0 m-0">
          <legend className="text-2xl font-bold text-gray-900 mb-6 text-center">
            Registro de Usuario
          </legend>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <InputField
              label="Nombre"
              type="text"
              name="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              autoComplete="given-name"
            />
            <InputField
              label="Apellido"
              type="text"
              name="lastname"
              value={lastname}
              onChange={(e) => setLastname(e.target.value)}
              required
              autoComplete="family-name"
            />
          </div>

          <InputField
            label="Teléfono"
            type="tel"
            name="phone"
            value={number}
            onChange={(e) => setNumber(e.target.value)}
            required
            maxLength={9}
            pattern="[0-9]{9}"
            autoComplete="tel"
            placeholder="Ej: 987654321"
          />

          <InputField
            label="Email"
            type="email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            autoComplete="email"
            placeholder="tu@email.com"
          />

          <InputField
            label="Contraseña"
            type="password"
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            minLength={6}
            autoComplete="new-password"
            placeholder="Mínimo 6 caracteres"
          />

          <Button
            name={isLoading ? "Registrando..." : "Registrar"}
            type="submit"
            color="indigo"
            disabled={isLoading}
            className="w-full mt-4"
          />

        </fieldset>
      </div>
    </form>
  );
};

export default RegisterForm;