import { useEffect, useState } from "react";

export default function QuestionTimer({ time, onTiomeOut, mode }) {
  const [remainingTime, setRemainingTime] = useState(time);

  useEffect(() => {
    const timer = setTimeout(onTiomeOut, time);
    return () => {
      clearTimeout(timer);
    };
  }, [onTiomeOut, time]);
  useEffect(() => {
    const interval = setInterval(() => {
      setRemainingTime((prevRT) => prevRT - 100);
    }, 100);
    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <progress
      id="question-time"
      value={remainingTime}
      max={time}
      className={mode}
    />
  );
}
