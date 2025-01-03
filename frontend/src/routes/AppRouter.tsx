import { BrowserRouter, Route, Routes } from "react-router"
import { SignIn } from "../pages/SignIn/SignIn"

export const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SignIn/>} />
      </Routes>
    </BrowserRouter>
  )
}
