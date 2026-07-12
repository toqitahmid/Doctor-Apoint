import React from "react";
import Link from "next/link";

export default function NotFound() {
  return (
    <main className="min-h-screen bg-slate-50 flex items-center justify-center px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full text-center">
        {/* Animated Stethoscope / Medical Pulse Wrapper */}
        <div className="mx-auto w-24 h-24 bg-blue-50 rounded-2xl flex items-center justify-center text-blue-600 mb-8 shadow-sm border border-blue-100">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="48"
            height="48"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
          </svg>
        </div>

        {/* Error Typography */}
        <h1 className="text-9xl font-black text-blue-600/20 tracking-tight leading-none select-none">
          404
        </h1>
        <h2 className="mt-4 text-2xl font-extrabold text-slate-900 tracking-tight sm:text-3xl">
          Page Not Found
        </h2>
        <p className="mt-3 text-base text-slate-500 max-w-sm mx-auto leading-relaxed">
          It looks like this appointment link or page does not exist, or perhaps
          there was a typo in the web address.
        </p>

        {/* Action Buttons */}
        <div className="mt-8 flex flex-col sm:flex-row gap-3 justify-center">
          <Link
            href="/"
            className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium text-sm rounded-xl shadow-sm transition-colors duration-150 text-center"
          >
            Go Back Home
          </Link>
        </div>

        {/* Quick Help Line */}
        <p className="mt-8 text-xs text-slate-400">
          Need immediate support? Contact our desk at{" "}
          <span className="font-semibold text-slate-500">
            support@docapoint.com
          </span>
        </p>
      </div>
    </main>
  );
}
