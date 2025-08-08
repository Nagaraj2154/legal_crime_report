import React from 'react';
 import  './ScrollingImages'
 

const images = [
  'https://images.unsplash.com/photo-1682687982442-6f5e3f0efb4a?auto=format&fit=crop&w=800&q=80',
  'https://images.unsplash.com/photo-1604079628042-943b66b6f6e3?auto=format&fit=crop&w=800&q=80',
  'https://images.unsplash.com/photo-1522199710521-72d69614c702?auto=format&fit=crop&w=800&q=80',
];

export default function ScrollingImages() {
  return (
    <div style={styles.wrapper}>
      <div className="scrolling-track">
        {images.concat(images).map((src, index) => (
          <img key={index} src={src} alt={`img-${index}`} style={styles.image} />
        ))}
      </div>
    </div>
  );
}
const styles = {
    wrapper: {
      width: '100%',
      overflow: 'hidden',
      
      padding: '10px 0',
      margin: 0,
    },
    image: {
      height: '100px',
      marginRight: '20px',
      borderRadius: '10px',
      objectFit: 'cover',
    },
  };
  

