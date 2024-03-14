"use client";

const GlobalError = ({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) => {
  return (
    <div className="grid place-items-center h-[65svh]">
      <div className="bg-navy p-8 rounded-md shadow-md text-center mx-4">
        <h2 className="text-2xl font-bold text-red-600 mb-4">
          Something went wrong!
        </h2>
        <p className="text-red-500 mb-4">
          We´re experiencing technical difficulties, and our team is working
          hard to bring the site back up. This may take a while. Thank you for
          your patience.
        </p>
        <button
          onClick={() => reset()}
          className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        >
          Try again
        </button>
      </div>
    </div>
  );
};

export default GlobalError;
