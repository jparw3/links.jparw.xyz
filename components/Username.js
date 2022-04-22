import { motion } from "framer-motion";
import toast from "react-hot-toast";
import copy from "copy-to-clipboard";

const Username = ({ username }) => {
  const handleClick = () => {
    copy(username);
    toast.success("Username copied to clipboard!", {
      icon: "✅",
      style: {
        borderRadius: "10px",
        background: "#111827",
        color: "#fff",
        animation: "rainbow-border 2s infinite",
        transition: "all 500ms",
      },
    });
  };

  return (
    <motion.h3
      onClick={handleClick}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      className="text-white font-light text-gray-400 text-lg cursor-pointer text-rnbw"
    >
      @{username}
    </motion.h3>
  );
};

export default Username;
