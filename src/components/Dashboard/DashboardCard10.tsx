import styled from 'styled-components'

function DashboardCard10() {
  const customers = [
    {
      id: '0',
      position: 1,
      name: 'Salão Barbeiros Barbados',
      cnpj: '11.131.131/1313-11',
      products: 8,
      income: 'R$ 52,890.66',
    },
    {
      id: '1',
      position: 2,
      name: 'E-commerce Boris Kitua',
      cnpj: '11.113.111/1111-13',
      products: 7,
      income: 'R$ 42,767.04',
    },
    {
      id: '2',
      position: 3,
      name: 'Café do João',
      cnpj: '12.121.121/1212-12',
      products: 7,
      income: 'R$ 41,996.00',
    },
    {
      id: '3',
      position: 4,
      name: 'Restaurante Italiano',
      cnpj: '14.114.114/1141-14',
      products: 6,
      income: 'R$ 31,220.66',
    },
    {
      id: '4',
      position: 5,
      name: 'Restaurante Japonês',
      cnpj: '15.115.115/1151-15',
      products: 6,
      income: 'R$ 31,890.66',
    },
  ]

  return (
    <DashboardCard10Container>
      <DashboardCard10Header>
        <DashBoardTitle>Ranking de Clientes</DashBoardTitle>
      </DashboardCard10Header>
      <Padding>
        {/* Table */}
        <TableContainer>
          <Table>
            {/* Table header */}
            <TableHeader>
              <tr>
                <TableTh>
                  <TableThText>Nome</TableThText>
                </TableTh>
                <TableTh>
                  <TableThText>CNPJ</TableThText>
                </TableTh>
                <TableTh>
                  <TableThText>Receitas</TableThText>
                </TableTh>
                <TableTh>
                  <TableThText>Produtos</TableThText>
                </TableTh>
              </tr>
            </TableHeader>
            {/* Table body */}
            <TableBody>
              {customers.map((customer) => {
                return (
                  <tr key={customer.id}>
                    <TableTd>
                      <TableFlexItens>
                        <TableImgContainer>
                          <TableImg className={`n${+customer.id + 1}`}>
                            {customer.position}
                          </TableImg>
                        </TableImgContainer>
                        <TableText>{customer.name}</TableText>
                      </TableFlexItens>
                    </TableTd>
                    <TableTd>
                      <TableTextLeft>{customer.cnpj}</TableTextLeft>
                    </TableTd>
                    <TableTd>
                      <TableTextMoney>{customer.income}</TableTextMoney>
                    </TableTd>
                    <TableTd>
                      <TableTextCenter>{customer.products}</TableTextCenter>
                    </TableTd>
                  </tr>
                )
              })}
            </TableBody>
          </Table>
        </TableContainer>
      </Padding>
    </DashboardCard10Container>
  )
}

export default DashboardCard10

const DashboardCard10Container = styled.div`
  background-color: #ffffff;
  border-radius: 0.125rem;
  border: 1px solid #e2e8f0;
  grid-column: 1 / -1;
  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1),
    0 4px 6px -2px rgba(0, 0, 0, 0.05);

  @media (min-width: 1280px) {
    grid-column: span 6 / span 6;
  }
`

const DashboardCard10Header = styled.header`
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
`

const TableTh = styled.th`
  padding: 0.5rem;
  white-space: nowrap;
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

const TableTd = styled.td`
  padding: 0.5rem;
  white-space: nowrap;
`

const TableFlexItens = styled.div`
  display: flex;
  align-items: center;
  flex-shrink: 0;
`

const TableImgContainer = styled.div`
  margin-right: 0.5rem;
  width: 2.5rem;
  height: 2.5rem;

  div.n1 {
    background-color: #fcd34d;
  }

  div.n2 {
    background-color: #94a3b8;
  }

  div.n3 {
    background-color: #ca8a04;
  }

  @media (min-width: 640px) {
    margin-right: 0.75rem;
  }
`

const TableImg = styled.div`
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

const TableText = styled.div`
  font-weight: 600;
  color: #1e293b;
`

const TableTextLeft = styled.div`
  text-align: left;
`

const TableTextMoney = styled.div`
  color: #10b981;
  font-weight: 500;
  text-align: left;
`

const TableTextCenter = styled.div`
  font-size: 0.875rem;
  line-height: 1.25rem;
  /* text-align: center; */
`
