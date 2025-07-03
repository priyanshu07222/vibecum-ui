'use client';

import { WaitlistForm } from '@/components/WaitlistForm';
import { motion } from 'framer-motion';
import { Toaster } from 'react-hot-toast';
import { SparklesIcon } from '@heroicons/react/24/outline';

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white flex items-start justify-center">
      <Toaster position="top-center" />
      
      {/* Background gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-zinc-900/50 via-black to-black pointer-events-none" />
      
      <div className="relative container mx-auto px-4 mt-[20vh] flex flex-col items-center text-center gap-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-8 max-w-4xl mx-auto"
        >
          <div className="flex items-center justify-center gap-3 text-5xl md:text-7xl font-bold tracking-tight">
            <SparklesIcon className="w-12 h-12 text-zinc-400" />
            <h1 className="bg-gradient-to-r from-white via-zinc-300 to-zinc-500 text-transparent bg-clip-text">
              Vibecum
            </h1>
          </div>
          
          <div className="space-y-4">
            <p className="text-2xl md:text-3xl text-zinc-200 font-medium leading-relaxed">
              <span className="md:inline block">Where the vibes are strong... </span>
              <span className="md:inline block">and the climax is community.</span>
            </p>
            
            <p className="text-lg md:text-xl text-zinc-400 font-medium tracking-wide">
              Make friends. Laugh hard. Vibe harder.
            </p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.3, duration: 0.5 }}
          className="w-full flex justify-center"
        >
          <WaitlistForm />
        </motion.div>
      </div>
    </main>
  );
}
