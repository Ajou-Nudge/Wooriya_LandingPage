import React from 'react';
import Image from 'next/image';

const Navbar = () => {
  return (
    <div className='flex items-center justify-center gap-1 transition-all group'>
      <div>
        <Image
          src="/logo.svg"
          layout="responsive"
          width={64}
          height={64}
          alt="Wooriya logo"
          className="sm:w-26 sm:h-26 md:w-60 md:h-60 lg:w-64 lg:h-64 xl:w-64 xl:h-64"
<<<<<<< HEAD
          loading="lazy"
=======
          priority
>>>>>>> 7d82501811e580c5904fa2b6ad73458001148f5e
        />
      </div>
      <div>
        <Image
          src="/wooriya.svg"
          layout="responsive"
          width={319}
          height={80}
          alt="wooriya letters"
          className="sm:w-132 sm:h-33 md:w-319 md:h-80 lg:w-319 lg:h-80 xl:w-319 xl:h-80"
<<<<<<< HEAD
          loading="lazy"
=======
          priority
>>>>>>> 7d82501811e580c5904fa2b6ad73458001148f5e
        />
      </div>
    </div>
  );
};

export default Navbar;
