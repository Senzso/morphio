import { NextResponse } from 'next/server';

interface ScreenName {
  [key: string]: string[];
}

interface TwitterAccount {
  screen_names: ScreenName;
}

interface MemoryLolResponse {
  accounts: TwitterAccount[];
}

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const username = searchParams.get('username');

  if (!username) {
    return NextResponse.json({ error: 'Username is required' }, { status: 400 });
  }

  try {
    const response = await fetch(`https://api.memory.lol/v1/tw/${username}`);
    
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data: MemoryLolResponse = await response.json();
    
    let formattedData = `Twitter Username History for @${username}:\n\n`;
    if (data.accounts && data.accounts.length > 0) {
      const account = data.accounts[0];
      const screenNames = account.screen_names;
      for (const [screenName, dates] of Object.entries(screenNames)) {
        if (Array.isArray(dates)) {
          formattedData += `@${screenName}: ${dates.join(', ')}\n`;
        } else {
          formattedData += `@${screenName}: No dates available\n`;
        }
      }
    } else {
      formattedData += 'No history found for this username.';
    }

    return NextResponse.json({ formattedData });
  } catch (error) {
    console.error('Error checking Twitter username:', error);
    return NextResponse.json({ error: 'Failed to fetch Twitter data' }, { status: 500 });
  }
}

