import { FormEvent } from 'react';

const ACCESS_KEY: string = import.meta.env.VITE_ACCESS_KEY;

export const onSubmit = async (
  event: FormEvent<HTMLFormElement>,
  setResult: (result: string) => void,
) => {
  event.preventDefault();
  setResult('Sending....');

  const clearMessage = () => {
    setTimeout(() => {
      setResult('');
    }, 5000);
  };
  const formElement = event.currentTarget;
  const formData = new FormData(formElement);

  formData.append('access_key', ACCESS_KEY);

  try {
    const response = await fetch('https://api.web3forms.com/submit', {
      method: 'POST',
      body: formData,
    });

    const data = await response.json();

    if (data.success) {
      setResult('Form Submitted Successfully');
      formElement.reset();
      clearMessage();
    } else {
      console.log('Error', data);
      setResult(data.message);
      clearMessage();
    }
  } catch (error) {
    console.error('Fetch error:', error);
    setResult('An error occurred. Please try again.');
    clearMessage();
  }
};
