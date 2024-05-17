import connetDB from "./lib/connetDB.js"
import getCombos from "./api/getCombos.js"
import getCorMons from "./api/CorRoute.js"
import mongoose from "mongoose"
import CharWin from "./_componets/CharWin.tsx"
import People from "./_componets/testdata.js"
export default async function Home() {
 
  const res = await getCombos()
let messy = res.map((item) => <CharWin key={item._id} char={item}/>)
  
// let messy = People.map((item) => <CharWin key={item._id} char={item}/>)


return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      {messy}ssg
    </main>
  );
}
