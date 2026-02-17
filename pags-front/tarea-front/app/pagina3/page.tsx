'use client';

import { useState } from 'react';

export default function Pagina3() {
  const [contador3, setContador3] = useState(0);

  return (
    <div>
      <h1 className="page-title">Página 3</h1>
      
      <div style={{ textAlign: 'center', margin: '30px 0' }}>
        <h2 className="counter-display">Contador Página 3: {contador3}</h2>
        <button 
          className="counter-button"
          onClick={() => setContador3(contador3 + 1)}
        >
          Incrementar Contador
        </button>
      </div>

      <h2 style={{ color: 'white', marginTop: '30px' }}>Contenedores Página 3</h2>
      <div className="containers-grid">
        <div className="container-item">
          <h3>Contenedor 1 - P3</h3>
          <p>Configuración avanzada del sistema.</p>
          <div style={{ marginTop: '10px' }}>
            <label style={{ display: 'block', marginBottom: '5px' }}>
              <input type="checkbox" /> Opción A
            </label>
            <label style={{ display: 'block', marginBottom: '5px' }}>
              <input type="checkbox" /> Opción B
            </label>
            <label style={{ display: 'block' }}>
              <input type="checkbox" /> Opción C
            </label>
          </div>
        </div>

        <div className="container-item">
          <h3>Contenedor 2 - P3</h3>
          <p>Gráfico de rendimiento semanal.</p>
          <div style={{ height: '100px', display: 'flex', alignItems: 'flex-end', gap: '10px', marginTop: '10px' }}>
            <div style={{ flex: 1, height: '60px', background: '#3498db' }}></div>
            <div style={{ flex: 1, height: '80px', background: '#e74c3c' }}></div>
            <div style={{ flex: 1, height: '40px', background: '#2ecc71' }}></div>
            <div style={{ flex: 1, height: '70px', background: '#f39c12' }}></div>
          </div>
        </div>

        <div className="container-item">
          <h3>Contenedor 3 - P3</h3>
          <p>Últimos comentarios de usuarios.</p>
          <div style={{ background: '#f9f9f9', padding: '10px', borderRadius: '5px' }}>
            <p style={{ fontSize: '0.9rem' }}>"Excelente aplicación, muy útil" - Usuario1</p>
            <p style={{ fontSize: '0.9rem' }}>"Me encanta el diseño" - Usuario2</p>
          </div>
        </div>

        <div className="container-item">
          <h3>Contenedor 4 - P3</h3>
          <p>Próximos eventos y fechas importantes.</p>
          <div style={{ marginTop: '10px' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
              <span>Conferencia</span>
              <span>15 Jun</span>
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
              <span>Workshop</span>
              <span>20 Jun</span>
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
              <span>Webinar</span>
              <span>25 Jun</span>
            </div>
          </div>
        </div>

        <div className="container-item">
          <h3>Contenedor 5 - P3</h3>
          <p>Formulario de contacto rápido.</p>
          <div style={{ marginTop: '10px' }}>
            <input 
              type="text" 
              placeholder="Tu nombre" 
              style={{ width: '100%', padding: '8px', marginBottom: '8px', border: '1px solid #ddd', borderRadius: '4px' }}
            />
            <input 
              type="email" 
              placeholder="Tu email" 
              style={{ width: '100%', padding: '8px', marginBottom: '8px', border: '1px solid #ddd', borderRadius: '4px' }}
            />
            <button style={{ width: '100%', padding: '10px', background: '#2ecc71', color: 'white', border: 'none', borderRadius: '4px' }}>
              Enviar
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}