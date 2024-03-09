import { RouterProvider, createBrowserRouter } from "react-router-dom";

import RootLayout from "./pages/RootLayout";
import LessonPage from "./pages/LessonPage";
import LoginPage from "./pages/LoginPage";
import DiaryPage from "./pages/DiaryPage";
import Notification from "./pages/Notification";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      { index: true, path: "", element: <LessonPage /> },
      { path: "/diary", element: <DiaryPage /> },
      { path: "/notification", element: <Notification /> },
    ],
  },
  { path: "/login", element: <LoginPage /> },
]);
function App() {
  return <RouterProvider router={router} />;
}

export default App;
