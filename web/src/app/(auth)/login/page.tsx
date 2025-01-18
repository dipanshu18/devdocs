import { AuthForm } from "@/components/auth-form";

export default function Login() {
  return (
    <div className="max-w-md mx-auto p-5">
      <div className="text-center space-y-2">
        <h1 className="text-xl font-semibold">Login</h1>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Mollitia,
          repellat.
        </p>
      </div>

      <AuthForm type="login" />
    </div>
  );
}
