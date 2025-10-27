import Image from "next/image";
import React from "react";

interface SkillImageProps {
  src: string;
  alt?: string;
  size?: number; // Optional, if you want to customize image size
}

const SkillImage: React.FC<SkillImageProps> = ({ src, alt = "skill icon", size = 64 }) => {
  return (
    <div className="flex items-center justify-center p-2 rounded-lg bg-white/5 hover:scale-105 transition-transform duration-200">
      <Image
        src={src}
        alt={alt}
        width={size}
        height={size}
        className="object-contain"
      />
    </div>
  );
};

export default SkillImage;