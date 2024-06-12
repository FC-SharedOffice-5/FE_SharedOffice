'use client';

import Image from 'next/image';
import { useState } from 'react';
import BoardAddModal from './board-add-modal';

const FloatingButton = () => {
  const [isFloatingOn, setIsFloatingOn] = useState(false);

  return (
    <section className="fixed bottom-[60px] flex w-full max-w-[500px] justify-end">
      <button
        type="button"
        onClick={() => setIsFloatingOn(!isFloatingOn)}
        className="z-50 mx-2"
      >
        {!isFloatingOn ? (
          <Image
            src="/icons/floating-on.svg"
            alt="floatingOn"
            width={74}
            height={74}
          />
        ) : (
          <>
            <Image
              src="/icons/floating-off.svg"
              alt="floatingOff"
              width={74}
              height={74}
            />
          </>
        )}
      </button>
      {isFloatingOn && (
        <>
          <div
            className="fixed inset-0 z-10 bg-black bg-opacity-50"
            onClick={(event) => {
              if (event.target === event.currentTarget) {
                setIsFloatingOn(false);
              }
            }}
          ></div>
          <BoardAddModal />
        </>
      )}
    </section>
  );
};

export default FloatingButton;
