"use client";
import { FaExclamationTriangle, FaRedo } from "react-icons/fa";

const GlobalError = ({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) => {
  return (
    <div className="min-h-screen bg-gray-950 flex items-center justify-center p-4">
      <div className="max-w-md w-full">
        <div className="bg-gray-900 rounded-xl p-8 shadow-2xl border border-gray-800">
          {/* Icon */}
          <div className="flex justify-center mb-6">
            <div className="w-20 h-20 bg-red-500/20 rounded-full flex items-center justify-center">
              <FaExclamationTriangle className="text-red-500 text-4xl" />
            </div>
          </div>

          {/* Title */}
          <h2 className="text-3xl font-bold text-white text-center mb-3">
            Oops! Something went wrong
          </h2>

          {/* Message */}
          <p className="text-gray-400 text-center mb-6 leading-relaxed">
            We&apos;re experiencing technical difficulties. Our team is working
            hard to resolve this issue. Thank you for your patience.
          </p>

          {/* Error Details (optional, for development) */}
          {process.env.NODE_ENV === "development" && error.message && (
            <div className="bg-gray-800 rounded-lg p-4 mb-6">
              <p className="text-xs text-gray-500 font-mono break-all">
                {error.message}
              </p>
            </div>
          )}

          {/* Action Button */}
          <button
            onClick={() => reset()}
            className="w-full bg-red-600 hover:bg-red-700 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-200 flex items-center justify-center gap-2 hover:scale-105"
          >
            <FaRedo className="text-sm" />
            Try Again
          </button>

          {/* Additional Help */}
          <p className="text-center text-sm text-gray-500 mt-6">
            If the problem persists,{" "}
            <a href="/" className="text-blue-400 hover:text-blue-300 underline">
              return to homepage
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default GlobalError;
