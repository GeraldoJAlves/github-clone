import React from "react"

import { ProfileData, RepoCard, RandomCalendar } from "../../components"
import {
  Container,
  Main,
  LeftSide,
  RightSide,
  Repos,
  CalendarHeading,
  RepoIcon,
  Tab,
} from "./styles"

const Profile: React.FC = () => {
  const TabContent = () => (
    <div className="content">
      <RepoIcon />
      <span className="label">Repositories</span>
      <span className="number">11</span>
    </div>
  )

  return (
    <Container>
      <Tab className="desktop">
        <div className="wrapper">
          <span className="offset" />
          <TabContent />
        </div>
        <span className="line" />
      </Tab>
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
          <Tab className="mobile">
            <TabContent />
            <span className="line" />
          </Tab>
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
          <CalendarHeading>
            Random calendar(do not represent actual data)
          </CalendarHeading>
          <RandomCalendar />
        </RightSide>
      </Main>
    </Container>
  )
}

export default Profile
