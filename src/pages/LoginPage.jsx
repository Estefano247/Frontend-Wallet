import LoginForm from "@/components/LoginForm";
import useLogin from "@/hooks/useLogin";

const LoginPage = () => {
  const loginProps = useLogin();

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <LoginForm {...loginProps} />
      </div>
    </div>
  );
};

export default LoginPage;