'use client';

export default function ThankYou() {
  return (
    <div className="min-h-screen bg-[#5d6444] flex items-center justify-center px-4">
      <div className="bg-white p-8 rounded-lg shadow-md max-w-lg w-full text-center">
        <h1 className="text-3xl font-serif text-[#835c3c] font-bold mb-4">Thank You!</h1>
        <p className="text-gray-700 text-lg">
          We have received your RSVP. We cannot wait to celebrate with you!
        </p>
      </div>
    </div>
  );
}