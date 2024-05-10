import connetDB from "./lib/connetDB.js"
import getCombos from "./api/route.js"
import getCorMons from "./api/CorRoute.js"
import mongoose from "mongoose"
export default async function Home() {
  const soup = await Cormon.find()
  console.log(soup)
  const res = await getCorMons()
  console.log(res)
let messy = soup.map((item) => item.move )
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      {messy}ss
    </main>
  );
}
