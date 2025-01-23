import { Navigate, Route, Routes } from "react-router"
import { MyBooks, Login, SignUp } from "../pages"
import { privateRoutes, publicRoutes } from "./routes";
import { DashboardLayout } from "../views/DashboardLayout";

export const AppRouter = () => {
  
  const isAuthenticated = true;
  
  return (
      <Routes>
        {isAuthenticated ? (
            <Route element={<DashboardLayout/>}>
              <Route path="/" element={<h1>{'HomePage'}</h1>}/>
              <Route path='/*' element={ <h1>{'404 error'}</h1>  } />
              <Route path={privateRoutes.myBooks} element={<MyBooks/>}/>
            </Route>
        ) : (
            <>
              <Route path={publicRoutes.login} element={<Login/>}/>
              <Route path={publicRoutes.signUp} element={<SignUp/>}/>
              <Route path='/*' element={ <Navigate to={publicRoutes.login}/>} />
            </>
        )}
      </Routes>
  )
}
