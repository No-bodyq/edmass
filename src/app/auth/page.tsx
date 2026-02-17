"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import Image from "next/image";

export default function RegisterPage() {
  const router = useRouter();
  const [mode, setMode] = useState<"signin" | "register">("register");
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    confirmPassword: "",
    schoolName: "",
    cacNumber: "",
    schoolType: "",
    schoolAddress: "",
  });
  const [errors, setErrors] = useState<string[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>,
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSignIn = (e: React.FormEvent) => {
    e.preventDefault();
    const newErrors: string[] = [];

    if (!formData.email) newErrors.push("Email is required");
    if (!formData.password) newErrors.push("Password is required");

    setErrors(newErrors);

    if (newErrors.length === 0) {
      setIsLoading(true);
      setTimeout(() => {
        router.push("/dashboard");
      }, 1500);
    }
  };

  const handleRegister = (e: React.FormEvent) => {
    e.preventDefault();
    const newErrors: string[] = [];

    if (!formData.schoolName) newErrors.push("School name is required");
    if (!formData.cacNumber)
      newErrors.push("CAC registration number is required");
    if (!formData.schoolAddress) newErrors.push("School address is required");

    setErrors(newErrors);

    if (newErrors.length === 0) {
      setIsLoading(true);
      setTimeout(() => {
        router.push("/dashboard");
      }, 1500);
    }
  };

  return (
    <div className="min-h-screen bg-white flex">
      <div className="hidden lg:flex lg:w-1/2 bg-gray-900 relative">
        <Image
          src={
            mode === "signin"
              ? "/images/auth/signin-image.svg"
              : "/images/auth/signup-image.svg"
          }
          alt="Edmass"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/30" />
        <button
          onClick={() => router.back()}
          className="absolute top-6 left-6 flex items-center gap-2 text-white hover:opacity-80 transition z-10"
        >
          <svg
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M19 12H5M5 12L12 19M5 12L12 5"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          <span className="text-sm font-medium">Back</span>
        </button>
      </div>

      <div className="w-full lg:w-1/2 flex flex-col">
        <div className="flex-1 flex items-center justify-center px-6 py-12">
          <div className="w-full max-w-md">
            {mode === "signin" ? (
              <>
                <h1 className="text-3xl font-bold text-gray-900 mb-10">
                  Sign in
                </h1>

                {errors.length > 0 && (
                  <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg">
                    <ul className="text-red-700 text-sm space-y-1">
                      {errors.map((error, idx) => (
                        <li key={idx}>• {error}</li>
                      ))}
                    </ul>
                  </div>
                )}

                <form onSubmit={handleSignIn} className="space-y-4">
                  <div className="flex flex-col justify-center items-start gap-2">
                    <label className="block text-sm font-medium text-gray-700">
                      Email
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full h-12 px-6 border-2 border-[#DFE1E6] rounded bg-[#FAFBFC] text-[#656565]"
                      placeholder="you@example.com"
                    />
                  </div>

                  <div className="flex flex-col justify-center items-start gap-2">
                    <label className="block text-sm font-medium text-gray-700">
                      Password
                    </label>
                    <input
                      type="password"
                      name="password"
                      value={formData.password}
                      onChange={handleChange}
                      className="w-full h-12 px-6 border-2 border-[#DFE1E6] rounded bg-[#FAFBFC] text-[#656565]"
                      placeholder="••••••••"
                    />
                  </div>

                  <div className="flex justify-end gap-3 pt-4">
                    <button
                      type="button"
                      onClick={() => router.back()}
                      className="px-4 py-2 border-2 border-[#403294] rounded-md text-[#403294] font-medium transition"
                    >
                      Cancel
                    </button>
                    <button
                      type="submit"
                      disabled={isLoading}
                      className="px-4 py-2 bg-[#403294] hover:bg-blue-800 disabled:bg-gray-400 text-white font-semibold transition rounded"
                    >
                      {isLoading ? "Signing in..." : "Sign in"}
                    </button>
                  </div>
                </form>
              </>
            ) : (
              <>
                <h1 className="text-3xl font-bold text-gray-900 mb-10">
                  Create Your School
                </h1>

                {errors.length > 0 && (
                  <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg">
                    <ul className="text-red-700 text-sm space-y-1">
                      {errors.map((error, idx) => (
                        <li key={idx}>• {error}</li>
                      ))}
                    </ul>
                  </div>
                )}

                <form onSubmit={handleRegister} className="space-y-6">
                  <div className="flex flex-col justify-center items-start gap-2">
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      School Name
                    </label>
                    <input
                      type="text"
                      name="schoolName"
                      value={formData.schoolName}
                      onChange={handleChange}
                      className="w-full h-12 px-4 border-2 border-[#DFE1E6] rounded bg-[#FAFBFC] text-[#656565]"
                      placeholder="Kings College"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      CAC Registration Number
                    </label>
                    <div className="relative">
                      <select
                        name="cacNumber"
                        value={formData.cacNumber}
                        onChange={handleChange}
                        className="w-full px-4 py-3 bg-[#FAFBFC] border-2 border-[#DFE1E6] rounded text-[#656565] appearance-none pr-12 cursor-pointer"
                      >
                        <option value="">Select CAC Number</option>
                        <option value="RC1456788097">RC1456788097</option>
                        <option value="RC1234567890">RC1234567890</option>
                        <option value="RC9876543210">RC9876543210</option>
                      </select>
                      <div className="absolute right-4 top-1/2 transform -translate-y-1/2 pointer-events-none">
                        <svg
                          width="9"
                          height="6"
                          viewBox="0 0 9 6"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M4.243 5.657L0 1.414L1.415 0L4.243 2.829L7.071 0L8.486 1.414L4.243 5.657Z"
                            fill="#505F79"
                          />
                        </svg>
                      </div>
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      School Type
                    </label>
                    <input
                      type="text"
                      name="schoolType"
                      value={formData.schoolType}
                      onChange={handleChange}
                      className="w-full h-12 px-4 border-2 border-[#DFE1E6] rounded bg-[#FAFBFC] text-[#656565]"
                      placeholder="Enter school type (e.g., Primary, Secondary, Tertiary)"
                    />
                  </div>

                  <div className="flex flex-col justify-center items-start gap-2">
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      School Address
                    </label>
                    <input
                      type="text"
                      name="schoolAddress"
                      value={formData.schoolAddress}
                      onChange={handleChange}
                      className="w-full h-12 px-4 border-2 border-[#DFE1E6] rounded bg-[#FAFBFC] text-[#656565]"
                      placeholder="Kaduna, Nigeria"
                    />
                  </div>

                  <div className="flex justify-end gap-3 pt-4">
                    <button
                      type="button"
                      onClick={() => router.back()}
                      className="px-4 py-2 border-2 border-[#403294] rounded-md text-[#403294] font-medium transition"
                    >
                      Cancel
                    </button>
                    <button
                      type="submit"
                      disabled={isLoading}
                      className="px-4 py-2 bg-[#403294] hover:bg-blue-800 disabled:bg-gray-400 text-white font-semibold transition rounded"
                    >
                      {isLoading ? "Creating..." : "Create"}
                    </button>
                  </div>
                </form>
              </>
            )}
          </div>
        </div>
        {mode === "signin" && (
          <div className="px-6 py-6 flex items-center justify-center">
            <p className="text-center text-sm text-gray-600">
              Don&apos;t have an account?{" "}
              <button
                onClick={() => {
                  setMode("register");
                  setErrors([]);
                }}
                className="text-[#403294] hover:text-blue-800 font-semibold"
              >
                Sign up here
              </button>
            </p>
          </div>
        )}
        {mode === "register" && (
          <div className="px-6 py-6 flex items-center justify-center">
            <p className="text-center text-sm text-gray-600">
              Already have an account?{" "}
              <button
                onClick={() => {
                  setMode("signin");
                  setErrors([]);
                }}
                className="text-[#403294] hover:text-blue-800 font-semibold"
              >
                Sign in here
              </button>
            </p>
          </div>
        )}{" "}
      </div>
    </div>
  );
}
