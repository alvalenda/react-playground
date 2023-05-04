import styled from 'styled-components'

function DashboardCard07() {
  return (
    <DashBoardContainer>
      <DashboardCardHeader>
        <DashBoardTitle>Top Franquias</DashBoardTitle>
      </DashboardCardHeader>
      <Padding>
        {/* Table */}
        <TableContainer>
          <Table>
            {/* Table header */}
            <TableHeader>
              <tr>
                <TableTh>
                  <TableThText>Franqueado</TableThText>
                </TableTh>
                <TableTh>
                  <TableThText>Tier</TableThText>
                </TableTh>
                <TableTh>
                  <TableThText>Receitas</TableThText>
                </TableTh>
                <TableTh>
                  <TableThText>Vendas</TableThText>
                </TableTh>
                <TableTh>
                  <TableThText>Percentual SaaS</TableThText>
                </TableTh>
              </tr>
            </TableHeader>
            {/* Table body */}
            <TableBody>
              {/* Row */}
              <tr>
                <TableTd>
                  <FlexDiv>
                    <TableRank>1</TableRank>
                    <TextSlateSpecial>Franquia RJ-0189</TextSlateSpecial>
                  </FlexDiv>
                </TableTd>
                <TableTd>
                  <TextCenter>Tier 9</TextCenter>
                </TableTd>
                <TableTd>
                  <TextGreen>R$ 293,877</TextGreen>
                </TableTd>
                <TableTd>
                  <TextCenter>267</TextCenter>
                </TableTd>
                <TableTd>
                  <TextSky>41%</TextSky>
                </TableTd>
              </tr>
              {/* Row */}
              <tr>
                <TableTd>
                  <FlexDiv>
                    <TableRank>2</TableRank>
                    <TextSlateSpecial>Franquia SP-0256</TextSlateSpecial>
                  </FlexDiv>
                </TableTd>
                <TableTd>
                  <TextCenter>Tier 8</TextCenter>
                </TableTd>
                <TableTd>
                  <TextGreen>R$ 238,426</TextGreen>
                </TableTd>
                <TableTd>
                  <TextCenter>249</TextCenter>
                </TableTd>
                <TableTd>
                  <TextSky>38%</TextSky>
                </TableTd>
              </tr>
              {/* Row */}
              <tr>
                <TableTd>
                  <FlexDiv>
                    <TableRank>3</TableRank>
                    <TextSlateSpecial>Franquia BH-0036</TextSlateSpecial>
                  </FlexDiv>
                </TableTd>
                <TableTd>
                  <TextCenter>Tier 7</TextCenter>
                </TableTd>
                <TableTd>
                  <TextGreen>R$ 192,444</TextGreen>
                </TableTd>
                <TableTd>
                  <TextCenter>224</TextCenter>
                </TableTd>
                <TableTd>
                  <TextSky>35%</TextSky>
                </TableTd>
              </tr>
              {/* Row */}
              <tr>
                <TableTd>
                  <FlexDiv>
                    <TableRank>4</TableRank>
                    <TextSlateSpecial>Franquia VR-0240</TextSlateSpecial>
                  </FlexDiv>
                </TableTd>
                <TableTd>
                  <TextCenter>Tier 6</TextCenter>
                </TableTd>
                <TableTd>
                  <TextGreen>R$ 175,236</TextGreen>
                </TableTd>
                <TableTd>
                  <TextCenter>220</TextCenter>
                </TableTd>
                <TableTd>
                  <TextSky>33%</TextSky>
                </TableTd>
              </tr>
              {/* Row */}
              <tr>
                <TableTd>
                  <FlexDiv>
                    <TableRank>5</TableRank>
                    <TextSlateSpecial>Franquia RR-0176</TextSlateSpecial>
                  </FlexDiv>
                </TableTd>
                <TableTd>
                  <TextCenter>Tier 5</TextCenter>
                </TableTd>
                <TableTd>
                  <TextGreen>R$ 142,034</TextGreen>
                </TableTd>
                <TableTd>
                  <TextCenter>204</TextCenter>
                </TableTd>
                <TableTd>
                  <TextSky>31%</TextSky>
                </TableTd>
              </tr>
            </TableBody>
          </Table>
        </TableContainer>
      </Padding>
    </DashBoardContainer>
  )
}

export default DashboardCard07

// FRANQUIAS
const DashBoardContainer = styled.div`
  background-color: #ffffff;
  border-radius: 0.125rem;
  border: 1px solid #e2e8f0;
  grid-column: 1 / -1;
  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1),
    0 4px 6px -2px rgba(0, 0, 0, 0.05);

  @media (min-width: 1280px) {
    grid-column: span 8 / span 8;
  }
`
const DashboardCardHeader = styled.header`
  padding-top: 1rem;
  padding-bottom: 1rem;
  padding-left: 1.25rem;
  padding-right: 1.25rem;
  border-bottom: 1px solid #f1f5f9;
`

const DashBoardTitle = styled.h2`
  font-weight: 600;
  color: #1e293b;
`
const Padding = styled.div`
  padding: 0.75rem;
`

const TableContainer = styled.div`
  overflow-x: auto;
`

const Table = styled.table`
  width: 100%;
  table-layout: auto;
`

const TableHeader = styled.thead`
  font-size: 0.75rem;
  line-height: 1rem;
  font-weight: 600;
  text-transform: uppercase;
  color: #94a3b8;
  background-color: #f1f5f9;
  border-radius: 0.125rem;
`

const TableTh = styled.th`
  padding: 0.5rem;
`
const TableThText = styled.div`
  font-weight: 600;
  text-align: left;
`

const TableBody = styled.tbody`
  font-size: 0.875rem;
  line-height: 1.25rem;
  border-top-width: 1px;
  border-bottom-width: 0px;
  border-color: rgb(241 245 249);
`

const FlexDiv = styled.div`
  display: flex;
  align-items: center;
`

const TextSlate = styled.div`
  color: #1e293b;
`

const TextSlateSpecial = styled(TextSlate)`
  margin-left: 1rem;
  font-weight: 600;
`

const TableTd = styled.td`
  padding: 0.5rem;
`

const TextCenter = styled.div`
  text-align: center;
`

const TextGreen = styled(TextCenter)`
  color: #22c55e;
`

const TextSky = styled(TextCenter)`
  color: #0ea5e9;
`

const TableRank = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 9999px;
  width: 36px;
  height: 36px;
  color: #ffffff;
  background-color: #0e2439;
  font-weight: 600;
`
