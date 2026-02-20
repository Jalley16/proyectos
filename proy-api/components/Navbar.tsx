import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="flex gap-4 p-4 bg-gray-200">
      <Link href="/">Resumen</Link>
      <Link href="/crear">Crear Evento</Link>
      <Link href="/agenda">Agenda</Link>
      <Link href="/horario">Horario</Link>
    </nav>
  );
}