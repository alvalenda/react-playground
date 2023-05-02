import DashboardCard01 from '@/components/Dashboard/DashboardCard01'
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
      <ScreenWrapper>
        {/* <Header /> */}
        {/* <EmotionChart record={{ bsi: 45, ham_a: 60, ham_d: 30, k10: 15 }} /> */}
        <ChartWrapper>
          <DashboardCard01 />
        </ChartWrapper>
        {/* <PolarChart /> */}

        {/* <Footer /> */}
      </ScreenWrapper>
    </>
  )
}

const ChartWrapper = styled.div`
  display: flex;
  justify-content: center;
  place-items: center;
  margin: 12rem auto 0 auto;
  gap: 2rem;
  width: 45rem;
  height: 8rem;
`
