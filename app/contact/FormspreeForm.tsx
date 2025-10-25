"use client"

import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import FormspreeThankYou from "./FormspreeThankYou";


// Make sure this endpoint matches your Formspree dashboard. If you have issues, check https://formspree.io/dashboard for errors or setup steps.
const FORMSPREE_ENDPOINT = "https://formspree.io/f/mqapreke";

export default function FormspreeForm() {
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError(null);
    const form = e.currentTarget;
    const formData = new FormData(form);

    // Honeypot check
    if (formData.get('website')) return;

    try {
      const response = await fetch(FORMSPREE_ENDPOINT, {
        method: 'POST',
        body: formData,
        headers: { 'Accept': 'application/json' },
      });
      if (response.ok) {
        setSubmitted(true);
        form.reset();
      } else {
        // Try to extract and show the error message from Formspree
        let errorMsg = 'Failed to send your message. Please try again later.';
        try {
          const data = await response.json();
          if (data && data.errors && data.errors.length > 0) {
            errorMsg = data.errors.map((e: any) => e.message).join(' ');
          } else if (data && data.message) {
            errorMsg = data.message;
          }
          // Log the full response for debugging
          console.error('Formspree error response:', data);
        } catch (jsonErr) {
          // If response is not JSON
          console.error('Failed to parse Formspree error response', jsonErr);
        }
        setError(errorMsg);
      }
    } catch (err) {
      console.error('Error submitting to Formspree:', err);
      console.error('Error submitting to Formspree:', err);
    setError('Failed to send your message. Please try again later.');
    }
  };

  return (
    <>
      {submitted ? (
        <FormspreeThankYou />
      ) : (
        <form
          className="space-y-6"
          action={FORMSPREE_ENDPOINT}
          method="POST"
          onSubmit={handleSubmit}
          autoComplete="off"
        >
          {/* Honeypot field for spam protection */}
          <input type="text" name="website" style={{ display: 'none' }} tabIndex={-1} autoComplete="off" />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                Your Name *
              </label>
              <Input
                id="name"
                name="name"
                required
                className="w-full border-gray-300 focus:border-gold-500 focus:ring-gold-500"
                placeholder="John Doe"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                Email Address *
              </label>
              <Input
                id="email"
                name="email"
                type="email"
                required
                className="w-full border-gray-300 focus:border-gold-500 focus:ring-gold-500"
                placeholder="john@example.com"
              />
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                Phone Number
              </label>
              <Input
                id="phone"
                name="phone"
                className="w-full border-gray-300 focus:border-gold-500 focus:ring-gold-500"
                placeholder="+91 98765 43210"
              />
            </div>
            <div>
              <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">
                Subject *
              </label>
              <Input
                id="subject"
                name="subject"
                required
                className="w-full border-gray-300 focus:border-gold-500 focus:ring-gold-500"
                placeholder="Project Inquiry"
              />
            </div>
          </div>
          <div>
            <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
              Your Message *
            </label>
            <Textarea
              id="message"
              name="message"
              required
              className="w-full border-gray-300 focus:border-gold-500 focus:ring-gold-500"
              placeholder="Tell us about your project..."
              rows={5}
            />
          </div>
          <Button
            type="submit"
            className="w-full bg-gold-600 hover:bg-gold-700 text-navy-900 font-semibold py-3 rounded-md shadow-lg hover:shadow-xl transition-all duration-300"
          >
            Send Message
          </Button>
          {error && (
            <div className="text-red-600 text-center mt-2">{error}</div>
          )}
        </form>
      )}
    </>
  );
}
