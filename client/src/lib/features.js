import moment from "moment"

const fileFormat = (url="")=>{
    const fileExtension = url.split(".").pop()
    if(fileExtension ==="mp4" || fileExtension === "webm" || fileExtension === "ogg") return "video"

    if(fileExtension ==="mp3" || fileExtension === "wav") return "audio"
    if(fileExtension ==="png" || fileExtension === "jpg" || fileExtension === "jpeg" || fileExtension === "gif") return "image"

    return "file"
}

const transformImage = (url)=> url

const getLast7Days = ()=>{
    const currentDate = moment()
    const last7Days = []
    for(let i=0; i<7;i++){
        const day = currentDate.clone().subtract(i, "days")
        const dayName = day.format("dddd")
        last7Days.push(dayName)
    }
    return last7Days.reverse()
}

export {fileFormat , transformImage, getLast7Days}