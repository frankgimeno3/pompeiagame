'use client';
import { signIn } from 'next-auth/react';
import { useRouter, redirect } from 'next/navigation';
import { useState } from 'react';
import { useSession } from 'next-auth/react';

const Home = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const { data: session, status } = useSession()

  // if (status === "authenticated") {
  //   redirect('/landing');
  // }

  const router = useRouter();

  const handleSignup = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    router.push('/signup');
  }

  return (
    <div className='relative'>
  
    <div className=" md:mx-56 md:px-56">

    <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8  h-screen md:mx-24 bg-zinc-900 bg-opacity-30">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
      
          <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-white">
            Iniciar Sesión / log in
          </h2>
        </div>

        <form className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm"
        onSubmit={(e) => {
          e.preventDefault();
          signIn('credentials', { email, password, redirect: true, callbackUrl: '/dashboard' });
      }}>
          <div className="space-y-6">
            <div>
              <label htmlFor="email" className="block text-sm font-medium leading-6 text-white">
                email
              </label>
              <div className="mt-2">
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="pl-2 block w-full rounded-md border-0 bg-white/5 py-1.5 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-blue-500 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between">
                <label htmlFor="password" className="block text-sm font-medium leading-6 text-white">
                  Contraseña ( password)
                </label>
             
              </div>
              <div className="mt-2">
                <input
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="current-password"
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  className="pl-2 block w-full rounded-md border-0 bg-white/5 py-1.5 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-blue-500 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div>
              <button
                onClick={() => signIn('credentials', { email, password, redirect: true, callbackUrl: '/dashboard' })}
                disabled={!email || !password}
                className="disabled:opacity-40 flex w-full justify-center rounded-md bg-blue-500 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-blue-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-500"
              >
                Iniciar sesión
              </button>
            </div>
          </div>

        </form>
      
      </div>
    </div>
  </div>
  );
};

export default Home;
