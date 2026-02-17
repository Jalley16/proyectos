'use client';

import { useState } from 'react';
import Image from 'next/image';

export default function Pagina2() {
  const [contador2, setContador2] = useState(0);

  return (
    <div>
      <h1 className="page-title">Página 2</h1>
      
      <div style={{ textAlign: 'center', margin: '30px 0' }}>
        <h2 className="counter-display">Contador Página 2: {contador2}</h2>
        <button 
          className="counter-button"
          onClick={() => setContador2(contador2 + 1)}
        >
          Incrementar Contador
        </button>
      </div>

      <h2 style={{ color: 'white', marginTop: '30px' }}>Contenedores Página 2</h2>
      <div className="containers-grid">
        <div className="container-item">
          <h3>Contenedor 1 - P2</h3>
          <div className="image-container">
            <Image 
              src="https://images.unsplash.com/photo-1707343843437-caacff5cfa74?w=300&h=200&fit=crop" 
              alt="Imagen Externa" 
              fill
              sizes="(max-width: 768px) 100vw, 250px"
            />
          </div>
          <p>Contenido especial de la página 2 con imagen externa.</p>
        </div>

        <div className="container-item">
          <h3>Contenedor 2 - P2</h3>
          <p>Información específica de la segunda página.</p>
          <progress value="70" max="100" style={{ width: '100%' }}></progress>
        </div>

        <div className="container-item">
          <h3>Contenedor 3 - P2</h3>
          <p>Estadísticas actualizadas de la aplicación.</p>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px' }}>
            <div>Visitantes: 1,234</div>
            <div>Ventas: 567</div>
            <div>Ingresos: $8,901</div>
            <div>Meta: 75%</div>
          </div>
        </div>

        <div className="container-item">
          <h3>Contenedor 4 - P2</h3>
          <p>Últimas noticias y actualizaciones del sistema.</p>
          <ul>
            <li>Nueva función añadida</li>
            <li>Mantenimiento programado</li>
            <li>Versión 2.0 próximo mes</li>
          </ul>
        </div>

        <div className="container-item">
          <h3>Contenedor 5 - P2</h3>
          <p>Contacto y soporte técnico disponible 24/7.</p>
          <div style={{ marginTop: '10px' }}>
            <button style={{ padding: '8px 16px', background: '#3498db', color: 'white', border: 'none', borderRadius: '4px' }}>
              Solicitar ayuda
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}