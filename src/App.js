import { Route, Routes } from "react-router";
import "./App.css";
import AuthContainer from "./components/Auth";
import Main from "./pages/main";

import Article from "./pages/article";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchAuthMe } from "./store/authSlice/authSlice";

function App() {
  const select = useSelector((state) => ({
    isAuth: state.auth.isAuth,
  }));

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchAuthMe());
  }, []);

  return (
    <div className="App">
      <Routes>
        <Route path="/auth" element={<AuthContainer />} />
        <Route path="/" element={<Main />} />
        <Route path="/flowers/:id" element={<Article />} />
      </Routes>
    </div>
  );
}

export default App;
