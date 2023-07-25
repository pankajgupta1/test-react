import { render, screen, within } from "@testing-library/react"
import UserList from "./UserList"

test('render one user per row', async () => {
  const users = [
    {name: 'jane', email: 'jane@jane.com'},
    {name: 'kite', email: 'kite@jane.com'},
  ]

  render(<UserList users={users} />)
  // screen.logTestingPlaygroundURL()

  const rows = within(screen.getByTestId('users')).getAllByRole('row')

  expect(rows).toHaveLength(2)
})

test('each row renders user email and name', async () => {
  render(<UserList users={[]} />)
})