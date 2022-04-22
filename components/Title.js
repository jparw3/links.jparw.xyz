import Star from "./Star";
import { motion } from "framer-motion";

const Title = ({ children }) => {
  return (
    <div className="group relative">
      <h1 className="text-white cursor-pointer font-SDRounded font-bold text-4xl text-transparent bg-clip-text bg-gradient-to-r from-[#3C81F6] to-[#A656F7]">
        <span>{children}</span>
        <div className="opacity-0 group-hover:opacity-100 transition duration-200 motion-reduce:group-hover:hidden">
          <div className="position:absolute;left:25px;top:-10px;transform:scale(1)">
            <motion.div
              className="absolute left-[17px] -top-[5px] transform scale-100"
              animate={{
                scale: [0.6, 1, 0.6],
                rotate: [0, 45, 90],
              }}
              transition={{
                repeat: Infinity,
                duration: 0.5,
                ease: "linear",
              }}
            >
              <Star />
            </motion.div>
            <motion.div
              className="absolute left-[50px] top-[25px]"
              animate={{
                scale: [0.8, 1.2, 0.8],
                rotate: [0, 45, 90],
              }}
              transition={{
                repeat: Infinity,
                duration: 0.5,
                ease: "linear",
              }}
            >
              <Star />
            </motion.div>
            <motion.div
              className="absolute left-[95px] top-[2px] transform scale-110"
              animate={{
                scale: [0.6, 1, 0.6],
                rotate: [0, 45, 90],
              }}
              transition={{
                repeat: Infinity,
                duration: 0.5,
                ease: "linear",
              }}
            >
              <Star />
            </motion.div>
            <motion.div
              className="absolute -right-[5px] top-[10px] transform scale-110"
              animate={{
                scale: [0.6, 1, 0.6],
                rotate: [0, 45, 90],
              }}
              transition={{
                repeat: Infinity,
                duration: 0.5,
                ease: "linear",
              }}
            >
              <Star />
            </motion.div>
          </div>
        </div>
      </h1>
    </div>
  );
};

export default Title;
