
import React from "react";
import { Link } from "react-router-dom";

const Card = ({ imageUrl, title, description, linkUrl, linkText }) => {
  return (
    <div className="relative overflow-hidden rounded-lg shadow-xl group transform transition-transform duration-500 hover:scale-105 bg-black">
      <img
        src={imageUrl}
        alt={title}
        className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
      />
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent opacity-100 transition-opacity duration-500 group-hover:opacity-100" />

      {/* Content */}
      <div className="absolute bottom-0 p-6 text-white opacity-0 group-hover:opacity-100 transform translate-y-10 group-hover:translate-y-0 transition-all duration-500">
        <h3 className="text-xl font-bold relative pb-2 after:absolute after:left-0 after:bottom-0 after:w-0 group-hover:after:w-full after:h-0.5 after:bg-blue-400 after:transition-all after:duration-500">
          {title}
        </h3>
        <p className="mt-2 text-sm text-gray-200">{description}</p>
        <Link
          to={linkUrl}
          className="inline-block mt-4 bg-blue-200 text-black px-4 py-2 rounded-full font-semibold hover:bg-white transition"
        >
          {linkText}
        </Link>
      </div>
    </div>
  );
};

export default Card;
