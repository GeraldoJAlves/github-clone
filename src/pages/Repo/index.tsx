import React from "react"
import { Link } from "react-router-dom"

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

interface Props {
  username: string
  reponame: string
}

const Repo: React.FC<Props> = ({ username, reponame }) => {
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
          <b>2</b>
          <span>stars</span>
        </li>
        <li>
          <ForkIcon />
          <b>3</b>
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
