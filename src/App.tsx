import { Outlet } from "react-router-dom";
import { ProductProps } from "../src/types/product";

import * as S from "../src/styles/App";

import { SkeletonTheme } from "react-loading-skeleton";

type ContextType = {products: ProductProps | null};

const App = () => {

  return (
    <>
      <S.App>
        <SkeletonTheme baseColor="#d1d1d1" highlightColor="#b6b6b6">
          <Outlet />
        </SkeletonTheme>
      </S.App>
    </>
  );
};

export default App;
