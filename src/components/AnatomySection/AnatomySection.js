import React from 'react';
import './AnatomySection.css';
import bodyOutline from '../../assets/images/body-outline.png'; // Verify this path

function AnatomySection() {
  return (
    <div className="anatomy-container">
      <div className="anatomy-image-wrapper">
        <img 
          src={bodyOutline} 
          alt="Human anatomy" 
          className="anatomy-image"
          onError={(e) => {
            e.target.onerror = null; 
            e.target.src = 'https://freesvg.org/img/Anonymous-Silhouette.png';
          }}
        />
        {/* Markers remain the same */}
      </div>
    </div>
  );
}

export default AnatomySection;