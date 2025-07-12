import Link from 'next/link';
import { motion } from 'framer-motion';

export default function Custom404() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="min-h-screen flex flex-col items-center justify-center bg-gray-950 text-white text-center px-6"
    >
      <h1 className="text-6xl font-bold text-cyan-500">404</h1>
      <p className="mt-4 text-lg text-gray-400">Oops! The page you're looking for doesn't exist.</p>
      <Link
        href="/"
        className="mt-6 px-6 py-3 bg-cyan-500 text-white rounded-full hover:bg-cyan-600 transition"
      >
        Go Back Home
      </Link>
    </motion.div>
  );
}
