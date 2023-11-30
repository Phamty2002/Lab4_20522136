// App.js
import React, { Suspense } from "react";
import FadeLoader from "react-spinners/FadeLoader";
import MyPage from "./MyPage";

function App() {
  return (
    <Suspense fallback={<FadeLoader color="lightblue" size={150} />}>
      <MyPage />
    </Suspense>
  );
}

export default App;
