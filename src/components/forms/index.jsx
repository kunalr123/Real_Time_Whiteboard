import Creater from "./createroomform/index.jsx";

const Forms = () => {
  return (
    <div className="flex flex-row items-center justify-center  h-screen gap-45 ">
      {/* Create Room box */}
      <div className=" w-80 h-80 border-1 border-blue-500 flex justify-center pt-5 ">
        <h1 className="text-blue-600 font-bold text-3xl ">Create Room</h1>
        {/* <Creater/> */}
      </div>

      {/* Join Room box */}
      <div className="w-80 h-80 border-1 border-blue-500 flex justify-center pt-5 ">
        <h1 className="text-blue-600 font-bold text-3xl">Join Room</h1>
      </div>
    </div>
  );
};

export default Forms;
