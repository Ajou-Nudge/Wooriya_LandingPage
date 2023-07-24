import React from 'react';
import Image from 'next/image';

interface FoursquareProps {
  FoursquareName: string;
  FoursquareImage: string; // Use StaticImageData type for Next.js image
}

const Foursquare: React.FC<FoursquareProps> = ({
  FoursquareName,
  FoursquareImage,
}) => {
  return (
    <div className='foursquare-card'>
      
        <Image
          src={FoursquareImage}
          alt={`Wooriya ${FoursquareName}`}
          fill
          style={{ borderRadius: '0.75rem' }}
        />
     
      <div className='text-container'>
        {FoursquareName}
      </div>
    </div>
  );
};

export default Foursquare;
