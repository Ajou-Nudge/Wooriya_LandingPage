export const staggerContainer = (
    staggerChildren: number,
    delayChildren: number
  ): {
    hidden: {};
    show: { transition: { staggerChildren: number; delayChildren: number } };
  } => ({
    hidden: {},
    show: {
      transition: {
        staggerChildren,
        delayChildren,
      },
    },
  });
  
  export const fadeIn = (
    direction: 'left' | 'right' | 'up' | 'down',
    type: string,
    delay: number,
    duration: number
  ): {
    hidden: { x: number | string; y: number | string; opacity: number };
    show: {
      x: number;
      y: number;
      opacity: number;
      transition: { type: string; delay: number; duration: number; ease: string };
    };
  } => ({
    hidden: {
      x: direction === 'left' ? 100 : direction === 'right' ? -100 : 0,
      y: direction === 'up' ? 100 : direction === 'down' ? -100 : 0,
      opacity: 0,
    },
    show: {
      x: 0,
      y: 0,
      opacity: 1,
      transition: {
        type,
        delay,
        duration,
        ease: 'easeOut',
      },
    },
  });

  export interface CardVariantsProps {
    index: number;
  }
  
  export const cardVariants = {
    hidden: ({ index }: CardVariantsProps) => ({
      opacity: 1,
      x: index % 2 === 0 ? -50 : 50,
      y: index % 2 === 0 ? -50 : 50,
    }),
    show: {
      opacity: 1,
      x: 0,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 200,
        damping: 20,
      },
    },
  };
  