# 🛍️ Tienda Online - Proyecto Full Stack

Este proyecto es una tienda online de discos de vinilo desarrollada como prueba técnica para el bootcamp de desarrollo web Full Stack en The Bridge (Madrid, España). 

Incluye funcionalidades como listado de productos, filtrado, ordenamiento, vista de detalle y un backend con base de datos.

## 🚀 Tecnologías utilizadas

- **Frontend**: React (con hooks), Sass (SCSS)
- **Backend**: Node.js, Express
- **Base de datos**: PostgreSQL (con `pg`)
- **Control de versiones**: Git

---

## 📦 Funcionalidades principales

### ✅ Vista de productos
- Listado de artículos (nombre, precio)
- Búsqueda por nombre y/o fabricante
- Ordenamiento por:
  - Nombre A-Z / Z-A
  - Precio ascendente / descendente

### 🔍 Vista de detalle
- Muestra información del fabricante / tienda / proveedor

### 🧮 Backend
- Rutas RESTful para productos
- Conexión a base de datos PostgreSQL
- Endpoints disponibles:
  - `GET /api/products` → Lista todos los productos con fabricante
  - `POST /api/products` → Crea un nuevo producto
  - `DELETE /api/products` → Elimina producto por ID