'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import toast from 'react-hot-toast';
import { addToWaitlist, getRandomJoin } from '@/app/actions';

export function WaitlistForm() {
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Function to show random join notification
  const showRandomJoinNotification = async () => {
    try {
      const email = await getRandomJoin();
      const maskedEmail = email.replace(/(.{2})(.*)(@gmail.com)/, '$1***$3');
      toast(
        <div className="flex items-center gap-3 px-4 py-1">
          <div className="relative">
            <div className="h-2.5 w-2.5 bg-green-500 rounded-full animate-pulse" />
            <div className="absolute -inset-1 bg-green-500/30 rounded-full animate-ping" />
          </div>
          <div className="flex flex-col">
            <span className="font-medium text-white">
              {maskedEmail}
            </span>
            <span className="text-sm text-zinc-300">
              joined the waitlist
            </span>
          </div>
        </div>,
        {
          duration: 3000,
          position: 'top-right',
          style: {
            background: 'rgba(0, 0, 0, 0.9)',
            color: '#fff',
            borderRadius: '12px',
            padding: '12px',
            border: '1px solid rgba(255, 255, 255, 0.1)',
            boxShadow: '0 4px 12px rgba(0, 0, 0, 0.3), 0 0 0 1px rgba(255, 255, 255, 0.1)',
            backdropFilter: 'blur(8px)',
          },
          className: 'transform transition-all duration-300 ease-out hover:scale-102',
        }
      );
    } catch (error) {
      console.error('Error showing notification:', error);
    }
  };

  // Set up periodic notifications
  useEffect(() => {
    // Show first notification after 5 seconds
    const initialTimeout = setTimeout(() => {
      showRandomJoinNotification();
    }, 5000);

    // Then show notifications every 30 seconds
    const interval = setInterval(showRandomJoinNotification, 30000);

    return () => {
      clearTimeout(initialTimeout);
      clearInterval(interval);
    };
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const result = await addToWaitlist(email);
      if (result.success) {
        toast(
          <div className="flex items-center gap-3 p-1">
            <div className="text-2xl">🎉</div>
            <div className="flex flex-col">
              <span className="font-medium text-white">
                Welcome to the vibe!
              </span>
              <span className="text-sm text-zinc-300">
                You&apos;re on the waitlist
              </span>
            </div>
          </div>,
          {
            duration: 5000,
            position: 'top-center',
            style: {
              background: 'rgba(0, 0, 0, 0.9)',
              color: '#fff',
              borderRadius: '12px',
              padding: '12px',
              border: '1px solid rgba(255, 255, 255, 0.1)',
              boxShadow: '0 4px 12px rgba(0, 0, 0, 0.3), 0 0 0 1px rgba(255, 255, 255, 0.1)',
              backdropFilter: 'blur(8px)',
            },
          }
        );
        setEmail('');
      } else if (result.error === 'already_joined') {
        toast(
          <div className="flex items-center gap-3 p-1">
            <div className="text-2xl">✨</div>
            <div className="flex flex-col">
              <span className="font-medium text-white">
                You&apos;re already on the waitlist!
              </span>
              <span className="text-sm text-zinc-300">
                We&apos;ll notify you when we launch
              </span>
            </div>
          </div>,
          {
            duration: 5000,
            style: {
              background: 'rgba(0, 0, 0, 0.9)',
              color: '#fff',
              borderRadius: '12px',
              padding: '12px',
              border: '1px solid rgba(255, 255, 255, 0.1)',
              boxShadow: '0 4px 12px rgba(0, 0, 0, 0.3), 0 0 0 1px rgba(255, 255, 255, 0.1)',
              backdropFilter: 'blur(8px)',
            },
          }
        );
      } else {
        toast.error('Oops! Something went wrong. Please try again later.', {
          duration: 4000,
          style: {
            background: 'rgba(0, 0, 0, 0.9)',
            color: '#fff',
            borderRadius: '12px',
            padding: '12px',
            border: '1px solid rgba(255, 255, 255, 0.1)',
            boxShadow: '0 4px 12px rgba(0, 0, 0, 0.3), 0 0 0 1px rgba(255, 255, 255, 0.1)',
            backdropFilter: 'blur(8px)',
          },
        });
      }
    } catch {
      toast.error('Unable to join waitlist. Please check your connection and try again.', {
        duration: 4000,
        style: {
          background: 'rgba(0, 0, 0, 0.9)',
          color: '#fff',
          borderRadius: '12px',
          padding: '12px',
          border: '1px solid rgba(255, 255, 255, 0.1)',
          boxShadow: '0 4px 12px rgba(0, 0, 0, 0.3), 0 0 0 1px rgba(255, 255, 255, 0.1)',
          backdropFilter: 'blur(8px)',
        },
      });
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
        disabled={isSubmitting}
        className="flex-1 px-4 py-3 rounded-lg bg-zinc-900 border border-zinc-800 text-white placeholder:text-zinc-500 
                 focus:outline-none focus:ring-2 focus:ring-zinc-700 focus:border-transparent transition-all
                 disabled:opacity-50 disabled:cursor-not-allowed"
      />
      <motion.button
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        type="submit"
        disabled={isSubmitting}
        className="px-8 py-3 rounded-lg bg-white text-black font-medium hover:bg-zinc-200 
                 disabled:opacity-50 disabled:hover:bg-white transition-colors disabled:cursor-not-allowed"
      >
        {isSubmitting ? 'Joining...' : 'Join Waitlist'}
      </motion.button>
    </form>
  );
} 