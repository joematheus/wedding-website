'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation'
import Image from "next/image";

export default function Home() {
  const [attending, setAttending] = useState('Yes');
  const [isLoading, setIsLoading] = useState(false);

  const router = useRouter();

  return (
    <div className="h-screen flex items-center justify-center px-4 bg-cover bg-center bg-no-repeat" style={{ backgroundImage: `url('/assets/bg.jpg')` }}>
      <div className="absolute inset-0 z-0" style={{ backgroundColor: '#5d6444FF' }}></div>
      <div className="max-w-lg w-full bg-white p-8 rounded-lg shadow-md z-10" style={{ color: '#835c3c' }}>
        <Image
          src="/logo.png"
          alt="Wedding Logo"
          width={120}
          height={120}
          className="mx-auto mb-4"
        />
        <h1 className="text-3xl font-serif font-bold text-center mb-4">You are invited!</h1>
        <p className="text-center text-gray-600 mb-8">Please RSVP by filling out the form below.</p>

        <form
          onSubmit={(e) => {
            e.preventDefault();
            const form = e.target as HTMLFormElement;
            const data = new FormData(form);

            setIsLoading(true);

            fetch(form.action, {
              method: "POST",
              body: data,
              mode: "no-cors", // important for Google Apps Script
            }).then(() => {
              if (attending == "Yes") {
                router.push("/thankyou");
              } else {
                router.push("/not-attending");
              }
            });
          }}
          action="https://script.google.com/macros/s/AKfycbws1t3vgKXzBaJ54dIE12nUAGSwg4c_-tWC8DUrh3i8zyUNuMYaoVaIQgFN6aAkLFQ/exec"
          method="POST"
          className="space-y-4"
        >
          <div>
            <label className="block font-medium text-gray-700">Full Name*</label>
            <input
              type="text"
              name="name"
              required
              className="w-full mt-1 px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-[#835c3c] text-gray-700"
            />
          </div>

          <div>
            <label className="block font-medium text-gray-700">Will you attend?*</label>
            <select
              name="attending"
              value={attending}
              onChange={(e) => setAttending(e.target.value)}
              required
              className="w-full mt-1 px-4 py-2 border border-gray-300 rounded-md text-gray-700 shadow-sm focus:outline-none focus:ring-2 focus:ring-[#835c3c]"
            >
              <option value="Yes" className='text-gray-700'>Yes</option>
              <option value="No" className='text-gray-700'>No</option>
            </select>
          </div>

          <div>
            <label className="block font-medium text-gray-700">Message to the couple</label>
            <textarea
              name="message"
              className="w-full mt-1 px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-[#835c3c] text-gray-700"
            />
          </div>

          <button
            type="submit"
            className={`w-full flex justify-center items-center gap-2 bg-[#835c3c] hover:bg-[#835c3c] text-white py-2 px-4 rounded-md transition-colors ${
              isLoading ? "opacity-70 cursor-not-allowed" : ""
            }`}
            style={{ backgroundColor: '#835c3c' }}
          >
            {isLoading && (
              <svg
                className="animate-spin h-5 w-5 text-white"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
              >
                <circle
                  className="opacity-25"
                  cx="12"
                  cy="12"
                  r="10"
                  stroke="currentColor"
                  strokeWidth="4"
                />
                <path
                  className="opacity-75"
                  fill="currentColor"
                  d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
                />
              </svg>
            )}
            {isLoading ? "Submitting..." : "Submit RSVP"}
          </button>
        </form>
      </div>
    </div>
  );
}
