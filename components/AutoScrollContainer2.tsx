// components/AutoScrollContainer.tsx
import { useEffect } from "react";
import { motion, useAnimation, AnimationControls } from "framer-motion";
import Foursquare from "./Foursquare";

const AutoScrollContainer: React.FC = ({ }) => {
  const controls = useAnimation();
  const scrollSpeed = 2200;
  const infinite: any = new Array(60).fill(1);

  useEffect(() => {
    const handleScroll = () => {
      controls.start((i) => ({
        x: -(i * scrollSpeed),
        transition: { repeat: Infinity, duration: infinite.length, ease: "linear" },
      }));
    };

    handleScroll();
  }, [controls, infinite.length, scrollSpeed]);


  return (
    <motion.div className='flex flex-row justify-center gap-3'>
      {infinite.map(() => (
        <motion.div
          className="scroll-item"
          custom={1}
          animate={controls as AnimationControls}
        >
          <div className='flex flex-row justify-center gap-3'>
            <div>
              <Foursquare
                    FoursquareName='경연'
                    FoursquareImage='/Lecture.webp'
              />
            </div>
            <div>
              <Foursquare
                    FoursquareName= '공간 대여'
                    FoursquareImage='/SpaceRental.webp'
              />
            </div>
            <div>
              <Foursquare
                    FoursquareName='데일리 체험'
                    FoursquareImage='/Experience.webp'
              />
            </div>
          </div> 
        </motion.div>
      ))}
    </motion.div>
  );
};

export default AutoScrollContainer;
