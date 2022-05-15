import React, { useState } from "react"
import { useNavigate } from "react-router-dom"

import { Container, SearchForm, GithubLogo } from "./styles"

const Header: React.FC = () => {
  const [search, setSearch] = useState("")
  const navigate = useNavigate()
  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault()

    navigate("/" + search.toLowerCase().trim())
  }

  return (
    <Container>
      <GithubLogo />
      <SearchForm onSubmit={handleSubmit}>
        <input
          value={search}
          onChange={(e) => setSearch(e.currentTarget.value)}
          placeholder="Enter Username or Repo..."
        />
      </SearchForm>
    </Container>
  )
}

export default Header
