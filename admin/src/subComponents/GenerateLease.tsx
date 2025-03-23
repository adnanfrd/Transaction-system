import Link from "next/link";

const GenerateLease = () => {
  return (
    <div className="min-h-screen bg-white flex flex-col items-center p-10">
      <div className="w-full max-w-5xl mb-6 flex justify-between items-center">
        <Link
          href="/"
          className="flex items-center text-gray-600 border rounded-full px-5 py-3 text-base hover:bg-gray-100"
        >
          ⬅ Back to Home
        </Link>
      </div>

      <h1 className="text-2xl font-bold text-center mb-6">
        Terry Meez <span className="text-gray-500 text-lg">— August 21, 2023</span>
      </h1>

      <div className="bg-[#FCF8E3] p-10 rounded-2xl shadow-xl border border-gray-400 max-w-5xl w-full">
        <h2 className="text-2xl font-bold mb-4">Lease Agreement</h2>
        <p className="text-gray-800 text-lg mb-6">
          This Lease Agreement is made on <strong>August 21, 2023</strong>, between <strong>Terry
          Meez</strong> (Landlord) and the Tenant. This Agreement outlines the terms
          and conditions for renting the property.
        </p>

        <ul className="list-decimal list-inside text-gray-800 text-lg mb-6 space-y-2">
          <li>The lease term begins on <strong>September 1, 2023</strong>, and ends on <strong>August 31, 2024</strong>.</li>
          <li>The monthly rent is <strong>$1,500</strong>, payable on the <strong>1st of each month</strong>.</li>
          <li>A security deposit of <strong>$1,500</strong> is required before moving in.</li>
          <li>Utilities (electricity, water, internet) will be the responsibility of the Tenant.</li>
        </ul>

        <p className="text-gray-800 text-lg mb-6">
          The Tenant agrees to maintain the property in good condition and abide
          by community rules. Subletting is not permitted without the
          Landlord&apos;s written consent.
        </p>

        <blockquote className="border-l-4 border-gray-600 pl-5 italic text-gray-800 text-lg mb-6">
          "The Tenant shall ensure timely rent payments and comply with all
          property regulations."
        </blockquote>

        <p className="text-gray-800 text-lg">
          By signing this agreement, both parties acknowledge their
          understanding of the terms stated.
        </p>
      </div>

      <button className="mt-8 px-8 py-4 text-lg bg-blue-500 text-white rounded-full shadow-lg hover:bg-blue-600 transition">
        🖨 Print
      </button>
    </div>
  );
};

export default GenerateLease;
