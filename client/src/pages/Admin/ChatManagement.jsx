import AdminLayout from "./AdminLayout"
import Table from "../../components/shared/Table"
import { useEffect, useState } from "react"
import { dashboardData } from "../../constants/sampleData"



const columns = [
  {
    field:"id",
    headerName:"ID",
    width:200,
  },
  {
    field:"avatar",
    headerName:"Avatar",
    width:150,
  },
  {
    field:"name",
    headerName:"Name",
    width:200,
  },
  {
    field:"totalMembers",
    headerName:"Total Members",
    width:200,
  },
  {
    field:"members",
    headerName:"Members",
    width:150,
  },
  {
    field:"totalMessages",
    headerName:"Total Messages",
    width:150
  },
  {
    field:"creator",
    headerName:"Created",
    width:150
  },
]

const ChatManagement = () => {
  const [rows,setRows]= useState([])
  useEffect(()=>{
    setRows(dashboardData.chats)
  },[])
  return (
    <AdminLayout>
        <Table columns={columns} rows={rows} />
    </AdminLayout>
  )
}
export default ChatManagement