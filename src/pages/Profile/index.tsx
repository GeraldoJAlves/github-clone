import React from "react"
import { ProfileData, RepoCard } from "../../components"

import { Container, Main, LeftSide, RightSide, Repos } from "./styles"

const Profile: React.FC = () => {
  return (
    <Container>
      <Main>
        <LeftSide>
          <ProfileData
            username={"geraldoalves"}
            name={"Geraldo Alves"}
            avatarUrl={"https://avatars.githubusercontent.com/u/11468921?v=4"}
            followers={5}
            following={3}
            company={"4yousee"}
            location={"Abaeté, Brazil"}
            email={"junior.alves.2007@gmail.com"}
            blog={"linkedin.com/in/geraldojosealves"}
          />
        </LeftSide>
        <RightSide>
          <Repos>
            <h2>Random Repo</h2>
            <div>
              {[1, 2, 3, 4, 5, 6].map((n) => (
                <RepoCard
                  key={n}
                  username={"geraldoalves"}
                  reponame={"youtube-content"}
                  description={"Contains all of my Youtube lessons code"}
                  language={n % 3 ? "TypeScript" : "JavaScript"}
                  stars={8}
                  forks={4}
                />
              ))}
            </div>
          </Repos>
        </RightSide>
      </Main>
    </Container>
  )
}

export default Profile
