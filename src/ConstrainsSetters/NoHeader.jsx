import { useEffect } from "react";




var NoHeader=(props)=>
{
    useEffect(()=>
    {
        sessionStorage.setItem("uitype", 'false');
    }, [])
    return(
        <>
         <props.MyComp/>
        </>
    )
}


export default NoHeader;