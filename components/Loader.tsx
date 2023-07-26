'use client';

import { BeatLoader, PacmanLoader, PuffLoader } from "react-spinners";

const Loader = () => {
  return ( 
    <div
    className="
      h-[90vh]
      flex 
      flex-col 
      justify-center 
      items-center 
    "
    >
      <PacmanLoader
        size={30}
        color="blue"
      />
    </div>
   );
}
 
export default Loader;