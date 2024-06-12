'use client';

import { useState } from 'react';

type SelectModalProps = {
  isOpen: boolean;
  onClose: () => void;
  onSelect: (option: string) => void;
  label: string;
  defaultOption?: string;
  options: string[];
};

const SelectModal = ({
  isOpen,
  onClose,
  onSelect,
  label,
  defaultOption,
  options,
}: SelectModalProps) => {
  const [touchStartY, setTouchStartY] = useState<number | null>(null);
  const [selectedOption, setSelectedOption] = useState(defaultOption);
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

  const handleSelect = (option: string) => {
    setSelectedOption(option);
    onSelect(option);
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
        className={`w-full max-w-[500px] rounded-t-lg bg-white p-4 ${isClosing ? 'animate-slide-down' : 'animate-slide-up'}`}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
      >
        <h2 className="label-large mb-4">{label}</h2>
        <ul className="pl-2">
          {options.map((option) => (
            <li
              key={option}
              className={`cursor-pointer py-2  ${option === selectedOption ? 'text-primary' : ''}`}
              onClick={() => handleSelect(option)}
            >
              {option}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default SelectModal;
