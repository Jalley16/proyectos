import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Link from 'next/link'
import Image from 'next/image'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Mi App Next.js',
  description: 'Aplicación con múltiples características',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es">
      <body className={inter.className}>
        <div className="layout">
          <header className="header">
            <div className="header-container">
              <div className="logo">
                <Image 
                  src="/images/logo.jpg" 
                  alt="Logo Local" 
                  width={60} 
                  height={60}
                  className="logo-img"
                />
                <h1>App Next.js</h1>
              </div>
              <nav className="nav">
                <Link href="/" className="nav-link">Inicio</Link>
                <Link href="/pagina2" className="nav-link">Página 2</Link>
                <Link href="/pagina3" className="nav-link">Página 3</Link>
              </nav>
            </div>
          </header>
          
          <main className="main-content">
            {children}
          </main>
          
          <footer className="footer">
            <div className="footer-content">
              <p>&copy; 2024 Mi App Next.js - Todos los derechos reservados</p>
              <div className="footer-links">
                <Link href="/">Inicio</Link>
                <Link href="/pagina2">Página 2</Link>
                <Link href="/pagina3">Página 3</Link>
              </div>
            </div>
          </footer>
        </div>
      </body>
    </html>
  )
}