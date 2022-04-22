import Link from "next/link";
import data from "../constants/data";
import { motion } from "framer-motion";
import copy from "copy-to-clipboard";
import toast from "react-hot-toast";

const SocialLinks = ({ children, wallet, shortWallet }) => {
		const handleClick = () => {
		copy(data.wallet);
		toast.success(`${data.shortWallet} copied to clipboard`, {
			icon: "🌈",
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
		<div className="grid grid-cols-2 md:grid-cols-4 gap-4 content-start pt-3">
			{data.socials.map((social) => (
				<Link
					target="_blank"
					href={`https://${social.platform}.com/${data.username}`}
				>
					<motion.div
						whileHover={{ scale: 1.1 }}
						whileTap={{ scale: 0.95 }}
						className={`${social.platform} cursor-pointer flex justify-center items-center space-x-1 px-3 py-1 rounded-full capitalize md:text-base text-sm font-bold`}
					>
						<span>{social.platform}</span>
						<span>{social.emoji}</span>
					</motion.div>
				</Link>
			))}
			<motion.div
				onClick={handleClick}
				whileHover={{ scale: 1.1 }}
				whileTap={{ scale: 0.95 }}
				className={`rainbow cursor-pointer flex justify-center items-center space-x-1 px-3 py-1 rounded-full capitalize md:text-base text-sm font-bold`}
			>
				<span>Rainbow</span>
				<span>🌈</span>
			</motion.div>
		</div>
	);
};

export default SocialLinks;
