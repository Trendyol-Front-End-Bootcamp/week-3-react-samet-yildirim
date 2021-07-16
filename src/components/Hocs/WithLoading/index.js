import { useState } from "react"
import { LoadingProvider } from "../../../contexts/Loading"

const WithLoading=({children})=>{
    const [loading,setLoading]=useState(false)
    return(
        <LoadingProvider value={{loading,setLoading}}>{children}</LoadingProvider>
    )
}
export default WithLoading;