import { useState, useRef, Dispatch, SetStateAction } from 'react';

type ModalProps = {
  setIsClosed: Dispatch<SetStateAction<boolean>>;
  children: React.ReactNode;
};

const BottomDrawer = ({ children, setIsClosed }: ModalProps) => {
  const [startY, setStartY] = useState<number>(0);
  const [drawerPosition, setDrawerPosition] = useState(0); // 0 means initial position at bottom
  const [isDragging, setIsDragging] = useState(false);
  const [isAtTop, setIsAtTop] = useState(false); // New state to track if drawer is at the top
  const drawerRef = useRef<HTMLDivElement>(null);

  const handleStart = (y: number) => {
    setStartY(y);
    setIsDragging(true);
  };

  const handleMove = (y: number) => {
    const moveDistance = startY - y;
    if (moveDistance > 0) {
      if (moveDistance > 110) {
        setDrawerPosition(188); // Jump to 188px if move distance exceeds 110px
        setIsAtTop(true);
      } else {
        setDrawerPosition(moveDistance);
      }
    } else {
      // Dragging down
      const pullDownDistance = Math.abs(moveDistance);
      if (pullDownDistance > 50) {
        // Adjust the threshold as needed
        setIsAtTop(false);
        setDrawerPosition(0); // Reset to initial position when pulled down sufficiently
      }
    }
  };

  const handleEnd = () => {
    setIsDragging(false);
    if (isAtTop) {
      setIsClosed(true);
      setDrawerPosition(188); // Stay at 188px if at the top
    } else {
      setIsClosed(false);
      setDrawerPosition(0); // Reset to initial position
    }
  };

  const handleTouchStart = (event: React.TouchEvent) => handleStart(event.targetTouches[0].clientY);
  const handleTouchMove = (event: React.TouchEvent) => handleMove(event.targetTouches[0].clientY);
  const handleTouchEnd = handleEnd;

  const handleMouseDown = (event: React.MouseEvent) => handleStart(event.clientY);
  const handleMouseMove = (event: React.MouseEvent) => {
    if (isDragging) {
      handleMove(event.clientY);
    }
  };
  const handleMouseUp = handleEnd;

  return (
    <div
      className="fixed inset-0 flex items-end justify-center"
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
      onMouseLeave={handleMouseUp}
    >
      <div
        ref={drawerRef}
        className={`flex h-[calc(100%-264px)] w-full max-w-[500px] flex-col items-center rounded-t-lg bg-white p-4 transition-transform duration-300 
        ${isDragging ? '' : 'transform-gpu'}`}
        style={{
          transform: `translateY(${isAtTop ? -188 : -drawerPosition}px)`,
        }}
      >
        <div className="flex flex-col items-center">
          <div
            className="flex w-full flex-col items-center"
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
            onMouseDown={handleMouseDown}
          >
            <div className="h-[4px] w-[48px] rounded-[3px] bg-gray-300" />
            <div className="h-[45px] w-full" />
          </div>
          <div
            className={`flex overflow-auto scrollbar-hide ${isAtTop ? 'h-[calc(100dvh-27%)]' : 'h-[calc(100dvh-51%)]'} w-full`}
          >
            {children}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BottomDrawer;
