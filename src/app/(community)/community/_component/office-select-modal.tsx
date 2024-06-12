import { useState } from 'react';

type Office = {
  id: number;
  name: string;
};

type ModalProps = {
  isOpen: boolean;
  onClose: () => void;
  onSelect: (officeName: string) => void;
  officeData: Office[];
};

const OfficeSelectModal = ({ isOpen, onClose, onSelect, officeData }: ModalProps) => {
  const [touchStartY, setTouchStartY] = useState<number | null>(null);
  const [selectedOffice, setSelectedOffice] = useState<string | null>(officeData[0].name);
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

  const handleSelect = (officeName: string) => {
    setSelectedOffice(officeName);
    onSelect(officeName);
  };

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-10 flex items-end justify-center bg-black bg-opacity-50"
      onClick={(event) => {
        if (event.target === event.currentTarget) {
          onClose();
        }
      }}
    >
      <div
        className={`max-h-[calc(100%-64px)] w-full max-w-[500px] overflow-y-auto rounded-t-lg bg-white p-4 ${isClosing ? 'animate-slide-down' : 'animate-slide-up'}`}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
      >
        <div className="mx-auto mb-[14px] h-[4px] w-[48px] rounded-[3px] bg-gray-300"></div>
        <h2 className="label-large mb-4">Mile 지점</h2>
        <ul className="pl-2">
          {officeData.map((office) => (
            <li
              key={office.id}
              className={`body-medium cursor-pointer py-2 ${selectedOffice === office.name ? 'text-primary' : ''}`}
              onClick={() => handleSelect(office.name)}
            >
              {office.name}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default OfficeSelectModal;
