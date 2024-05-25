import { useState, useEffect } from 'react';
import TimerModal from './TimerModal';

type TAuthTimerProps = {
  resetTrigger: boolean;
};

const AuthTimer = ({ resetTrigger }: TAuthTimerProps) => {
  const MINUTES_IN_MS = 3 * 60 * 1000;
  const INTERVAL = 1000;

  const [timeLeft, setTimeLeft] = useState(MINUTES_IN_MS);

  const minutes = String(Math.floor((timeLeft / (1000 * 60)) % 60)).padStart(2, '0');
  const second = String(Math.floor((timeLeft / 1000) % 60)).padStart(2, '0');

  useEffect(() => {
    if (timeLeft <= 0) {
      return;
    }

    const timer = setInterval(() => {
      setTimeLeft((prevTime) => prevTime - INTERVAL);
    }, INTERVAL);

    return () => {
      clearInterval(timer);
    };
  }, [timeLeft]);

  useEffect(() => {
    setTimeLeft(MINUTES_IN_MS);
  }, [MINUTES_IN_MS, resetTrigger]);

  return (
    <>
      <div className="label-small absolute bottom-[26px] right-0 text-error">
        {minutes}:{second}
      </div>
      {!timeLeft && <TimerModal />}
    </>
  );
};

export default AuthTimer;
