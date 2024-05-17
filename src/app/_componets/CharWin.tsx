import Link from "next/link"
import ComboWin from "./ComboWin"
import People from "./testdata.js"
import Image from "next/image"
export default function CharWin ({ char }){
    let stuff = char.combos.map((item)=> <ComboWin key={item} combos={item}/> )
    console.log(char.ids)
    return(
        <>
        <main className="bg-slate-500 rounded-md border-4 border-red-400">
        <Link href={`/${char.ids}`}>
            <p>{char.name}</p>
            
            
            <p>{char.img}</p>
            
            </Link>
            
        </main>
        </>
    )
}


