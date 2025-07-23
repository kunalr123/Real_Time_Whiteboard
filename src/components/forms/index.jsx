import CreateRoomForm from "./createroomform";
import JoinRoomForm from "./joinroomform";
import './index.css'
const Forms = () => {
  return (
    <div className="row h-100 pt-5">
      <div className="col-md-4 mx-auto mt-5  border rounded-2 border-primary d-flex flex-column align-items-center form-box py-3 px-5 
      " >
        <h1 className="text-primary fw-bold " >Create Room</h1>
        <CreateRoomForm/>
      </div>

      <div className="col-md-4 mx-auto mt-5 border  rounded-2 d-flex flex-column align-items-center border-primary form-box py-3 px-5  ">
        <h1 className="text-primary fw-bold ">Join Room</h1>
        <JoinRoomForm/>

      </div>
    </div>
  );
};

export default Forms;
