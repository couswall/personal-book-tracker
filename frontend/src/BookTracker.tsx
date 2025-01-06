import { BrowserRouter } from "react-router"
import { AppRouter } from "./routes/AppRouter"

export const BookTracker = () => {
  return (
    <>
      <BrowserRouter>
        <AppRouter/>
      </BrowserRouter>
    </>
  )
}
