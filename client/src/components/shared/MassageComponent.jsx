/* eslint-disable react/prop-types */

import { Box, Typography } from "@mui/material";
import moment from "moment";
import { memo } from "react";
import { fileFormat } from "../../lib/features";
import RenderAttachment from "./RenderAttachment";

const MassageComponent = ({ massage, user }) => {
  const { sender, content, attachments = [], createdAt } = massage;
  const sameSender = sender?._id === user?._id;
  const timeAgo = moment(createdAt).fromNow()
  return (
    <div
      style={{
        alignSelf: sameSender ? "flex-end" : "flex-start",
        backgroundColor: "white",
        color: "black",
        borderRadius: "5px",
        padding: "0.5rem",
        width: "fit-content",
      }}
    >
      {
        !sameSender && <Typography color={"#778c74"} fontWeight={"600"} variant="caption">{sender.name}</Typography>
      }
      {
        attachments.length >0 && attachments.map((att, index)=>{
            const url = att.url
            const file = fileFormat(url)
            return(<Box key={index}>
                <a href={url} target="_blank" download style={{
                    color:"black"
                }}>
                    {
                        RenderAttachment(file, url)
                    }
                </a>
            </Box>)
        })
      }
      {
        content && <Typography >{content}</Typography>
      }
        <Typography variant="caption" color={"gray"}>{timeAgo}</Typography>
      
    </div>
  );
};

export default memo(MassageComponent);
