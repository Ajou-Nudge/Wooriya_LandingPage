"use client"
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

interface Photo {
  id: number;
  src: string;
  caption: string;
}

const photos: Photo[] = [
  // 사진들의 배열, 각각의 요소는 Photo 타입과 일치해야 합니다.
  // 예: { id: 1, src: "이미지 경로", caption: "이미지 설명" }
  { id: 1, src: 'greenMoney.svg', caption: '확실한 장비, 공간' },
  { id: 2, src: 'gold.svg', caption: '더 모일수록 커지는' },
  { id: 3, src: 'fire.svg', caption: '안전하게 보장된' },
  { id: 4, src: 'squres.svg', caption: '무엇을 하든' },
  { id: 5, src:'Festival.webp',caption:'111'}
];

const PhotoGallery: React.FC = () => {
  const photoHeight = 300; // 사진의 높이, 필요에 따라 조정 가능
  const rotationInterval = 3000; // 로테이션 간격 (3초)

  const [currentPhotoIndex, setCurrentPhotoIndex] = useState(0);

  useEffect(() => {
    const rotationIntervalId = setInterval(movePhotosRight, rotationInterval);

    return () => {
      clearInterval(rotationIntervalId);
    };
  }, []);

  const movePhotosRight = () => {
    setCurrentPhotoIndex((prevIndex) => (prevIndex + 1) % photos.length);
  };

  return (
    <div style={{ height: photoHeight, overflow: "hidden" }}>
      <motion.div
        style={{
          display: "flex",
          width: `${photos.length * 100}%`,
          transform: `translateX(-${(currentPhotoIndex * 100) / photos.length}%)`,
          transition: `transform ${rotationInterval / 1000}s`,
        }}
      >
        {photos.map((photo, index) => (
          <div key={photo.id} style={{ flex: "0 0 25%", padding: "0 8px" }}>
            <motion.img
              src={photo.src}
              alt={photo.caption}
              style={{ height: photoHeight, width: "100%", opacity: 0.8 }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
            />
            <p>{photo.caption}</p>
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export default PhotoGallery;
