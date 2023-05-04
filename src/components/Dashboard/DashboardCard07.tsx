import styled from 'styled-components'

function DashboardCard07() {
  const data = [
    {
      id: '0',
      franchise: 'Franquia RJ-0189',
      tier: 9,
      revenue: 'R$ 293,877',
      sales: 267,
      sass: '41%',
    },
    {
      id: '1',
      franchise: 'Franquia SP-0256',
      tier: 8,
      revenue: 'R$ 238,426',
      sales: 249,
      sass: '38%',
    },
    {
      id: '2',
      franchise: 'Franquia BH-0036',
      tier: 7,
      revenue: 'R$ 192,444',
      sales: 224,
      sass: '35%',
    },
    {
      id: '3',
      franchise: 'Franquia VR-0240',
      tier: 6,
      revenue: 'R$ 175,236',
      sales: 201,
      sass: '33%',
    },

    {
      id: '4',
      franchise: 'Franquia RR-0176',
      tier: 5,
      revenue: 'R$ 142,034',
      sales: 204,
      sass: '31%',
    },
  ]

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
              {data.map((row) => {
                return (
                  <tr key={row.id}>
                    <TableTd>
                      <FlexDiv>
                        <TableRank>{+row.id + 1}</TableRank>
                        <TextSlateSpecial>{row.franchise}</TextSlateSpecial>
                      </FlexDiv>
                    </TableTd>
                    <TableTd>
                      <TextCenter>{row.tier}</TextCenter>
                    </TableTd>
                    <TableTd>
                      <TextGreen>{row.revenue}</TextGreen>
                    </TableTd>
                    <TableTd>
                      <TextCenter>{row.sales}</TextCenter>
                    </TableTd>
                    <TableTd>
                      <TextSky>{row.sass}</TextSky>
                    </TableTd>
                  </tr>
                )
              })}
            </TableBody>
          </Table>
        </TableContainer>
      </Padding>
    </DashBoardContainer>
  )
}

export default DashboardCard07

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
