'use client'
import React, { useState } from 'react';

export default function BMRPage() {
  const [gender, setGender] = useState<'male' | 'female'>('male');
  const [weight, setWeight] = useState<string>('');
  const [height, setHeight] = useState<string>('');
  const [age, setAge] = useState<string>('');
  const [bmr, setBmr] = useState<string | null>(null);

  const calculateBMR = () => {
    if (!weight || !height || !age) {
      alert('กรุณากรอกข้อมูลให้ครบทุกช่อง');
      return;
    }

    const w = parseFloat(weight);
    const h = parseFloat(height);
    const a = parseFloat(age);

    if (isNaN(w) || isNaN(h) || isNaN(a) || w <= 0 || h <= 0 || a <= 0) {
      alert('กรุณากรอกข้อมูลให้ถูกต้อง');
      return;
    }

    let bmrValue: number;
    if (gender === 'male') {
      // Harris-Benedict Equation for men
      bmrValue = 88.362 + (13.397 * w) + (4.799 * h) - (5.677 * a);
    } else {
      // Harris-Benedict Equation for women
      bmrValue = 447.593 + (9.247 * w) + (3.098 * h) - (4.330 * a);
    }

    setBmr(bmrValue.toFixed(2));
  };

  const resetFields = () => {
    setGender('male');
    setWeight('');
    setHeight('');
    setAge('');
    setBmr(null);
  };

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

        {/* BMR Icon/Placeholder */}
        <div className="w-48 h-48 bg-gray-800 rounded-full shadow-md flex items-center justify-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-24 w-24 text-blue-400"
            viewBox="0 0 24 24"
            fill="currentColor"
          >
            <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
          </svg>
        </div>

        {/* Input Fields */}
        <div className="w-full space-y-4">
          {/* Gender Selection */}
          <div>
            <label className="text-lg text-gray-300 font-medium">เพศ</label>
            <div className="flex space-x-4 mt-2">
              <label className="flex items-center">
                <input
                  type="radio"
                  name="gender"
                  value="male"
                  checked={gender === 'male'}
                  onChange={() => setGender('male')}
                  className="mr-2 h-4 w-4 text-blue-400 focus:ring-blue-400"
                />
                <span className="text-gray-300">ชาย</span>
              </label>
              <label className="flex items-center">
                <input
                  type="radio"
                  name="gender"
                  value="female"
                  checked={gender === 'female'}
                  onChange={() => setGender('female')}
                  className="mr-2 h-4 w-4 text-pink-400 focus:ring-pink-400"
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
              value={weight}
              onChange={(e) => setWeight(e.target.value)}
              placeholder="ป้อนน้ำหนัก"
              className="mt-2 w-full p-3 bg-slate-800 text-gray-200 border border-slate-700 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-400 transition-all"
            />
          </div>
          <div>
            <label htmlFor="height" className="text-lg text-gray-300 font-medium">ป้อนส่วนสูง (เซนติเมตร)</label>
            <input
              type="number"
              id="height"
              value={height}
              onChange={(e) => setHeight(e.target.value)}
              placeholder="ป้อนส่วนสูง"
              className="mt-2 w-full p-3 bg-slate-800 text-gray-200 border border-slate-700 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-400 transition-all"
            />
          </div>
          <div>
            <label htmlFor="age" className="text-lg text-gray-300 font-medium">ป้อนอายุ (ปี)</label>
            <input
              type="number"
              id="age"
              value={age}
              onChange={(e) => setAge(e.target.value)}
              placeholder="ป้อนอายุ"
              className="mt-2 w-full p-3 bg-slate-800 text-gray-200 border border-slate-700 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-400 transition-all"
            />
          </div>
        </div>

        {/* Buttons */}
        <div className="w-full flex space-x-4">
          <button
            onClick={calculateBMR}
            className="flex-1 bg-blue-800 text-white text-lg font-bold py-3 rounded-xl shadow-lg hover:bg-blue-700 transition-colors"
          >
            คำนวณ BMR
          </button>
          <button
            onClick={resetFields}
            className="flex-1 bg-red-800 text-white text-lg font-bold py-3 rounded-xl shadow-lg hover:bg-red-700 transition-colors"
          >
            รีเซ็ต
          </button>
        </div>

        {/* Result Display */}
        <div className="w-full text-center mt-4">
          <h2 className="text-2xl font-bold text-gray-200">
            ค่า BMR ที่คำนวณได้: <span className="text-blue-400">{bmr !== null ? bmr : '0.00'}</span>
          </h2>
        </div>
      </div>
    </div>
  );
}
