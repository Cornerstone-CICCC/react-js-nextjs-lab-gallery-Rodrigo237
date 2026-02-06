import { cookies } from "next/headers";
import { redirect } from "next/navigation";

async function loginAction(formData: FormData) {
  "use server";

  const username = formData.get("username") as string;
  const cookiePhoto = await cookies();

  cookiePhoto.set({
    name: "gallery-user",
    value: username,
    httpOnly: true,
    maxAge: 10 * 60,
  });

  redirect("/gallery");
}

export default function LoginPage() {
  return (
    <div className="p-10">
      <h1 className="text-3xl font-bold mb-4">Login</h1>

      <form action={loginAction} className="space-y-4">
        <input
          type="text"
          name="username"
          placeholder="Username..."
          className="border p-2 rounded w-64"
        />

        <button
          type="submit"
          className="px-4 py-2 bg-blue-600 text-white rounded"
        >
          Log In
        </button>
      </form>
    </div>
  );
}
