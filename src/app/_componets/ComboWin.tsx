export default function ComboWin({combos}){
    return(
        <>
        <p>moves: {combos.moves}</p>
        <p>is true, : {`${combos.isTrue}`}</p>
        <video controls loop autoPlay muted

            src="https://utfs.io/f/66bee21e-1623-42ef-b24c-c1eb70bbb4a7-1b9fr.mp4"
            width={500}
            height={500}
            alt="nae"/>
        </>
    )
}