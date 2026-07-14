type AuthButtonProps = {
    title:string;
} &  React.ButtonHTMLAttributes<HTMLButtonElement>

function AuthButton({title}:AuthButtonProps) {
  return (
    <button className="rounded-[48px] cursor-pointer py-3 hover:drop-shadow-[0px_4px_0px_rgba(255,71,126,0.4)] transition-all duration-350 text-white bg-linear-to-r from-[#8B2FC9] to-[#FF477E]">
        {title}
    </button>
  )
}

export default AuthButton