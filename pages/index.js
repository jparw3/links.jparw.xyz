import Layout from "../components/Layout";
import Title from "../components/Title";
import Username from "../components/Username";
import Bio from "../components/Bio";
import SocialLinks from "../components/SocialLinks";
import Image from "next/image";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <>
      <Layout>
        <div className="rounded-full hover:shadow-lg overflow-hidden w-[164px] h-[164px]">
          <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 1.2 }}>
            <Image src="/me.jpg" width={164} height={164} />
          </motion.div>
        </div>
        <Title>Jack Willars</Title>
        <Username username="Jparw3" />
        <Bio />
        <SocialLinks />
      </Layout>
    </>
  );
}
