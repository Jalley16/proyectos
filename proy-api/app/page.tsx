"use client";

import Link from "next/link";

export default function HomePage() {
  const buttons=[
    { label: "Crear Evento", href: "/crear" },
    { label: "Agenda", href: "/agenda" },
    { label: "Horario", href: "/horario" },
    { label: "Crear Horario", href: "/crear-horario" },
  ];

  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-gray-50 p-4">
      <h1 className="text-3xl font-bold mb-8">Gestor de Horarios</h1>

      <div className="flex flex-col gap-4 w-full max-w-xs">
        {buttons.map((btn) => (
          <Link
            key={btn.href}
            href={btn.href}
            className="bg-blue-600 text-white py-3 px-6 rounded-md text-center hover:bg-blue-700 transition-colors">
            {btn.label}
          </Link>
        ))}
      </div>
    </div>
  );
}