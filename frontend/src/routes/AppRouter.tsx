import { Navigate, Route, Routes } from "react-router"
import { MyBooks, SignIn, SignUp } from "../pages"
import { privateRoutes, publicRoutes } from "./routes";

export const AppRouter = () => {
  
  const isAuthenticated = false;
  
  return (
      <Routes>
        {isAuthenticated ? (
          <>
            <Route path="/" element={<h1>{'HomePage'}</h1>}/>
            <Route path='/*' element={ <h1>{'404 error'}</h1>  } />
            <Route path={privateRoutes.MyBooks} element={<MyBooks/>}/>
          </>
        ) : (
            <>
              <Route path={publicRoutes.SignIn} element={<SignIn/>}/>
              <Route path={publicRoutes.SignUp} element={<SignUp/>}/>
              <Route path='/*' element={ <Navigate to={publicRoutes.SignIn}/>} />
            </>
        )}
      </Routes>
  )
}
