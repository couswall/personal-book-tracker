import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";
import { AppDispatch, RootState } from "@store/store";
import { useEffect } from "react";
import { getBookById } from "@store/index";
import { FlexContainer, LoadingSpinner, TitleH1 } from "@components/index";

export const Book = () => {
  const dispatch: AppDispatch = useDispatch();
  const { token } = useSelector((state: RootState) => state.auth);
  const { book, loading } = useSelector(
    (state: RootState) => state.getBookById
  );

  const { id } = useParams();

  useEffect(() => {
    if (!id) return;
    const params = { token, id };
    dispatch(getBookById(params));
  }, [id]);

  if (!loading) {
    return <LoadingSpinner />;
  }

  return (
    <FlexContainer
      JustifyContent="center"
      AlignItems="center"
      MinHeight="100vh"
    >
      <TitleH1>{book?.title}</TitleH1>
    </FlexContainer>
  );
};
