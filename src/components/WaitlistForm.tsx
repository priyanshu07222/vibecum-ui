'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import toast from 'react-hot-toast';
import { addToWaitlist } from '@/app/actions';

export function WaitlistForm() {
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const result = await addToWaitlist(email);
      if (result.success) {
        toast.success('Welcome to the vibe! 🎉');
        setEmail('');
      } else {
        toast.error('Oops! Something went wrong');
      }
    } catch (error) {
      toast.error('Failed to join waitlist');
    }

    setIsSubmitting(false);
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 w-full max-w-md">
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Enter your email"
        required
        className="flex-1 px-4 py-3 rounded-lg bg-zinc-900 border border-zinc-800 text-white placeholder:text-zinc-500 
                 focus:outline-none focus:ring-2 focus:ring-zinc-700 focus:border-transparent transition-all"
      />
      <motion.button
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        type="submit"
        disabled={isSubmitting}
        className="px-8 py-3 rounded-lg bg-white text-black font-medium hover:bg-zinc-200 
                 disabled:opacity-50 disabled:hover:bg-white transition-colors"
      >
        {isSubmitting ? 'Joining...' : 'Join Waitlist'}
      </motion.button>
    </form>
  );
} 