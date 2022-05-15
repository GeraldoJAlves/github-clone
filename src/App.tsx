import "react-calendar-heatmap/dist/styles.css"
import React, { useState } from "react"
import { ThemeProvider } from "styled-components"
import { BrowserRouter, Routes, Route } from "react-router-dom"

import { Footer, Header } from "./components"
import { Repo, Profile } from "./pages"
import { GlobalStyles, ThemeName, themes } from "./styles"

const App: React.FC = () => {
  const [themeName, setThemeName] = useState<ThemeName>("light")
  const currentTheme = themes[themeName]

  return (
    <ThemeProvider theme={currentTheme}>
      <BrowserRouter>
        <Header themeName={themeName} setThemeName={setThemeName} />
        <Routes>
          <Route path="/" element={<Profile />} />
          <Route path="/:username" element={<Profile />} />
          <Route path="/:username/:reponame" element={<Repo />} />
        </Routes>
        <Footer />
        <GlobalStyles />
      </BrowserRouter>
    </ThemeProvider>
  )
}

export default App
