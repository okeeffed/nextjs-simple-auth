import React from 'react';
import Link from 'next/link';
import { signIn, signOut, useSession } from 'next-auth/client';

export default function Page() {
  const [session, loading] = useSession();

  if (loading) {
    return <p>Loading...</p>;
  }

  return (
    <>
      {!session && (
        <>
          Not signed in <br />
          <button onClick={signIn}>Sign in</button>
        </>
      )}
      {session && (
        <>
          Signed in as {session.user.name} <br />
          <button onClick={signOut}>Sign out</button>
        </>
      )}
      <div>
        <Link href="/private">
          <a>Go to private page</a>
        </Link>
      </div>
    </>
  );
}
