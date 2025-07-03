'use server'

import { google } from 'googleapis';
import { GoogleAuth } from 'google-auth-library';

export async function addToWaitlist(email: string) {
  try {
    // Initialize auth - when deployed, use environment variables
    const auth = new GoogleAuth({
      credentials: {
        client_email: process.env.GOOGLE_CLIENT_EMAIL,
        private_key: process.env.GOOGLE_PRIVATE_KEY?.replace(/\\n/g, '\n'),
      },
      scopes: ['https://www.googleapis.com/auth/spreadsheets'],
    });

    const sheets = google.sheets({ version: 'v4', auth });
    
    // Add row to sheet
    await sheets.spreadsheets.values.append({
      spreadsheetId: process.env.GOOGLE_SHEET_ID,
      range: 'A:A', // Assuming email addresses are in column A
      valueInputOption: 'USER_ENTERED',
      requestBody: {
        values: [[email, new Date().toISOString()]],
      },
    });

    return { success: true };
  } catch (error) {
    console.error('Error adding to waitlist:', error);
    return { success: false, error: 'Failed to add to waitlist' };
  }
} 