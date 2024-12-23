import { useEffect, useState } from "react";

import "./App.css";

import UserContextProvider from "./context/UserContextProvider";
import LogIn from "./Component/LogIn";
import Profile from "./Component/Profile";
import { ThemeProvider } from "./context/Theme";
import ThemeBtn from "./Component/ThemeBtn";
import Card from "./Component/Card";

function App() {
  const [themeMode, setThemeMode] = useState("light")

  const lightTheme = () => {
    setThemeMode("light")
  }

  const darkTheme = () => {
    setThemeMode("dark")
  }

  // actual change in theme

  useEffect(() => {
    document.querySelector('html').classList.remove("light", "dark")
    document.querySelector('html').classList.add(themeMode)
  }, [themeMode])
  
  return (
    <>
      {/* <UserContextProvider>
        <h1>React with ContextApi</h1>
        <LogIn />
        <Profile />
      </UserContextProvider> */}

<ThemeProvider value={{themeMode, lightTheme, darkTheme}}>
      <div className="flex flex-wrap min-h-screen items-center">
          <div className="w-full">
              <div className="w-full max-w-sm mx-auto flex justify-end mb-4">
                  <ThemeBtn />
              </div>

              <div className="w-full max-w-sm mx-auto">
                  <Card />
              </div>
          </div>
      </div>
    </ThemeProvider>
    </>
  );
}

export default App;
