import React from "react"
import MemeData from "../MemeData"


function Main(){
    const [meme, setMeme] = React.useState({
        firstText:"",
        bottomText:"",
        randomImage:"https://i.imgflip.com/30b1gx.jpg",
    })
    const [memeImage, setMemeImage] = React.useState(MemeData)
    
    function getMeme(){
        let memeLength = memeImage.data.memes;
        let random = Math.floor(Math.random() * memeLength.length)
        let url = memeLength[random].url
        setMeme(prevImage => ({
            ...prevImage,
            randomImage:url
        }))
    }
    console.log(meme)
    function textImage(event){
        const {name,value} = event.target
        setMeme(prevMeme=>({
            ...prevMeme,
            [name]:value
        }))
    }
    return(
        <div className="w-1/2 h-3/4 py-6 overflow-scroll border border-slate-200 bg-gray-50 flex flex-col gap-14">
            <form className="h-1/4 p-4 flex flex-col gap-7 justify-center items-center">
                <div className="flex gap-3">
                    <div className="">
                        <input className="h-12 w-96 px-4 rounded-md shadow-md shadow-stone-300"
                         type="text"
                         placeholder="Top Text"
                         name="firstText"
                         value={meme.firstText}
                         onChange={textImage}
                        />
                    </div>
                    <div>
                        <input className="h-12 w-96 px-4 rounded-md shadow-md shadow-stone-300"
                        type="text"
                        placeholder="Down Text"
                        name="bottomText"
                        value={meme.bottomText}
                        onChange={textImage}
                        />
                    </div>
                </div>
                <div>
                    <input onClick={getMeme} type="button"  className="h-14 w-96 bg-emerald-400 text-white scale-100 focus:scale-98 hover:bg-emerald-500 font-mono font-bold text-xl shadow-md shadow-slate-500" name="Get click" value="click for get an image " />
                </div>
            </form>
            <div className=" relative">
                <img className="w-full -z-20 object-cover h-full" src={meme.randomImage} alt="vsv" />  
                <h2 className=" absolute z-50 text-6xl text-white font-bold font-mono left-8 top-3">{meme.firstText}</h2>
                <h2 className=" absolute z-50 text-6xl text-white font-bold font-mono left-8 bottom-3">{meme.bottomText}</h2>
            </div>
        </div>
    )
}

export default Main