import React from "react";

const Filters = ({sortBy, sortItems}) => {
  return <div className="filter-buttons">
  {/* <button className="filter-btn">Relevancia</button> */}
  <button className="filter-btn" onClick={() => sortItems('precio')}>
        {sortBy === 'precio-asc' ? 'Precio' : 'Precio'}
      </button>
      <button className="filter-btn" onClick={() => sortItems('nombre')}>
        {sortBy === 'nombre-asc' ? 'Nombre' : 'Nombre'}
      </button>
</div>
};

export default Filters;
