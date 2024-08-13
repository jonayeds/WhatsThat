import AdminLayout from "./AdminLayout"
const columns = [
  {
    field:"id",
    headerName:"ID",
    width:200,
  },
  {
    field:"attachments",
    headerName:"Attachments",
    width:150,
  },
  {
    field:"content",
    headerName:"Content",
    width:200,
  },
  {
    field:"sender",
    headerName:"Sent By",
    width:200,
  },
  {
    field:"chat",
    headerName:"Chat",
    width:150,
  },
  {
    field:"groupChat",
    headerName:"Group Chat",
    width:150
  },
  {
    field:"createdAt",
    headerName:"Time",
    width:150
  },
]
const MessageManagement = () => {
  return (
    <AdminLayout>
        <div>MessageManagement</div>
    </AdminLayout>
  )
}

export default MessageManagement