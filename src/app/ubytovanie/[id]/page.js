import react from "react"

export default function page({params}){
    const ubytovanieId = params.id
    return(
        <div> 
            {ubytovanieId}
        </div>
    )
}