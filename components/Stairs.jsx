import { motion } from "framer-motion"

const totalSteps = 6;

const stairAnimation = {
    initial: {
        top: "0%",
    },
    animate: {
        top: "100%",
    },
    exit: {
        top: ["100%", "0%"]
    }
}

//calculate the reverse index dor staggred delay
const reverseIndex = (index) => {
    return totalSteps - index -1;
}

const Stairs = () => {
  return (
    <>
        {/* render 6 motion divs, each representing a step of the stairs
        
        Each div will have the same animation defined by the stairAnimation object.
        The delay for each div is calculated dinamically based an it's reserved index,
        creating a staggered effect with decreasing delay for each subsequent step.

        */}

        {[...Array(totalSteps)].map((_, index) => {
            return (
            <motion.div 
            key={index} 
            variants={stairAnimation} 
            initial="initial" 
            animate="animate" 
            exit="exit" 
            transition={{
                duration: 0.4,
                ease: "easeOut",
                delay: reverseIndex(index) * 0.1,
            }}
            className="h-full w-full bg-white relative"
            />
            );
        })}
    </>
  )
}

export default Stairs
