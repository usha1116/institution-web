// src/pages/GalleryPage.jsx
import React from 'react';
import Card from '../components/Card'; // Re-use the Card component

// Import your gallery images (ensure these paths are correct)
import galleryImg1 from '../assets/gallery/img1.jpg';
import galleryImg2 from '../assets/gallery/img2.jpg';
import galleryImg3 from '../assets/gallery/img3.jpg';
import galleryImg4 from '../assets/gallery/img4.jpg';
import galleryImg5 from '../assets/gallery/img5.jpg';
import galleryImg6 from '../assets/gallery/img6.jpg';

function GalleryPage() {
  const galleryItems = [
    { id: 1, src: galleryImg1, title: 'Annual Day Celebration', description: 'Students performing on stage.' },
    { id: 2, src: galleryImg2, title: 'Science Lab Session', description: 'Hands-on learning in the lab.' },
    { id: 3, src: galleryImg3, title: 'Sports Meet', description: 'Athletes competing on the field.' },
    { id: 4, src: galleryImg4, title: 'Library Reading', description: 'Students enjoying books.' },
    { id: 5, src: galleryImg5, title: 'Art Class Creativity', description: 'Young artists at work.' },
    { id: 6, src: galleryImg6, title: 'Morning Assembly', description: 'Daily gathering of students.' },
  
  ];

  return (
    <div className="container mx-auto px-4 md:px-6 lg:px-8 py-16 md:py-24">
      <h1 className="text-5xl font-bold text-gray-800 mb-8 text-center animate-fade-in-up">Our School Gallery</h1>

      <p className="text-lg text-gray-700 text-center mb-12 max-w-3xl mx-auto animate-fade-in-up delay-200">
        Explore moments from our vibrant campus life, academic pursuits, and co-curricular activities.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {galleryItems.map((item, index) => (
          <div key={item.id} className="animate-zoom-in" style={{ animationDelay: `${index * 0.1}s` }}>
            <Card
              imageUrl={item.src}
              title={item.title}
              description={item.description}
              // No linkUrl for gallery items, or link to a modal/lightbox if implemented
            />
          </div>
        ))}
      </div>
     
    </div>
  );
}

export default GalleryPage;