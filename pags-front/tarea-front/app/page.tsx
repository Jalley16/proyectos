'use client';

import { useState } from 'react';
import Image from 'next/image';

export default function Home() {
  const [contador, setContador] = useState(0);

  // Datos de ejemplo para la tabla
  const datosTabla = [
    { id: 1, nombre: 'Producto A', precio: '$25.99', stock: 45 },
    { id: 2, nombre: 'Producto B', precio: '$34.50', stock: 23 },
    { id: 3, nombre: 'Producto C', precio: '$12.75', stock: 67 },
    { id: 4, nombre: 'Producto D', precio: '$89.99', stock: 12 },
  ];

  return (
    <div>
      <h1 className="page-title">Página de Inicio</h1>
      
      {/* --------------------------Tabla------------------------- */}
      <div className="table-container">
        <h2 style={{ color: '#2c3e50', marginBottom: '15px' }}>Tabla de Productos</h2>
        <table className="table">
          <thead>
            <tr>
              <th>ID</th>
              <th>Nombre</th>
              <th>Precio</th>
              <th>Stock</th>
            </tr>
          </thead>
          <tbody>
            {datosTabla.map((item) => (
              <tr key={item.id}>
                <td>{item.id}</td>
                <td>{item.nombre}</td>
                <td>{item.precio}</td>
                <td>{item.stock}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* ------------------------Contador------------------------- */}
      <div style={{ textAlign: 'center', margin: '30px 0' }}>
        <h2 className="counter-display">Contador: {contador}</h2>
        <button 
          className="counter-button"
          onClick={() => setContador(contador + 1)}
        >
          Incrementar Contador
        </button>
      </div>

      {/* -----------------------------Contenedores----------------------------------- */}

      {/* -------------------1er Contenedor----------------------- */}
      <h2 style={{ color: 'white', marginTop: '30px' }}>Contenedores</h2>
      <div className="containers-grid">
        <div className="container-item">
          <h3>1er Contenedor</h3>
          <div className="image-container">
            <Image 
              src="/images/coral-oceanos.jpg" 
              alt="Imagen Local" 
              fill
              sizes="(max-width: 768px) 100vw, 250px"
            />
          </div>
          <p>Primer contenedor para mostrar una imagen guardada localmente.</p>
        </div>

        
        {/* ----------------------2do contenedor---------------------------- */}
        <div className="container-item">
          <h3>2do Contenedor</h3>
          <div className="image-container">
            <Image 
              src="https://images.unsplash.com/photo-1707343843437-caacff5cfa74?w=300&h=200&fit=crop" 
              alt="Imagen Externa" 
              fill
              sizes="(max-width: 768px) 100vw, 250px"
            />
          </div>
          <p>El contenedor tiene una imagen externa de Unsplash.</p>
        </div>

            {/* -------------------3er contenedor-------------------- */}
        <div className="container-item">
          <h3>3er Contenedor</h3>
          <p>Contenido con información adicional sobre servicios.</p>
          <ul style={{ color: '#666' }}>
            <li>Servicio A</li>
            <li>Servicio B</li>
            <li>Servicio C</li>
          </ul>
        </div>

            {/* -------------------------4to contenedor---------------------- */}
        <div className="container-item">
          <h3>4to Contenedor</h3>
          <p>Mostrara métricas importantes sobre el sistema.</p>
          <div style={{ display: 'flex', justifyContent: 'space-around', marginTop: '10px' }}>
            <div style={{ textAlign: 'center' }}>
              <strong>85%</strong>
              <p>Eficiencia</p>
            </div>
            <div style={{ textAlign: 'center' }}>
              <strong>120</strong>
              <p>Usuarios</p>
            </div>
          </div>
        </div>

            {/* -------------------5to contenedor------------------- */}
        <div className="container-item">
          <h3>5to Contenedor</h3>
          <p>Muestra información de contacto y enlaces útiles.</p>
          <div style={{ marginTop: '10px' }}>
            <p> email@ejemplo.com</p>
            <p> +34 123 456 789</p>
          </div>
        </div>
      </div>
    </div>
  );
}