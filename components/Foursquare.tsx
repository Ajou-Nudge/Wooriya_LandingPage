import React from 'react';
import Image from 'next/image';

interface FoursquareProps {
  FoursquareName: string;
  FoursquareImage: string; 
}

const Foursquare: React.FC<FoursquareProps> = ({
  FoursquareName,
  FoursquareImage,
}) => {
  return (
    <div className='foursquare-card' >
        <Image
          src={FoursquareImage}
          alt={`Wooriya ${FoursquareName}`}
          style={{ borderRadius: '4rem', width: '22rem', height: 'auto'}}
          width={0}
          height={0}
        />
      <div className='text-container'>
        {FoursquareName}
      </div>
    </div>
  );
};

export default Foursquare;
