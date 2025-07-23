import { useState } from "react"
import Whiteboard from "../../components/whiteboard"

const RoomPage =()=>{

    const [tool,setTool] = useState("pencil")
    const [color,setColor] = useState("#000000")
    return(
        <div className="row">
            <h1 className="text-center py-4 ">White board Sharing App <span className="text-primary">[User Online:0]</span></h1>
            <div className="col-md-10 mx-auto mb-3 px-5 d-flex align-items-center justify-content-center">
            <div className="d-flex col-md-2 justify-content-center gap-1 ">
                <div className="d-flex gap-1">
                    <input type="radio" name="tool" value="pencil" id="pencil"
                    checked={tool == "pencil"}
                 onClick={setTool} onChange={(e)=>(e.target.value)} />
                    <label htmlFor="pencil">Pencil</label>
                </div>

                <div className="d-flex gap-1">
                    <input type="radio" name="tool" value="line"    checked={tool === "line"} onChange={(e)=>(e.target.value)} />
                     <label htmlFor="line">Line</label>
                </div>

                <div className="d-flex gap-1">
                    <input type="radio" name="tool" value="rect"    checked={tool === "rect"} onChange={(e)=>(e.target.value)} />
                     <label htmlFor="rect">Rect</label>
                </div>

            </div>
            <div className="col-md-3 mx-auto">
                <div className="d-flex  align-items-center">
                    <label htmlFor="color">Choose color:</label>
                    <input type="color" id="color"
                    className="mt-1 ms-2"
                    value={color}
                    onChange={(e)=>(e.target.value)} />
                </div>
            </div>

            <div className="col-md-3 d-flex gap-2">
               <button className="btn btn-primary mt-1" >Undo</button>
               <button className="btn btn-outline-primary mt-1" >Redo</button>
            </div>
            <div className="col-md-3">
                <button className="btn btn-danger">Clear Canvas</button>
            </div>

            </div>
            <div className="col-md-10 mt-4 mx-auto canvas-box">
                <Whiteboard/>
            </div>
            </div>
        

    )
}

export default RoomPage