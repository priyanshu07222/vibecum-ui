'use server'

// Simple in-memory cache for duplicate email check
const emailCache = new Set<string>();

export async function addToWaitlist(email: string) {
  try {
    // Check if email already exists in cache
    if (emailCache.has(email)) {
      return { success: false, error: 'already_joined' };
    }

    const sheetUrl = process.env.SHEET_URL;
    
    if (!sheetUrl) {
      throw new Error('Sheet URL not configured');
    }

    const response = await fetch(sheetUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email,
        timestamp: new Date().toISOString(),
      }),
    });

    if (!response.ok) {
      throw new Error('Failed to submit to sheet');
    }

    // Add email to cache after successful submission
    emailCache.add(email);
    return { success: true, email };

  } catch (error) {
    console.error('Error adding to waitlist:', error);
    return { success: false, error: 'Failed to add to waitlist' };
  }
}

// Function to get recent joins (simulated for demo)
const recentJoins = [
  'sarah.smith@gmail.com',
  'john.doe@gmail.com',
  'alex.walker@gmail.com',
  'emma.wilson@gmail.com',
  'mike.brown@gmail.com',
  'lisa.taylor@gmail.com',
  'david.miller@gmail.com',
  'anna.jones@gmail.com',
  'chris.white@gmail.com',
  'olivia.green@gmail.com',
];

export async function getRandomJoin() {
  'use server'
  const randomIndex = Math.floor(Math.random() * recentJoins.length);
  return recentJoins[randomIndex];
} 