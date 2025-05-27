import React from 'react';
import { useState, useEffect } from 'react';
import { useParams } from "react-router-dom";
import '../../../styles/components/ProductDetail.scss';

const ProductDetail = () => {
  
  const { id } = useParams();
  const [provider, setProvider] = useState({});

  const API_URL = `http://localhost:3001/api/providers/${id}`;
  
  // Fetch all products
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(API_URL);
        if (!response.ok) {
          throw new Error("Error al obtener proveedor");
        }
        const data = await response.json();
        setProvider(data[0]);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, [id]);

  return (
    <div className="provider-detail">
      <h2>Detalles del proveedor</h2>
      <p><strong>Nombre:</strong> {provider.name}</p>
      <p><strong>CIF:</strong> {provider.cif}</p>
      <p><strong>Dirección:</strong> {provider.address}</p>
    </div>
  );
};

export default ProductDetail;
