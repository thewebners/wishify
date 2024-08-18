import { useEffect } from "react";




var NeedHeader=(props)=>
{
    useEffect(()=>
    {
        sessionStorage.setItem("uitype", 'Header');
    }, [])
    return(
        <>
         <props.MyComp/>
        </>
    )
}


export default NeedHeader;