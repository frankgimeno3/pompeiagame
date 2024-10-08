
import { FC } from 'react';
 import { useRouter } from 'next/navigation';


interface UsuarioProps {
setUser: any
}

const Usuario: React.FC<UsuarioProps> = ({ setUser }) => {
  const router = useRouter();



  return (
    <div>
    <label htmlFor="email" className="block text-sm font-medium leading-6 text-white">
      Usuario
    </label>
    <div className="mt-2">
      <input
        id="email"
        name="email"
        type="email"
        autoComplete="email"
        onChange={(e) => setUser(e.target.value)}
        required
        className="pl-3 block w-full rounded-md border-0 bg-white/5 py-1.5 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-indigo-500 sm:text-sm sm:leading-6"
      />
    </div>
  </div>  );
};

export default Usuario;