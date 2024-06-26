const getIpAddress = async (): Promise<string> => {
  try {
    const response = await fetch('https://api64.ipify.org?format=json');
    const data = await response.json();
    return data.ip;
  } catch (error) {
    console.error('Error fetching IP address:', error);
    return 'unknown';
  }
};

interface ClickEvent {
  buttonId: string;
  buttonName: string;
  timestamp: string;
  ipAddress: string;
  sourceUrl: string; // Add sourceUrl to the interface
}

const buttonClickAnalytics = async (buttonId: string, buttonName: string): Promise<void> => {
  const ipAddress = await getIpAddress();
  const event: ClickEvent = {
    buttonId,
    buttonName,
    timestamp: new Date().toISOString(),
    ipAddress,
    sourceUrl: window.location.origin, // Get the current page URL
  };
  console.log(event);

  const urls = [
            'http://localhost:8000/api/logClickEvent',
            'http://localhost:8001/api/logClickEvent',
        ];
  for (const url of urls) {
    try {
      await fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(event),
      });
    } catch (error) {
      console.error('Error sending click event to backend:', error);
    }
  }
};

export { buttonClickAnalytics };
