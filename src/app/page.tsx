import connetDB from "./lib/connetDB.js"
import getCombos from "./api/getCombos.js"
import getCorMons from "./api/CorRoute.js"
import mongoose from "mongoose"
import CharWin from "./_componets/CharWin"
import People from "./_componets/testdata.js"
export default async function Home() {
 
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

  const res = await getCombos()

let people = res.map((item:people) => <CharWin key={item.ids} char={item}/>)
  
// let messy = People.map((item) => <CharWin key={item._id} char={item}/>)


return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      {people}
      ssg
      
    </main>
  );
}
