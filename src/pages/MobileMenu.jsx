import React, { useEffect, useState } from "react";
export const MobileMenu = () => {
  const [open, setOpen] = useState(false);
  return (
    <div className="relative">
      <button
        onClick={() => setOpen(!open)}
        className="p-2 text-5xl rounded bg-white border"
      >
        ☰
      </button>
      {open && (
        <div className="absolute right-0 mt-2 w-48 bg-white border rounded shadow-lg">
          <a href="#home" className="block px-4 py-2">
            Home
          </a>
          <a href="#services" className="block px-4 py-2">
            Services
          </a>
          <a href="#about" className="block px-4 py-2">
            About
          </a>
          <a href="#contact" className="block px-4 py-2">
            Contact
          </a>
        </div>
      )}
    </div>
  );
};

export function Stat({ label, value }) {
  return (
    <div className="text-center">
      <div className="text-2xl font-bold text-indigo-600">{value}</div>
      <div className="text-xs text-gray-500">{label}</div>
    </div>
  );
}

export function Counter({ label, value }) {
  const [num, setNum] = useState(0);
  useEffect(() => {
    let start = 0;
    const duration = 800;
    const stepTime = Math.max(Math.floor(duration / value), 10);
    const timer = setInterval(() => {
      start += 1;
      if (start >= value) {
        setNum(value);
        clearInterval(timer);
      } else setNum(start);
    }, stepTime);
    return () => clearInterval(timer);
  }, [value]);
  return (
    <div className="">
      <div className="text-2xl font-bold text-[#e3154f]">{num}</div>
      <div className="text-sm text-gray-500">{label}</div>
    </div>
  );
}
