import React, { useEffect, useState } from "react"
import { Link, useParams } from "react-router-dom"
import { APIRepo } from "../../@types"

import {
  Container,
  Breadcrumb,
  RepoIcon,
  Stats,
  StarIcon,
  ForkIcon,
  LinkButton,
  GithubIcon,
} from "./styles"

interface Data {
  repos?: APIRepo
  error?: string
}

const Repo: React.FC = () => {
  const { username = "GeraldoJAlves", reponame = "" } = useParams()
  const [data, setData] = useState<Data>()

  useEffect(() => {
    Promise.all([
      fetch(`https://api.github.com/repos/${username}/${reponame}`),
    ]).then(async (responses) => {
      const [reposResponse] = responses

      if (reposResponse.status === 404) {
        setData({ error: "Repo not found" })
        return
      }

      const repos = await reposResponse.json()

      setData({
        repos,
      })
    })
  }, [username, reponame])

  if (data?.error) {
    return <h1>data.error</h1>
  }

  if (!data?.repos) {
    return <h1>Loading...</h1>
  }

  return (
    <Container>
      <Breadcrumb>
        <RepoIcon />
        <Link className={username} to={`/${username}`}>
          {username}
        </Link>
        <span>/</span>
        <Link className={reponame} to={`/${username}/${reponame}`}>
          {reponame}
        </Link>
      </Breadcrumb>
      <p>Contains all of my YouTube lessons code.</p>
      <Stats>
        <li>
          <StarIcon />
          <b>{data.repos.stargazes_count}</b>
          <span>stars</span>
        </li>
        <li>
          <ForkIcon />
          <b>{data.repos.forks}</b>
          <span>forks</span>
        </li>
      </Stats>
      <LinkButton href={"https://github.com/GeraldoJAlves/rede-neural"}>
        <GithubIcon />
        <span>View on Github</span>
      </LinkButton>
    </Container>
  )
}

export default Repo
