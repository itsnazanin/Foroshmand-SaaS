
function GoogleButton() {

  // const loginWithGoogle = () => {
  //    window.location.href = "http://localhost:5000/api/auth/google"
  // }

  return (
    <>
    <div className='flex flex-col'>
        <div className='flex gap-2 text-[#E4E4E4]'>
           <hr />
           <p>یا</p>
           <hr /> 
        </div>
        <button className='rounded-[48px] text-white text-[14px] bg-[#A259D4] py-3 dark:bg-[#8B2FC9]'>
            <GoogleButton />
            ادامه با گوگل
        </button>
    </div>
    </>
  )
}

export default GoogleButton