import React from "react"
import { ProfileData } from "../../components"

import { Container, Main, LeftSide, RightSide } from "./styles"

const Profile: React.FC = () => {
  return (
    <Container>
      <Main>
        <LeftSide>
          <ProfileData
            username={'geraldoalves'}
            name={'Geraldo Alves'}
            avatarUrl={'https://avatars.githubusercontent.com/u/11468921?v=4'}
            followers={5}
            following={3}
            company={'4yousee'}
            location={'Abaeté, Brazil'}
            email={'junior.alves.2007@gmail.com'}
            blog={'linkedin.com/in/geraldojosealves'}
          />
        </LeftSide>
        <RightSide>
        </RightSide>
      </Main>
    </Container>
  )
}

export default Profile