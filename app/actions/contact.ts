'use server'

export async function submitContactForm(prevState: any, formData: FormData) {
  try {
    const accessKey = process.env.WEB3FORMS_ACCESS_KEY;
    
    // Fallback simulation mode if you haven't added the API key yet
    if (!accessKey || accessKey === '') {
      console.warn('WEB3FORMS_ACCESS_KEY is not set. Simulating form submission.');
      await new Promise(resolve => setTimeout(resolve, 1200));
      return { type: 'success', message: 'Mock email sent! (Add Web3Forms API Key to send real ones)' };
    }

    const object = Object.fromEntries(formData);
    object.access_key = accessKey;
    const json = JSON.stringify(object);

    const response = await fetch('https://api.web3forms.com/submit', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64)'
      },
      body: json
    });

    const text = await response.text();
    console.log('Web3Forms Raw API Response:', text.substring(0, 200) + '...'); // Log the raw response for debugging

    let data;
    try {
      data = JSON.parse(text);
    } catch (parseError) {
      console.error('Failed to parse JSON. Raw response was not valid JSON.');
      return { type: 'error', message: 'API returned an invalid response. Please check server logs.' };
    }

    if (data.success) {
      return { type: 'success', message: 'Message sent successfully! I will get back to you soon.' };
    } else {
      return { type: 'error', message: data.message || 'Something went wrong.' };
    }
  } catch (error) {
    console.error('Error submitting form:', error);
    return { type: 'error', message: 'Failed to send message. Please try again later.' };
  }
}
