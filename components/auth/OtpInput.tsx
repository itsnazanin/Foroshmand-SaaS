"use client";

import { useRef, useState } from "react";

type OtpInputProps = {
  onComplete: (otp: string) => void;
};

function OtpInput({ onComplete }: OtpInputProps) {
  const [otp, setOtp] = useState(["", "", "", "", "", ""]);

  const inputs = useRef<HTMLInputElement[]>([]);

  const handleChange = (value: string, index: number) => {
    if (!/^[0-9۰-۹]?$/.test(value)) return;

    const newOtp = [...otp];
    newOtp[index] = value;

    setOtp(newOtp);

    
    if(newOtp.every((item)=> item !== "")) {
        onComplete(newOtp.join(""))
    }

    
    if (value && index < 5) {
        setTimeout(()=> {
        inputs.current[index + 1]?.focus();
        },0)
    }
  };

  const handleKeyDown = (
    e: React.KeyboardEvent<HTMLInputElement>,
    index: number
  ) => {
    if (
      e.key === "Backspace" &&
      otp[index] === "" &&
      index > 0
    ) {
      inputs.current[index - 1]?.focus();
    }
  };

  return (
    <div className="flex w-full justify-end lg:gap-[2%] gap-[3%] pr-1 relative lg:left-4 mt-4 mb-8" dir="ltr">
      {otp.map((item, index) => (
        <input
          key={index}
          type="text"
          autoComplete="one-time-code"
          inputMode="numeric"
          ref={(element) => {
            if (element) {
              inputs.current[index] = element;
            }
          }}
          value={item}
          maxLength={1}
          onChange={(e) =>
            handleChange(e.target.value, index)
          }
          onKeyDown={(e) =>
            handleKeyDown(e, index)
          }
          className="w-12 h-12 lg:mr-4 rounded-xl text-center caret-transparent
          text-xl text-white dark:bg-[#381350] bg-[#f2f1f1] outline-[#A259D4]"
        />
      ))}
    </div>
  );
}

export default OtpInput;