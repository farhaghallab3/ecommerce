
import { useState } from 'react';
import { toast } from 'react-toastify'; // For user feedback
import { Button } from '../../atoms/Button/Button';
import { Input } from '../../atoms/Input/Input';

const NewsletterForm: React.FC = () => {
  const [email, setEmail] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !/\S+@\S+\.\S+/.test(email)) {
      toast.error("Please enter a valid email address.");
      return;
    }
    // Simulate API call for newsletter subscription
    console.log("Subscribing email:", email);
    toast.success("Successfully subscribed to newsletter!");
    setEmail(''); // Clear input
    // In a real app, you'd send this email to your backend API
  };

  return (
    <form onSubmit={handleSubmit} className="flex space-x-2 w-full max-w-sm">
      <Input
        type="email"
        placeholder="Your email address"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="flex-1 rounded-md px-4 py-2 border border-gray-300 focus:ring-emerald-500"
      />
      <Button text="Subscribe" variant="primary" className="rounded-md px-6 py-2" />
    </form>
  );
};

export default NewsletterForm;