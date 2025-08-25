
// import React from 'react';

// const Loader: React.FC<{ text?: string }> = ({ text = "Generating..." }) => (
//   <div className="flex flex-col items-center justify-center space-y-2">
//     <svg
//       className="animate-spin h-8 w-8 text-primary"
//       xmlns="http://www.w3.org/2000/svg"
//       fill="none"
//       viewBox="0 0 24 24"
//     >
//       <circle
//         className="opacity-25"
//         cx="12"
//         cy="12"
//         r="10"
//         stroke="currentColor"
//         strokeWidth="4"
//       ></circle>
//       <path
//         className="opacity-75"
//         fill="currentColor"
//         d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
//       ></path>
//     </svg>
//     <p className="text-text-secondary">{text}</p>
//   </div>
// );

// export default Loader;
import React from 'react';

const Loader: React.FC<{ text?: string }> = ({ text = "Generating..." }) => (
  <div className="flex flex-col items-center justify-center space-y-6 p-12 bg-black/40 backdrop-blur-xl rounded-3xl border border-green-500/30 shadow-[0_20px_70px_-10px_rgba(34,197,94,0.3)] relative overflow-hidden">
    {/* Background decorative elements */}
    <div className="absolute inset-0 bg-gradient-to-br from-green-500/5 to-green-600/10 rounded-3xl"></div>
    <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-green-400/20 to-transparent rounded-full blur-2xl"></div>

    <div className="relative z-10 flex flex-col items-center space-y-6">
      {/* Enhanced spinner with glow effect */}
      <div className="relative">
        <div className="absolute inset-0 rounded-full bg-green-400/20 blur-xl animate-pulse"></div>
        <svg
          className="animate-spin h-16 w-16 text-green-400 relative z-10"
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
          ></circle>
          <path
            className="opacity-75"
            fill="currentColor"
            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
          ></path>
        </svg>
      </div>

      {/* Enhanced text with gradient */}
      <p className="text-xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-green-300 text-center">
        {text}
      </p>

      {/* Animated dots */}
      <div className="flex space-x-2">
        <div className="w-2 h-2 bg-green-400 rounded-full animate-bounce opacity-60" style={{ animationDelay: '0ms' }}></div>
        <div className="w-2 h-2 bg-green-500 rounded-full animate-bounce opacity-60" style={{ animationDelay: '150ms' }}></div>
        <div className="w-2 h-2 bg-green-400 rounded-full animate-bounce opacity-60" style={{ animationDelay: '300ms' }}></div>
      </div>
    </div>
  </div>
);

export default Loader;