'use client';

export default function NotAttending() {
  return (
    <div className="min-h-screen bg-[#5d6444] flex items-center justify-center px-4">
      <div className="bg-white p-8 rounded-lg shadow-md max-w-lg w-full text-center">
        <h1 className="text-3xl font-serif text-[#835c3c] font-bold mb-4">We will miss you!</h1>
        <p className="text-gray-700 text-lg">
          Thank you for letting us know. We hope to see you soon in another celebration!
        </p>
      </div>
    </div>
  );
}