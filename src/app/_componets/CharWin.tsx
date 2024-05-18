import Link from "next/link"
import ComboWin from "./ComboWin"
import People from "./testdata.js"
import Image from "next/image"
interface combos{
    id: string
    moves: string
    isTrue: boolean
    notes: string
}

interface people{
    id: string
    name: string
    combos: Array<combos>
    ids:string
    img:string
}
export default function CharWin ({ char}: {char:people}){
    

    // let stuff = char.combos.map((item)=> <ComboWin key={item.id} combos={item}/> )
    return(
        <>
        <main className="bg-slate-500 rounded-md border-4 border-red-400">
        <Link href={`/${char.name}`}>
            <p>{char.name}</p>
            
            
            <p>{char.img}</p>
            
            </Link>
            
        </main>
        </>
    )
}


