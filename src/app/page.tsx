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
      
      <div className="relative container mx-auto px-4 py-12 flex flex-col items-center text-center gap-16">
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

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto w-full"
        >
          {[
            {
              title: "Pure Connections",
              description: "Find your tribe. Build real connections. No filters needed. 🖤"
            },
            {
              title: "Safe & Discreet",
              description: "Your vibe, your rules. Privacy is our promise. 🤫"
            },
            {
              title: "Vibe Together",
              description: "Because good times are better shared. Always. ✨"
            }
          ].map((feature, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.02 }}
              className="p-8 rounded-xl bg-zinc-900/50 backdrop-blur-sm border border-zinc-800 hover:border-zinc-700 transition-colors"
            >
              <h3 className="text-xl font-semibold mb-3 text-zinc-200">{feature.title}</h3>
              <p className="text-zinc-400">{feature.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </main>
  );
}
