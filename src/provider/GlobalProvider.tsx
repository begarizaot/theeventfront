import { useDispatch, useSelector } from "react-redux";
import { ConfigProvider, theme } from "antd";
import { useEffect } from "react";

import { AppDispatch, RootState } from "../store";
import { getGlobal } from "../store/thunks";

import { GlobalContext } from "../context";
import { useTheme } from "../hooks";

import { MetaDataCom } from "../components";

interface CheckoutProviderProps {
  children: React.ReactNode;
}

export const GlobalProvider = ({ children }: CheckoutProviderProps) => {
  const { theme: currentTheme } = useTheme();

  const dispatch: AppDispatch = useDispatch();
  const { globalDate, loading } = useSelector(
    (state: RootState) => state.global
  );

  useEffect(() => {
    dispatch(getGlobal());
  }, [dispatch]);

  return (
    <GlobalContext.Provider value={{ globalDate, loading }}>
      <ConfigProvider
        theme={{
          algorithm:
            currentTheme === "dark"
              ? theme.darkAlgorithm
              : theme.defaultAlgorithm,
          token: {
            ...globalDate?.colors.reduce((acc: any, item) => {
              acc[item.label] = item.color;
              return acc;
            }, {}),
          },
          cssVar: true,
          hashed: true,
        }}
      >
        {/* <MetaDataCom {...globalDate?.metas} title={globalDate?.metas.title} /> */}

        {children}
      </ConfigProvider>
    </GlobalContext.Provider>
  );
};
