"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

export default function Home() {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);

  const handleGetStarted = () => {
    setIsLoading(true);
    router.push("/register");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-600 to-blue-800 flex items-center justify-center p-4">
      <div className="max-w-md w-full bg-white rounded-lg shadow-xl p-8 text-center">
        <h1 className="text-3xl font-bold text-gray-900 mb-4">Edmass</h1>
        <p className="text-gray-600 mb-2 text-lg font-semibold">
          School Management System
        </p>
        <p className="text-gray-500 mb-8">
          Manage your school operations efficiently
        </p>

        <div className="space-y-4">
          <button
            onClick={handleGetStarted}
            disabled={isLoading}
            className="w-full bg-blue-600 hover:bg-blue-700 disabled:bg-gray-400 text-white font-semibold py-3 px-4 rounded-lg transition duration-200"
          >
            {isLoading ? "Loading..." : "Get Started"}
          </button>
          <button
            onClick={() => router.push("/dashboard")}
            className="w-full bg-gray-200 hover:bg-gray-300 text-gray-800 font-semibold py-3 px-4 rounded-lg transition duration-200"
          >
            Go to Dashboard
          </button>
        </div>
      </div>
    </div>
  );
}
