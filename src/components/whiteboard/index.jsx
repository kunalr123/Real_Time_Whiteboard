
import rough from "roughjs";
import {useEffect} from "react";


const Whiteboard=({canvasRef,ctxRef})=>{

    useEffect(()=>{
        const canvas = canvasRef.current;
        const ctx = canvas.getContext('2d');

        ctxRef.current = ctx;
    },[])


    const handlemousedown = (e)=>{
        console.log("Mouse down event", e);
    }

    const handlemousemove = (e)=>{
        console.log("Mouse Move event", e);
    }
    const handlemouseup = (e)=>{
        console.log("Mouse Up event", e);
    }

    return(
     <canvas ref={canvasRef}  onMouseDown = {handlemousedown} onMouseMove={handlemousemove} onMouseUp={handlemouseup} className="border border-dark border-3 h-100 w-100 ">

     </canvas>
    )
}
export default Whiteboard