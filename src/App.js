import { Route, Routes } from "react-router";
import "./App.css";
import AuthContainer from "./components/Auth";
import Main from "./pages/main";

import Article from "./pages/article";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchAuthMe } from "./store/authSlice/authSlice";
import CartContainer from "./components/Cart";
import CheckoutContainer from "./components/Checkout";
import WithAuth from "./components/hoc/WithAuth";
import Chat from "./components/Chat";

function App() {
  const select = useSelector((state) => ({
    isAuth: state.auth.isAuth,
    init: state.auth.init,
  }));

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchAuthMe());
  }, []);

  if (!select.init) {
    return <div>Загрузка</div>;
  }

  return (
    <div className="App">
      <Routes>
        <Route path="/auth" element={<AuthContainer />} />
        <Route path="/" element={<Main />} />
        <Route path="/flowers/:id" element={<Article />} />
        <Route
          path="/cart"
          element={
            <WithAuth>
              <CartContainer />
            </WithAuth>
          }
        />
        <Route
          path="/chat"
          element={
            <WithAuth>
              <Chat />
            </WithAuth>
          }
        />
        <Route
          path="/checkout/:pay?"
          element={
            <WithAuth>
              <CheckoutContainer />
            </WithAuth>
          }
        />
      </Routes>
    </div>
  );
}

export default App;
