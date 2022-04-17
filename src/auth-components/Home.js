import { useAuthenticator } from "@aws-amplify/ui-react";

export function Home() {
  const { signOut, user } = useAuthenticator();

  return (
    <main>
      <h1>Hello {user.username}</h1>
      <button onClick={signOut}>Sign out</button>
      <h1>Home Page</h1>
    </main>
  );
}
