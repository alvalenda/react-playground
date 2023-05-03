import DashboardCard08 from '@/components/Dashboard/DashBoardCard08'
import DashboardCard09 from '@/components/Dashboard/DashBoardCard09'
import DashboardCard01 from '@/components/Dashboard/DashboardCard01'
import DashboardCard02 from '@/components/Dashboard/DashboardCard02'
import DashboardCard03 from '@/components/Dashboard/DashboardCard03'
import DashboardCard04 from '@/components/Dashboard/DashboardCard04'
import DashboardCard11 from '@/components/Dashboard/DashboardCard11'
import {
  ContentArea,
  DashBoardContainer,
  MainContent,
  ScreenContainer,
} from '@/components/Dashboard/styles'
import { EmotionChart } from '@/components/EmotionChart'
import { PolarChart } from '@/components/EmotionChart/PolarChart'
import { Footer } from '@/components/Footer'
import { Header } from '@/components/Header'
import { LoginForm } from '@/components/LoginForm'
import { LoginTitle } from '@/components/LoginTitle'
import LineChart01 from '@/components/charts/LineChart01'
import { StyledCard } from '@/components/styles/StyledCard'
import { ScreenWrapper } from '@/components/styles/StyledScreenWrapper'
import { useNavigate } from 'react-router-dom'
import styled from 'styled-components'

type Props = {}

export function LoginPage({}: Props) {
  const navigate = useNavigate()

  const NavtoAbout = () => {
    navigate('/about')
  }

  return (
    <>
      <ScreenContainer>
        <ContentArea>
          <MainContent>
            {/* <Header /> */}
            {/* <EmotionChart record={{ bsi: 45, ham_a: 60, ham_d: 30, k10: 15 }} /> */}
            <DashBoardContainer>
              <DashboardCard01 />
              <DashboardCard02 />
              <DashboardCard03 />
              <DashboardCard04 />
              <DashboardCard09 />
              <DashboardCard11 />
            </DashBoardContainer>
            {/* <PolarChart /> */}

            {/* <Footer /> */}
          </MainContent>
        </ContentArea>
      </ScreenContainer>
    </>
  )
}

const ChartWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(12, minmax(0, 1fr));
  gap: 1.5rem;
  /* display: flex;
  justify-content: center;
  place-items: center;
  margin: 12rem auto 0 auto;
  gap: 2rem;
  width: 45rem;
  height: 8rem; */
`
