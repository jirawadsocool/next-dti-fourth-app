'use client'
import React, { useState } from "react";

const BMIPage: React.FC = () => {
  const [weight, setWeight] = useState<string>("");
  const [height, setHeight] = useState<string>("");
  const [gender, setGender] = useState<"male" | "female">("male");
  const [bmi, setBmi] = useState<string | null>(null);
  const [category, setCategory] = useState<string>("");

  // ฟังก์ชันคำนวณ BMI
  const calculateBMI = () => {
    if (!weight || !height) {
      alert("กรุณากรอกน้ำหนักและส่วนสูงให้ครบ");
      return;
    }

    const w = parseFloat(weight);
    const h = parseFloat(height);

    if (isNaN(w) || isNaN(h) || w <= 0 || h <= 0) {
      alert("กรุณากรอกน้ำหนักและส่วนสูงให้ถูกต้อง");
      return;
    }

    const heightInM = h / 100;
    const bmiValue = (w / (heightInM * heightInM));
    const bmiFixed = bmiValue.toFixed(2);
    setBmi(bmiFixed);
    setCategory(getBMICategory(bmiValue, gender));
  };

  // ฟังก์ชันรีเซ็ตค่า
  const reset = () => {
    setWeight("");
    setHeight("");
    setBmi(null);
    setCategory("");
  };

  // เกณฑ์ BMI แยกชายหญิง
  const getBMICategory = (bmi: number, gender: "male" | "female") => {
    if (gender === "male") {
      if (bmi < 18.5) return "น้ำหนักน้อยเกินไป (ชาย)";
      if (bmi < 24.9) return "น้ำหนักปกติ (ชาย)";
      if (bmi < 29.9) return "น้ำหนักเกิน (ชาย)";
      return "อ้วน (ชาย)";
    } else {
      if (bmi < 18.0) return "น้ำหนักน้อยเกินไป (หญิง)";
      if (bmi < 23.9) return "น้ำหนักปกติ (หญิง)";
      if (bmi < 28.9) return "น้ำหนักเกิน (หญิง)";
      return "อ้วน (หญิง)";
    }
  };

  return (
    <div className="bg-black text-white min-h-screen flex items-center justify-center p-4 font-inter">
      <div className="bg-slate-900 rounded-3xl shadow-2xl shadow-cyan-500/20 p-8 max-w-lg w-full flex flex-col items-center space-y-6 transform transition-all duration-300 hover:scale-105">
        
        {/* Title */}
        <div className="text-center">
          <h1 className="text-4xl font-bold text-cyan-400">เครื่องคำนวณ BMI</h1>
          <p className="text-xl text-gray-400 font-semibold mt-2">เพื่อสุขภาพที่ดีของคุณ</p>
        </div>

        {/* เพศ */}
        <div className="w-full">
          <label className="text-lg text-gray-300 font-medium">เลือกเพศ</label>
          <select
            value={gender}
            onChange={(e) => setGender(e.target.value as "male" | "female")}
            className="mt-2 w-full p-3 border border-gray-600 rounded-xl bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-cyan-500 transition-all"
          >
            <option value="male">ชาย</option>
            <option value="female">หญิง</option>
          </select>
        </div>

        {/* น้ำหนัก & ส่วนสูง */}
        <div className="w-full space-y-4">
          <div>
            <label htmlFor="weight" className="text-lg text-gray-300 font-medium">ป้อนน้ำหนัก (กิโลกรัม)</label>
            <input
              type="number"
              id="weight"
              value={weight}
              onChange={(e) => setWeight(e.target.value)}
              placeholder="ตัวอย่าง: 65"
              className="mt-2 w-full p-3 border border-gray-600 rounded-xl bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-cyan-500 transition-all"
            />
          </div>
          <div>
            <label htmlFor="height" className="text-lg text-gray-300 font-medium">ป้อนส่วนสูง (เซนติเมตร)</label>
            <input
              type="number"
              id="height"
              value={height}
              onChange={(e) => setHeight(e.target.value)}
              placeholder="ตัวอย่าง: 170"
              className="mt-2 w-full p-3 border border-gray-600 rounded-xl bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-cyan-500 transition-all"
            />
          </div>
        </div>
        
        {/* ปุ่ม */}
        <div className="w-full flex space-x-4">
          <button
            onClick={calculateBMI}
            className="flex-1 bg-cyan-600 text-white text-lg font-bold py-3 rounded-xl shadow-lg hover:bg-cyan-700 transition-colors"
          >
            คำนวณ BMI
          </button>
          <button
            onClick={reset}
            className="flex-1 bg-gray-500 text-white text-lg font-bold py-3 rounded-xl shadow-lg hover:bg-gray-600 transition-colors"
          >
            รีเซ็ต
          </button>
        </div>

        {/* ผลลัพธ์ */}
        <div className="w-full text-center mt-4 p-4 rounded-xl bg-gray-800">
          <h2 className="text-2xl font-bold text-white">
            ค่า BMI ที่คำนวณได้: <span className="text-cyan-400">{bmi ? bmi : "0.00"}</span>
          </h2>
          <p className="text-xl font-bold mt-2 text-gray-400">
            ประเภทของ BMI: <span className="text-white font-bold">{category}</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default BMIPage;
