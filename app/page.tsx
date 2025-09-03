'use client'

import React from 'react';
import { useRouter } from 'next/navigation';

/**
 * Main application component for the landing page with a dark theme.
 * Displays a header, a logo, and three clickable cards for different calculators.
 * Uses Tailwind CSS for styling and a simple modal for interaction.
 */
export default function App() {
  const router = useRouter();

  /**
   * Navigates to the specified path.
   * @param {string} path - The path to navigate to.
   */
  const handleNavigate = (path: string) => {
    router.push(path);
  };

  return (
    <div className="bg-gray-900 flex items-center justify-center min-h-screen p-4 text-white">
      {/* Main Container */}
      <div className="max-w-6xl w-full mx-auto">
        {/* Header */}
        <header className="text-center mb-12">
          {/* Logo SVG */}
          <div className="flex justify-center items-center mb-4">
            <svg xmlns="http://www.w3.org/2000/svg" className="w-16 h-16 text-indigo-400" viewBox="0 0 24 24" fill="currentColor">
              <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zM9 17H7v-2h2v2zm4 0h-2v-2h2v2zm4 0h-2v-2h2v2zm-8-4H7v-2h2v2zm4 0h-2v-2h2v2zm4 0h-2v-2h2v2zm-4-4h-2V7h2v2z"/>
            </svg>
          </div>
          <h1 className="text-4xl font-bold text-gray-100 mb-2">เครื่องมือคำนวณออนไลน์</h1>
          <p className="text-gray-400">เลือกบริการที่คุณต้องการใช้งานจากรายการด้านล่าง</p>
        </header>

        {/* Cards Container */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Card 1: BMI Calculator */}
          <div onClick={() => handleNavigate('/bmi')} className="group block cursor-pointer">
            <div className="bg-gray-800 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform group-hover:scale-105 overflow-hidden">
              <img className="w-full h-48 object-cover object-center" src="https://placehold.co/800x400/374151/E5E7EB?text=BMI" alt="BMI" />
              <div className="p-6">
                <h2 className="text-2xl font-semibold text-gray-100">คำนวณ BMI</h2>
                <p className="text-gray-400 mt-2">คำนวณดัชนีมวลกายเพื่อประเมินความเสี่ยงด้านสุขภาพ</p>
              </div>
            </div>
          </div>

          {/* Card 2: BMR Calculator */}
          <div onClick={() => handleNavigate('/bmr')} className="group block cursor-pointer">
            <div className="bg-gray-800 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform group-hover:scale-105 overflow-hidden">
              <img className="w-full h-48 object-cover object-center" src="https://placehold.co/800x400/374151/E5E7EB?text=BMR" alt="BMR" />
              <div className="p-6">
                <h2 className="text-2xl font-semibold text-gray-100">คำนวณ BMR</h2>
                <p className="text-gray-400 mt-2">คำนวณอัตราการเผาผลาญพลังงานในร่างกาย</p>
              </div>
            </div>
          </div>

          {/* Card 3: Car Installment Calculator */}
          <div onClick={() => handleNavigate('/carubstallment')} className="group block cursor-pointer">
            <div className="bg-gray-800 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform group-hover:scale-105 overflow-hidden">
              <img className="w-full h-48 object-cover object-center" src="https://placehold.co/800x400/374151/E5E7EB?text=Car+Loan" alt="Car Loan" />
              <div className="p-6">
                <h2 className="text-2xl font-semibold text-gray-100">คำนวณผ่อนรถ</h2>
                <p className="text-gray-400 mt-2">คำนวณยอดผ่อนรถยนต์ต่อเดือน</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
