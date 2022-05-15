import "react-calendar-heatmap/dist/styles.css"

import React from "react"

import { BrowserRouter, Routes, Route } from "react-router-dom"
import { Footer, Header } from "./components"
import { Repo, Profile } from "./pages"
import { GlobalStyles } from "./styles"

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Profile />} />
        <Route path="/:username" element={<Profile />} />
        <Route path="/:username/:reponame" element={<Repo />} />
      </Routes>
      <Footer />
      <GlobalStyles />
    </BrowserRouter>
  )
}

export default App
