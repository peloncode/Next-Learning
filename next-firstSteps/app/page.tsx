import Link from 'next/link';

export default function HomePage() {
  return (
    <main className="flex flex-col justify-start items-center min-h-screen">
      <span className="text-5xl w-50 p-4 mt-20">
        Hola bienvenido estas en el home de mi proyecto de prueba
      </span>

      <Link className='border border-violet-400 rounded-lg mt-6 w-30 p-4' href={'/about'}>ingresa a la pagina principal</Link>
    </main>
  )
}
