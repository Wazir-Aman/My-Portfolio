// components/ProfilePhoto.jsx

import Image from "next/image";

export default function ProfilePhoto() {
  return (
    <div className="relative w-48 h-48 md:w-64 md:h-74 mx-auto">
      {/* Abstract Background Blob */}
      <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-500 to-cyan-400 blur-2xl opacity-60 z-0"></div>

      {/* Actual Image */}
      <Image
        src="/profile.png"
        alt="Profile"
        fill
        className="object-cover rounded-full z-10 border-2 border-blue-800 shadow-xl"
      />
    </div>
  );
}
