"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

function SendCodeUi() {

  const [timer, setTimer] = useState(59);
  const [isRunning, setIsRunning] = useState(true);


  useEffect(() => {
    if (!isRunning) return;

    const interval = setInterval(() => {
      setTimer((prev) => {

        if (prev <= 1) {

          clearInterval(interval);
          setIsRunning(false);

          return 0;
        }

        return prev - 1;

      });

    }, 1000);

    return () => clearInterval(interval);

  }, [isRunning]);


  const handleResendCode = async () => {

    try {

      setTimer(59);
      setIsRunning(true);

    } catch (error) {
      console.log(error);
    }

  };


  return (
    <div className='flex justify-between w-fit lg:gap-43.75 md:gap-[40%] gap-[30%] pt-5 whitespace-nowrap'>
          <span className='flex gap-2'>
            <p className='dark:text-[#E4E4E4] text-[#737373] mr-3'>اشتباه وارد کرده اید؟</p>
            <Link className='text-[#B982DF]' href="/signup">
          ویرایش 
            </Link>
          </span>
          <span className='text-[#FFFFFF] text-[16px]'>
           {timer > 0 ? (
            <span className='flex'>
                <p>00:{String(timer).padStart(2, "0")}</p>
            </span>
            ) : (
            <button onClick={handleResendCode} className='dark:text-white text-[#B982DF] cursor-pointer'>
             ارسال مجدد
            </button>
            )}
          </span>
        </div>
  )
}

export default SendCodeUi