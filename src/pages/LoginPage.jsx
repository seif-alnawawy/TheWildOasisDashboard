import LoginForm from "../features/authentication/LoginForm";
import Heading from "../ui/Heading";
import Logo from "../ui/Logo";

function LoginPage() {
  return (
    <main className="h-screen gap-8 p-8 overflow-auto bg-background flex-col flex justify-center items-center">
      <Logo />
      <Heading>Login to your account</Heading>
      <LoginForm />
    </main>
  );
}

export default LoginPage;
