import { useState } from "react";
import { Warning } from "./Warning";


const TextArea = ({text ,setText }) => {

const [TextWarning,setTextWarning] = useState("");


const handleChange= (e)=>{
  let newTex= e.target.value;
  if(newTex.includes("<script>")){
    setTextWarning("Please no script allowed ")
    newTex = newTex.replace("<script>","");

  }else if(newTex.includes('@')){
    setTextWarning("Please no  @ allowed" );
     newTex = newTex.replace("@","");
  }else{
    setTextWarning("");
  }
  setText(newTex);
 }
  return (
    <div className="textarea">
      <textarea value={text} 
    placeholder="Enter your text" 
    spellCheck="false" 
    className="textarea" 
     onChange={handleChange}
       />
      { TextWarning ? <Warning TextWarning={TextWarning} /> : null }
       
    </div>
  );
}


export default TextArea