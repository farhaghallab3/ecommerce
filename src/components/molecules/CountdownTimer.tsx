// src/components/molecules/CountdownTimer.tsx
import { type FC, useState, useEffect, useRef, type JSX } from 'react';

interface CountdownTimerProps {
  targetDate: string; // ISO 8601 string, e.g., "2025-12-31T23:59:59"
  textColorClass?: string;
}

const CountdownTimer: FC<CountdownTimerProps> = ({ targetDate, textColorClass = 'text-gray-800' }) => {
  interface TimeLeft {
    days: number;
    hours: number;
    minutes: number;
    seconds: number;
  }

  const calculateTimeLeft = (): TimeLeft => {
    const difference = +new Date(targetDate) - +new Date();
    let timeLeft: TimeLeft;

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    } else {
      timeLeft = { days: 0, hours: 0, minutes: 0, seconds: 0 };
    }
    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());
  const timerIntervalRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    timerIntervalRef.current = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => {
      if (timerIntervalRef.current) {
        clearInterval(timerIntervalRef.current);
      }
    };
  }, [targetDate]);

  const timerComponents: JSX.Element[] = [];

  Object.entries(timeLeft).forEach(([interval, value]) => {
    if (value >= 0) { // Ensure negative values aren't displayed when finished
      timerComponents.push(
        <div key={interval} className="flex flex-col items-center">
          <span className="text-2xl font-bold leading-none">{String(value).padStart(2, '0')}</span>
          <span className="text-xs uppercase">{interval.slice(0, 4)}</span> {/* days, hours, mins, secs */}
        </div>
      );
    }
  });

  return (
    <div className={`flex space-x-2 ${textColorClass}`}>
      {timerComponents.length ? timerComponents : <span className="text-sm">Time's Up!</span>}
    </div>
  );
};

export default CountdownTimer;