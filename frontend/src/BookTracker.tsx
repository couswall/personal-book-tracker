import { BrowserRouter } from "react-router"
import { AppRouter } from "./routes/AppRouter"
import { Provider } from "react-redux"
import { store } from "./store/store"

export const BookTracker = () => {
  return (
    <>
    <Provider store={store}>
      <BrowserRouter>
        <AppRouter/>
      </BrowserRouter>
    </Provider>
    </>
  )
}
