import React from 'react';

// Main App component for the BMI calculator, displaying only the UI
const App = () => {
  return (
    <div className="bg-black text-white min-h-screen flex items-center justify-center p-4 font-inter">
      {/* Main card container */}
      <div className="bg-slate-900 rounded-3xl shadow-2xl shadow-cyan-500/20 p-8 max-w-lg w-full flex flex-col items-center space-y-6 transform transition-all duration-300 hover:scale-105">

        {/* Title and subtitle */}
        <div className="text-center">
          <h1 className="text-4xl font-bold text-cyan-400">เครื่องคำนวณ BMI</h1>
          <p className="text-xl text-gray-400 font-semibold mt-2">เพื่อสุขภาพที่ดีของคุณ</p>
        </div>

        {/* Input fields for weight and height */}
        <div className="w-full space-y-4">
          <div>
            <label htmlFor="weight" className="text-lg text-gray-300 font-medium">ป้อนน้ำหนัก (กิโลกรัม)</label>
            <input
              type="number"
              id="weight"
              placeholder="ตัวอย่าง: 65"
              className="mt-2 w-full p-3 border border-gray-600 rounded-xl focus:outline-none focus:ring-2 focus:ring-cyan-500 transition-all bg-gray-700 text-white"
            />
          </div>
          <div>
            <label htmlFor="height" className="text-lg text-gray-300 font-medium">ป้อนส่วนสูง (เซนติเมตร)</label>
            <input
              type="number"
              id="height"
              placeholder="ตัวอย่าง: 170"
              className="mt-2 w-full p-3 border border-gray-600 rounded-xl focus:outline-none focus:ring-2 focus:ring-cyan-500 transition-all bg-gray-700 text-white"
            />
          </div>
        </div>
        
        {/* Buttons to calculate and reset */}
        <div className="w-full flex space-x-4">
          <button
            className="flex-1 bg-cyan-600 text-white text-lg font-bold py-3 rounded-xl shadow-lg hover:bg-cyan-700 transition-colors"
          >
            คำนวณ BMI
          </button>
          <button
            className="flex-1 bg-gray-500 text-white text-lg font-bold py-3 rounded-xl shadow-lg hover:bg-gray-600 transition-colors"
          >
            รีเซ็ต
          </button>
        </div>

        {/* Result display area - now static for UI only */}
        <div className="w-full text-center mt-4 p-4 rounded-xl bg-gray-800">
          <h2 className="text-2xl font-bold text-white">ค่า BMI ที่คำนวณได้: <span className="text-cyan-400">0.00</span></h2>
          <p className="text-xl font-bold mt-2 text-gray-400">
            ประเภทของ BMI: <span className="text-white font-bold"></span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default App;
