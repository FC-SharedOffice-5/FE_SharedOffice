import { useState } from 'react';

type ModalProps = {
  isOpen: boolean;
  onClose: () => void;
};

const KebabSelectModal = ({ isOpen, onClose }: ModalProps) => {
  const [touchStartY, setTouchStartY] = useState<number | null>(null);
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
        <div>
          <div className="body-medium p-2">신고하기</div>
          <div className="body-medium p-2">차단하기</div>
        </div>
      </div>
    </div>
  );
};

export default KebabSelectModal;
