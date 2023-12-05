import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import SettingPage from './pages/setting'
import LoginPage from './pages/login/index'
import Navbar from './components/navBar'

import { ThemeContextProvider } from "./context/themeContext";
import RedirectAuthorized from "./components/auth/redirect-authorized"
import AuthRequired from "./components/auth/auth-required"

import AppProvider from "./AppProvider";

import Toaster from './components/base/toaster';

function App() {

  const router = createBrowserRouter([
   
    {
      path: "/setting",
      element:
        <AuthRequired redirect="/login">
          <SettingPage />
          <Navbar />
        </AuthRequired>
    },
    {
      path: "/login",
      element: <RedirectAuthorized redirect="/dashboard"><LoginPage /></RedirectAuthorized>
    }
  ]);

  return (
    <div className="App">
      <AppProvider>
        <ThemeContextProvider>
          <RouterProvider router={router} />
          <Toaster />
        </ThemeContextProvider>
      </AppProvider>
    </div>
  );
}

export default App;
