import {  FileOpen as FileOpenIcon } from "@mui/icons-material";
import { transformImage } from "../../lib/features";

const RenderAttachment = (file, url) => {
  switch (file) {
    case "video":
       return <video src={url} preload="none" width={"200px"} controls/>
        
    case "image":
       return (<img src={transformImage(url)} alt="attachment" width={"200px"} height={"150px"} style={{
            objectFit:"contain"
        }} />)
        
    case "audio":
        return  (<audio src={transformImage(url)} alt="attachment" width={"200px"} height={"150px"} style={{
            objectFit:"contain"
        }} />)
        
  
    default:
       return <FileOpenIcon/>
  }
}

export default RenderAttachment