import Logo from "../images/meme.jpeg"


export default function Header(){
    return(
        <nav className="text-white flex justify-between items-center bg-emerald-500 py-2 px-12 w-1/2">
            <div className="flex items-center gap-4">
                <div className="h-20 w-20">
                <img className="h-full w-full object-cover rounded-2xl" src={Logo} alt="" />
                </div>
                <h2 className=" text-3xl font-mono">Meme Genrator</h2>
            </div>
            <div>
                <h3 className="text-2xl font-serif">React--Project</h3>
            </div>
        </nav>
    )
}





