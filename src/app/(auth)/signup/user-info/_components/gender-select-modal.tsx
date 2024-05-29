'use client';

import { useState } from 'react';
import type { GenderType } from '../page';

type ModalProps = {
  isOpen: boolean;
  onClose: () => void;
  onSelect: (gender: GenderType) => void;
};

const GenderSelectModal = ({ isOpen, onClose, onSelect }: ModalProps) => {
  const [touchStartY, setTouchStartY] = useState<number | null>(null);
  const [selectedGender, setSelectedGender] = useState<string | null>(null);
  const [isClosing, setIsClosing] = useState(false);

  const handleTouchStart = (event: React.TouchEvent) => {
    setTouchStartY(event.targetTouches[0].clientY);
  };

  const handleTouchMove = (event: React.TouchEvent) => {
    const touchEndY = event.targetTouches[0].clientY;
    if (touchStartY !== null && touchEndY - touchStartY > 50) {
      setIsClosing(true);
      setTimeout(() => {
        onClose();
        setIsClosing(false);
      }, 300);
    }
  };

  const handleSelect = (gender: GenderType) => {
    setSelectedGender(gender);
    onSelect(gender);
  };

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 flex items-end justify-center bg-black bg-opacity-50"
      onClick={(event) => {
        if (event.target === event.currentTarget) {
          onClose();
        }
      }}
    >
      <div
        className={`w-full max-w-[360px] rounded-t-lg bg-white p-4 ${isClosing ? 'animate-slide-down' : 'animate-slide-up'}`}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
      >
        <h2 className="mb-4 text-lg">성별 선택</h2>
        <ul>
          <li
            className={`cursor-pointer py-2 ${selectedGender === '남성' ? 'text-primary' : ''}`}
            onClick={() => handleSelect('남성')}
          >
            남성
          </li>
          <li
            className={`cursor-pointer py-2 ${selectedGender === '여성' ? 'text-primary' : ''}`}
            onClick={() => handleSelect('여성')}
          >
            여성
          </li>
        </ul>
      </div>
    </div>
  );
};

export default GenderSelectModal;
