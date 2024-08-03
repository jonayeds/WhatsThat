/* eslint-disable react/prop-types */
import { Avatar, AvatarGroup, Box, Stack } from "@mui/material"
import { transformImage } from "../../lib/features"

const AvatarCard = ({avatar=[] , max=4}) => {

  return (
    <Stack direction={"row"} spacing={0.5}>
        <AvatarGroup max={max}>
            <Box width={"8rem"}  height={"3rem"} position={"relative"}>
            {
                avatar.map((i, index)=>(
                    <Avatar
                        key={index} 
                        src={transformImage(i)}
                        alt={`Avatar ${index}`}
                        sx={{
                            width:"3rem",
                            height: "3rem",
                            position:"absolute",
                            left:{
                                xs: `${1 + index}rem`,
                                sm: `${0.5+index}rem`,
                            }                                
                        }}
                    />
                ))
            }
            </Box>
        </AvatarGroup>
    </Stack>
  )
}

export default AvatarCard