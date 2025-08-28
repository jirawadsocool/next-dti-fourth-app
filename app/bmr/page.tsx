import React from 'react';

// This is the main component for the BMR calculator.
// It is styled with a dark theme using Tailwind CSS.
export default function App() {
  return (
    // Main container with a dark background.
    <div className="bg-slate-950 min-h-screen flex items-center justify-center p-4">

      {/* Card Container with dark gray background and rounded corners */}
      <div className="bg-slate-900 rounded-3xl shadow-2xl p-8 max-w-lg w-full flex flex-col items-center space-y-6">

        {/* Title Section */}
        <div className="text-center">
          <h1 className="text-4xl text-gray-200 font-bold">BMR Calculator</h1>
          <p className="text-xl text-gray-400 font-semibold mt-2">คำนวณอัตราการเผาผลาญพลังงาน (BMR)</p>
        </div>

        {/* BMR Icon/Placeholder - Replaced the image with a simple div to fit the theme */}
        <div className="w-48 h-48 bg-gray-800 rounded-full shadow-md flex items-center justify-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-24 w-24 text-gray-400"
            viewBox="0 0 24 24"
            fill="currentColor"
          >
            <path d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2zm0 18c-4.411 0-8-3.589-8-8s3.589-8 8-8 8 3.589 8 8-3.589 8-8 8zM12 7a2 2 0 1 0 0-4 2 2 0 0 0 0 4zm-4 7h8a1 1 0 0 0 0-2H8a1 1 0 0 0 0 2zM8.5 16h7a1 1 0 0 0 0-2h-7a1 1 0 0 0 0 2z" />
          </svg>
        </div>

        {/* Input Fields */}
        <div className="w-full space-y-4">
          {/* Gender Selection */}
          <div>
            <label htmlFor="gender" className="text-lg text-gray-300 font-medium">เพศ</label>
            <div className="flex space-x-4 mt-2">
              <label className="flex items-center">
                <input
                  type="radio"
                  name="gender"
                  value="male"
                  className="mr-2 h-4 w-4 text-blue-400 focus:ring-blue-400"
                />
                <span className="text-gray-300">ชาย</span>
              </label>
              <label className="flex items-center">
                <input
                  type="radio"
                  name="gender"
                  value="female"
                  className="mr-2 h-4 w-4 text-blue-400 focus:ring-blue-400"
                />
                <span className="text-gray-300">หญิง</span>
              </label>
            </div>
          </div>
          <div>
            <label htmlFor="weight" className="text-lg text-gray-300 font-medium">ป้อนน้ำหนัก (กิโลกรัม)</label>
            <input
              type="number"
              id="weight"
              placeholder="ป้อนน้ำหนัก "
              className="mt-2 w-full p-3 bg-slate-800 text-gray-200 border border-slate-700 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-400 transition-all"
            />
          </div>
          <div>
            <label htmlFor="height" className="text-lg text-gray-300 font-medium">ป้อนส่วนสูง (เซนติเมตร)</label>
            <input
              type="number"
              id="height"
              placeholder="ป้อนส่วนสูง"
              className="mt-2 w-full p-3 bg-slate-800 text-gray-200 border border-slate-700 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-400 transition-all"
            />
          </div>
          <div>
            <label htmlFor="age" className="text-lg text-gray-300 font-medium">ป้อนอายุ (ปี)</label>
            <input
              type="number"
              id="age"
              placeholder="ป้อนอายุ"
              className="mt-2 w-full p-3 bg-slate-800 text-gray-200 border border-slate-700 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-400 transition-all"
            />
          </div>
        </div>

        {/* Buttons */}
        <div className="w-full flex space-x-4">
          <button className="flex-1 bg-blue-800 text-white text-lg font-bold py-3 rounded-xl shadow-lg hover:bg-blue-700 transition-colors">
            คำนวณ BMR
          </button>
          <button className="flex-1 bg-red-800 text-white text-lg font-bold py-3 rounded-xl shadow-lg hover:bg-red-700 transition-colors">
            รีเซ็ต
          </button>
        </div>

        {/* Result Display */}
        <div className="w-full text-center mt-4">
          <h2 className="text-2xl font-bold text-gray-200">ค่า BMR ที่คำนวณได้: <span id="bmrResult" className="text-blue-400">0.00</span></h2>
        </div>
      </div>
    </div>
  );
}
