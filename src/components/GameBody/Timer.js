import React, { useState } from "react";
import { useTimer } from "react-timer-hook";
import { FaPlay, FaPause, FaStepForward } from "react-icons/fa";

const Timer = () => {
  const [expireAt, setExpireAt] = useState(60);
  const { seconds, minutes, pause, resume, restart } = useTimer({
    expiryTimestamp: new Date(),
  });

  const reStartTimer = () => {
    const time = new Date();
    const seconds = time.getSeconds() + expireAt;
    time.setSeconds(seconds);
    restart(time);
  };

  return (
    <div className="timer_container">
      <div className="timer_sub_container">
        <div className="timer_row">
          <input
            onChange={(e) => setExpireAt(Number(e.target.value))}
            value={expireAt}
            className="timer_input"
          />
          Sec
        </div>
        <div className="timer_number">
          <span>{minutes}</span>:<span>{seconds}</span>
        </div>
        <div className="timer_row">
          <button
            onClick={reStartTimer}
            className="timer_button timer_button_play"
          >
            <FaPlay />
          </button>
          <button onClick={pause} className="timer_button timer_button_pause">
            <FaPause />
          </button>
          <button onClick={resume} className="timer_button timer_button_resume">
            <FaStepForward />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Timer;
