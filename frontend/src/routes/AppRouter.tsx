import { Navigate, Route, Routes } from "react-router";
import { useSelector } from "react-redux";
import { MyBooks, Login, SignUp, Book } from "@pages/index";
import { RootState } from "@store/store";
import { privateRoutes, publicRoutes } from "@routes/routes";
import { DashboardLayout, PublicLayout } from "@views/index";
import { AuthStatus } from "@store/auth/interfaces";

export const AppRouter = () => {
  const authStatus = useSelector((state: RootState) => state.auth.status);
  const isAuthenticated = authStatus === AuthStatus.Authenticated;

  return (
    <Routes>
      {isAuthenticated ? (
        <Route element={<DashboardLayout />}>
          <Route path="/" element={<h1>{"HomePage"}</h1>} />
          <Route path="/*" element={<h1>{"404 error"}</h1>} />
          <Route path={privateRoutes.myBooks} element={<MyBooks />} />
          <Route path={privateRoutes.book} element={<Book />} />
        </Route>
      ) : (
        <>
          <Route element={<PublicLayout />}>
            <Route path={publicRoutes.login} element={<Login />} />
            <Route path={publicRoutes.signUp} element={<SignUp />} />
            <Route path="/*" element={<Navigate to={publicRoutes.login} />} />
          </Route>
        </>
      )}
    </Routes>
  );
};
