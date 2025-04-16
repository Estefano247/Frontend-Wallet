import RegisterForm from '@/components/RegisterForm';
import useRegister from '@/hooks/useRegister';
import { Link } from 'react-router-dom'

const RegisterPage = () => {
  const registerProps = useRegister();

  return (
    <>
      <div className="min-h-screen bg-gray-50 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-md">
          <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
            Crear una nueva cuenta
          </h2>
          
          <p className="mt-2 text-center text-sm text-gray-600">
            ¿Ya tienes una cuenta?{' '}
            <Link to="/login" className="font-medium text-indigo-600 hover:text-indigo-500">
              Inicia sesión aquí
            </Link>
          </p>
        </div>

        <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
          <RegisterForm {...registerProps} />
        </div>
      </div>
    </>
  );
};

export default RegisterPage;