'use client';

import { WaitlistForm } from '@/components/WaitlistForm';
import { motion } from 'framer-motion';
import { Toaster } from 'react-hot-toast';
import { SparklesIcon } from '@heroicons/react/24/outline';

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white flex items-center justify-center">
      <Toaster position="top-center" />
      
      {/* Background gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-zinc-900/50 via-black to-black pointer-events-none" />
      
      <div className="relative w-full container mx-auto px-4 sm:px-6 lg:px-8 py-12 flex flex-col items-center text-center gap-8 sm:gap-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-6 sm:space-y-8 w-full max-w-4xl mx-auto"
        >
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-3">
            <SparklesIcon className="w-12 h-12 sm:w-10 sm:h-10 lg:w-12 lg:h-12 text-zinc-400" />
            <h1 className="text-5xl sm:text-5xl lg:text-7xl font-bold tracking-tight bg-gradient-to-r from-white via-zinc-300 to-zinc-500 text-transparent bg-clip-text">
              Vibecum
            </h1>
          </div>
          
          <div className="space-y-3 sm:space-y-4 px-2">
            <p className="text-xl sm:text-2xl lg:text-3xl text-zinc-200 font-medium leading-relaxed">
              <span className="block sm:inline">Where the vibes are strong... </span>
              <span className="block sm:inline">and the climax 💦 is community.</span>
            </p>
            
            <p className="text-base sm:text-lg lg:text-xl text-zinc-400 font-medium tracking-wide">
              Make friends. Laugh hard. Vibe harder.
            </p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.3, duration: 0.5 }}
          className="w-full max-w-[90%] sm:max-w-md px-2 sm:px-0"
        >
          <WaitlistForm />
        </motion.div>
      </div>
    </main>
  );
}
