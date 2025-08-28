'use client'
import React, { useState } from 'react';


const CarInstallment = () => {
    // State variables are included for potential future functionality,
    // but they are not used for calculations in this UI-only version.
    const [carPrice, setCarPrice] = useState('');
    const [downPayment, setDownPayment] = useState('10');
    const [interestRate, setInterestRate] = useState('');
    const [loanTerm, setLoanTerm] = useState('12');
    const [monthlyPayment, setMonthlyPayment] = useState(0);
    const [userName, setUserName] = useState('');

    return (
        <div className="bg-slate-950 min-h-screen flex items-center justify-center p-4 font-inter text-slate-100">

            {/* Card Container */}
            <div className="bg-slate-800 rounded-3xl shadow-2xl p-8 max-w-lg w-full flex flex-col items-center space-y-6">

                {/* Title Section */}
                <div className="text-center">
                    <h1 className="text-4xl text-slate-100 font-bold">คำนวณค่างวดรถยนต์</h1>
                    <p className="text-xl text-slate-300 font-semibold mt-2">ประเมินยอดผ่อนชำระต่อเดือน</p>
                </div>

                {/* Car Icon (Using SVG) */}
                <div className="w-48 h-48 flex items-center justify-center">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="100%"
                        height="100%"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="text-blue-500"
                    >
                        <path d="M10 17L5 12L10 7"/>
                        <path d="M14 7L19 12L14 17"/>
                        <path d="M16 4h-4"/>
                        <path d="M8 4H5a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2h-4"/>
                    </svg>
                </div>

                {/* Input Fields */}
                <div className="w-full space-y-4">
                    <div>
                        <label htmlFor="userName" className="text-lg text-slate-300 font-medium">ชื่อผู้คำนวณ</label>
                        <input
                            type="text"
                            id="userName"
                            placeholder='ป้อนชื่อ'
                            value={userName}
                            onChange={(e) => setUserName(e.target.value)}
                            className="mt-2 w-full p-3 border border-slate-600 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all bg-slate-700 text-slate-100"
                        />
                    </div>
                    <div>
                        <label htmlFor="carPrice" className="text-lg text-slate-300 font-medium">ราคารถยนต์ (บาท)</label>
                        <input
                            type="number"
                            id="carPrice"
                            placeholder='ป้อนราคารถยนต์'
                            value={carPrice}
                            onChange={(e) => setCarPrice(e.target.value)}
                            className="mt-2 w-full p-3 border border-slate-600 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all bg-slate-700 text-slate-100"
                        />
                    </div>
                    <div>
                        <label htmlFor="interestRate" className="text-lg text-slate-300 font-medium">อัตราดอกเบี้ยต่อปี (%)</label>
                        <input
                            type="number"
                            id="interestRate"
                            placeholder='ป้อนดอกเบี้ย'
                            step="0.1"
                            value={interestRate}
                            onChange={(e) => setInterestRate(e.target.value)}
                            className="mt-2 w-full p-3 border border-slate-600 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all bg-slate-700 text-slate-100"
                        />
                    </div>
                    <div>
                        <label className="text-lg text-slate-300 font-medium">เงินดาวน์ (%)</label>
                        <div className="flex flex-wrap gap-4 mt-2">
                            {['10', '15', '20', '25', '30', '40'].map((value) => (
                                <label key={value} className="flex items-center cursor-pointer">
                                    <input
                                        type="radio"
                                        name="downPayment"
                                        value={value}
                                        checked={downPayment === value}
                                        onChange={(e) => setDownPayment(e.target.value)}
                                        className="mr-2 h-4 w-4 text-blue-600 focus:ring-blue-500 bg-slate-700 border-slate-600"
                                    />
                                    <span className="text-slate-300">{value}%</span>
                                </label>
                            ))}
                        </div>
                    </div>
                    <div>
                        <label htmlFor="loanTerm" className="text-lg text-slate-300 font-medium">ระยะเวลาผ่อนชำระ (เดือน)</label>
                        <select
                            id="loanTerm"
                            value={loanTerm}
                            onChange={(e) => setLoanTerm(e.target.value)}
                            className="mt-2 w-full p-3 border border-slate-600 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all bg-slate-700 text-slate-100"
                        >
                            <option value="12">12 เดือน (1 ปี)</option>
                            <option value="24">24 เดือน (2 ปี)</option>
                            <option value="36">36 เดือน (3 ปี)</option>
                            <option value="48">48 เดือน (4 ปี)</option>
                            <option value="60">60 เดือน (5 ปี)</option>
                            <option value="72">72 เดือน (6 ปี)</option>
                            <option value="84">84 เดือน (7 ปี)</option>
                            <option value="96">96 เดือน (8 ปี)</option>
                        </select>
                    </div>
                </div>

                {/* Buttons */}
                <div className="w-full flex space-x-4">
                    <button
                        className="flex-1 bg-blue-600 text-white text-lg font-bold py-3 rounded-xl shadow-lg hover:bg-blue-700 transition-colors"
                        // The button is for UI only, no onClick handler is provided
                    >
                        คำนวณค่างวด
                    </button>
                    <button
                        className="flex-1 bg-red-500 text-white text-lg font-bold py-3 rounded-xl shadow-lg hover:bg-red-600 transition-colors"
                        // The button is for UI only, no onClick handler is provided
                    >
                        รีเซ็ต
                    </button>
                </div>

                {/* Result Display */}
                <div className="w-full text-center mt-4">
                    <h2 className="text-2xl font-bold text-slate-300">ค่างวดต่อเดือน: <span id="monthlyPaymentResult" className="text-blue-500">{monthlyPayment.toFixed(2)}</span> บาท</h2>
                </div>
            </div>
        </div>
    );
}

export default CarInstallment;
