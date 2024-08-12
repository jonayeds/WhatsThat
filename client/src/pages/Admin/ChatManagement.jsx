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
    field:"username",
    headerName:"username",
    width:200,
  },
  {
    field:"friends",
    headerName:"Friends",
    width:150,
  },
  {
    field:"groups",
    headerName:"Groups",
    width:150
  },
]

const ChatManagement = () => {
  const [rows,setRows]= useState([])
  useEffect(()=>{
    setRows(dashboardData.users)
  },[])
  return (
    <AdminLayout>
        <Table columns={columns} rows={rows} />
    </AdminLayout>
  )
}
export default ChatManagement