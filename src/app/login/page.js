"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import logo from "../../assets/logo.png";

export default function Login() {
  const [phoneNumber, setPhoneNumber] = useState("");
  const [showOTP, setShowOTP] = useState(false);
  const [otp, setOTP] = useState("");
  const router = useRouter();

  const handlePhoneSubmit = (e) => {
    e.preventDefault();
    setShowOTP(true);
  };

  const handleOTPSubmit = (e) => {
    e.preventDefault();
    // Here you would verify the OTP
    router.push("/dashboard");
  };

  return (
    <div className="min-h-screen bg-black flex flex-col items-center justify-center px-4">
      <div className="max-w-md w-full space-y-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-white mb-2">Sign Up</h2>
          <p className="text-gray-400 text-sm">
            Link your mobile number for regular investment updates.
          </p>
        </div>

        {!showOTP ? (
          <form onSubmit={handlePhoneSubmit} className="mt-8 space-y-6">
            <div>
              <div className="relative">
                <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400">
                  +91
                </span>
                <input
                  type="tel"
                  required
                  className="w-full bg-[#1a1a1a] text-white px-12 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                  placeholder="Enter Phone Number"
                  value={phoneNumber}
                  onChange={(e) => setPhoneNumber(e.target.value)}
                />
              </div>
            </div>

            <div className="text-xs text-gray-400 text-center">
              By continuing, you agree to the{' '}
              <a href="/terms" className="text-purple-500">
                Terms & Conditions
              </a>
            </div>

            <button
              type="submit"
              className="w-full bg-[#1a1a1a] text-white py-3 rounded-lg hover:bg-[#2a2a2a] transition-colors duration-200"
            >
              Continue To Verify
            </button>
          </form>
        ) : (
          <form onSubmit={handleOTPSubmit} className="mt-8 space-y-6">
            <div>
              <input
                type="text"
                required
                className="w-full bg-[#1a1a1a] text-white px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                placeholder="Enter OTP"
                value={otp}
                onChange={(e) => setOTP(e.target.value)}
              />
            </div>

            <button
              type="submit"
              className="w-full bg-[#1a1a1a] text-white py-3 rounded-lg hover:bg-[#2a2a2a] transition-colors duration-200"
            >
              Verify OTP
            </button>
          </form>
        )}
      </div>
    </div>
  );
} 