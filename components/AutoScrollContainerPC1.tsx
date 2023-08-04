// components/AutoScrollContainer.tsx
import { useEffect } from "react";
import { motion, useAnimation, AnimationControls } from "framer-motion";
import Foursquare from "./Foursquare";

const AutoScrollContainer: React.FC = ({ }) => {
  const controls = useAnimation();
  const scrollSpeed = 2000;
  const infinite: any = new Array(60).fill(1);

  useEffect(() => {
    const handleScroll = () => {
      controls.start((i) => ({
        y: -(i * scrollSpeed),
        transition: { repeat: Infinity, duration: infinite.length, ease: "linear" },
      }));
    };

    handleScroll();
  }, [controls, infinite.length, scrollSpeed]);


  return (
    <motion.div className='flex flex-col foursquare-card-gap'>
      {infinite.map(() => (
        <motion.div
          className="scroll-item"
          custom={1}
          animate={controls as AnimationControls}
        >
          <div className='flex flex-col foursquare-card-gap'>
            <div className=''>
              <Foursquare
                FoursquareName='의료'
                FoursquareImage='/Doctor.webp'
              />
            </div>
            <div className=''>
              <Foursquare
                FoursquareName='행사'
                FoursquareImage='/Festival.webp'
              />
            </div>

            <div className=' '>
              <Foursquare
                FoursquareName='코칭'
                FoursquareImage='/Coaching.webp'
              />
            </div>
          </div>
        </motion.div>
      ))
      }
    </motion.div >
  );
};

export default AutoScrollContainer;
