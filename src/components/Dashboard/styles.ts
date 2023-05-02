import styled from 'styled-components'

export const DashBoardCard = styled.div`
  display: flex;
  background-color: #ffffff;
  flex-direction: column;
  border-radius: 0.125rem;
  border-width: 1px;
  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1),
    0 4px 6px -2px rgba(0, 0, 0, 0.05);
  z-index: 2;

  @media (min-width: 640px) {
    grid-column: span 6 / span 6;
  }

  @media (min-width: 1280px) {
    grid-column: span 4 / span 4;
  }
`
export const DashBoardCardHeader = styled.div`
  padding-left: 1.25rem;
  padding-right: 1.25rem;
  padding-top: 1.25rem;
`

export const DashBoardCardTitle = styled.h2`
  margin-bottom: 0.5rem;
  font-size: 1.125rem;
  line-height: 1.75rem;
  font-weight: 600;
`

export const DashBoardCardDescription = styled.p`
  margin-bottom: 0.25rem;
  font-size: 0.75rem;
  line-height: 1rem;
  font-weight: 600;
  text-transform: uppercase;
`

export const DashBoardCardBody = styled.div`
  padding-left: 1.25rem;
  padding-right: 1.25rem;
  padding-top: 1.25rem;
  padding-bottom: 1.25rem;
  flex: 1 1 auto;
  min-height: 1px;
  display: flex;
  flex-direction: column;
  justify-content: center;
`

export const DashBoarCardMoneyContainer = styled.div`
  display: flex;
  align-items: flex-start;
`

export const DashBoardCardMoney = styled.h3`
  margin-right: 0.5rem;
  font-size: 1.875rem;
  line-height: 2.25rem;
  font-weight: 700;
`

export const DashBoardCardMoneyTag = styled.p`
  padding-left: 0.375rem;
  padding-right: 0.375rem;
  background-color: #10b981;
  color: #ffffff;
  font-size: 0.875rem;
  line-height: 1.25rem;
  font-weight: 600;
  border-radius: 9999px;
`