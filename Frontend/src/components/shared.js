import { useState, useContext } from "react";
import { SocketContext } from "../context/socket";

import CodeEditor from "../screens/codeEditor";
// import FadeIn from "react-fade-in";

const SharedContent = ({ isBoardActive, setBoardActive }) => {
  const socket = useContext(SocketContext);
  // const [canvas, setCanvas] = useState(null);
  // const [color, setColor] = useState("black");
  const [code, setCode] = useState(`function add(a, b) {\n  return a + b;\n}`);
  // const canvasRef = useRef(null);
  // const [data, setData] = useState("");
  // const [radius, setBrushRadius] = useState(3);

  // useEffect(() => {
  //   const canvas = canvasRef.current;

  //   if (!canvas) throw new Error("This is bad");
  //   setCanvas(canvas);

  //   socket.on("receive-drawing-data", throttle(handleReceivedData, 1000));

  //   socket.on("receive-editor-data", throttle(handleReceivedEditorData, 1000));
  //   // canvas.loadSaveData(data);
  // }, []);

  // const handleReceivedData = (data) => {
  //   console.log("Updating data");

  //   setData(data);
  // };

  // const handleReceivedEditorData = (data) => {
  //   console.log("Received data" + data);
  //   console.log(data);
  //   setCode(data);
  // };

  // const throttle = (callback, delay) => {
  //   let previousCall = new Date().getTime();
  //   return function () {
  //     const time = new Date().getTime();

  //     if (time - previousCall >= delay) {
  //       previousCall = time;
  //       callback.apply(null, arguments);
  //     }
  //   };
  // };
  // socket.on("receive-drawing-data", throttle(handleReceivedData, 1000));

  // socket.on("receive-editor-data", throttle(handleReceivedEditorData, 1000));

  // const handleChange = (change) => {
  //   console.log("Sending");
  //   socket.emit("drawing-data", change.getSaveData());
  // };

  // const clearDrawing = () => {
  //   canvas.clear();
  // };

  // const undo = () => {
  //   canvas.undo();
  // };

  return (
    <div className="flex flex-grow font-body">
      {isBoardActive ? (
       
        console.log("Its working fine")
      ) : (
        <CodeEditor socket={socket} setCode={setCode} code={code} />
      )}

    </div>
  );
};

export default SharedContent;
