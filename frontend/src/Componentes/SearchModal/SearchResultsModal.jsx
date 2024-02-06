// SearchResultsModal.jsx
import React from 'react';
import './SearchResultsModal.css';

const SearchResultsModal = ({ isOpen, onClose, results }) => {
  return (
    <div className={`search-results-modal ${isOpen ? 'open' : 'closed'}`}>
      <ul>
        {results.map((result) => (
          <li key={result.id}>
            {/* Renderiza cada resultado como desees */}
            <strong>Título:</strong> {result.title}
            <br />
            <strong>URL:</strong> {result.url}
            <br />
            <strong>Comentarios:</strong> {result.comments}
          </li>
        ))}
      </ul>
      <button onClick={onClose}>Cerrar</button>
    </div>
  );
};

export default SearchResultsModal;
