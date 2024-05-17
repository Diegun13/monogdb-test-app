import getCombos from "../api/getCombos"
import People from "../_componets/testdata.js"
import ComboWin from "../_componets/ComboWin"




// export async function generateStaticParams() {
//     const res = await getCombos()
//     const iceMan = res.map((item)=> ( {id: item.ids}))
// return [...iceMan]
// }

async function getPeople(id: string){
    const res = await getCombos()
    return res[id]
}

export default async function Page({ params }: {
    params: {id: string}
}){


interface people{
    id: string
    name: string
}

    const Meet = await getPeople(params.id)
    console.log(Meet)
    let listofMoves = Meet.combos.map((item:people)=> <ComboWin key={item.id} combos={item}/>)
    // console.log(Meet)
    return(
        <main className="flex flex-col">
            <h1>ID: {Meet.name}</h1>
            {listofMoves? listofMoves : `notheing here for ${params.id}`}
        </main>
    )
}