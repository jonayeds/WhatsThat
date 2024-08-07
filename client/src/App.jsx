import  {lazy, Suspense} from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ProtectedRoute from './components/auth/ProtectedRoute';
import { LayoutLoader } from './components/layout/Loaders';
const Home = lazy(()=>import("./pages/Home"))
const Login = lazy(()=>import("./pages/Login"))
const Chat = lazy(()=>import("./pages/Chat"))
const Groups = lazy(()=>import("./pages/Groups"))
const NotFound = lazy(()=>import("./pages/NotFound"))
const AdminLogin = lazy(()=>import("./pages/Admin/AdminLogin"))
const Dashboard = lazy(()=>import("./pages/Admin/Dashboard"))
let user = true
const App = () => {
  return (
    <BrowserRouter>
      <Suspense fallback={<LayoutLoader />}>
      <Routes>
        <Route  element={<ProtectedRoute user={user} />}>
        <Route path="/" element={<Home />}/>
        <Route path="/chat/:chatId" element={<Chat />}/>
        <Route path="/group" element={<Groups />}/>
        </Route>
        <Route path="/login" element={<ProtectedRoute user={!user} redirect='/'>
          <Login />
        </ProtectedRoute>}/>
        <Route path='/admin' element={<AdminLogin/>} />
        <Route path='/admin/dashboard' element={<Dashboard/>} />
        <Route path='*' element={<NotFound />}/>
      </Routes>
      </Suspense>
    </BrowserRouter>
  );
};

export default App;
