type AuthButtonProps = {
    title:string;
} &  React.ButtonHTMLAttributes<HTMLButtonElement>

function AuthButton({title}:AuthButtonProps) {
  return (
    <button 
    type="submit"
    className="rounded-[48px] mr-1 w-full lg:w-full cursor-pointer py-3 hover:drop-shadow-[0px_4px_0px_rgba(255,71,126,0.3)] transition-all duration-300 text-white bg-linear-to-r from-[#8B2FC9] to-[#FF477E] hover:to-[#CC3965] hover:from-[#6F26A1]">
        {title}
    </button>
  )
}

export default AuthButton