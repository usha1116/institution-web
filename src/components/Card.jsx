// src/components/Card.jsx
import React from 'react';

function Card({ title, description, imageUrl, linkUrl, linkText = 'Read More' }) {
  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden transition-transform duration-300 hover:scale-105">
      {imageUrl && (
        <img src={imageUrl} alt={title} className="w-full h-48 object-cover" />
      )}
      <div className="p-6">
        <h3 className="text-xl font-bold text-gray-800 mb-2">{title}</h3>
        <p className="text-gray-600 text-base mb-4">{description}</p>
        {linkUrl && (
          <a href={linkUrl} className="text-blue-600 hover:text-blue-800 font-semibold transition-colors duration-300">
            {linkText} &rarr;
          </a>
        )}
      </div>
    </div>
  );
}

export default Card;