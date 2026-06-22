type Props = {
    index : number
    onClick: ()=>void
    content: string
}

function ClickButton ({index,onClick,content}:Props) {
    return(
                      <button
                        key={index}
                        onClick={onClick}
                        className="
                          w-24 h-24
                          rounded-3xl
                          bg-zinc-800
                          border
                          border-zinc-700
                          text-4xl
                          shadow-[0_6px_0_rgb(39,39,42)]
                          hover:-translate-y-1
                          hover:bg-zinc-700
                          active:translate-y-1
                          active:shadow-[0_2px_0_rgb(39,39,42)]
                          transition-all
                          duration-150
                        "
                      >{content}</button>
    )
}
export default ClickButton