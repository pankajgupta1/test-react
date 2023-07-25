import { render, screen, within } from "@testing-library/react"
import UserList from "./UserList"

const renderComponent = () => {
  const users = [
    { name: "jane", email: "jane@jane.com" },
    { name: "kite", email: "kite@jane.com" },
  ];

  render(<UserList users={users} />);
  return {users}
}

beforeEach(() => {
  console.log('hii')
})

test("render one user per row", async () => {
  renderComponent();
  // screen.logTestingPlaygroundURL()

  const rows = within(screen.getByTestId('users')).getAllByRole('row')
  expect(rows).toHaveLength(2);
});

test('each row renders user email and name', async () => {
  const {users} = renderComponent()

  users.forEach(user => {
    const name = screen.getByRole('cell', {name: user.name})
    const email = screen.getByRole('cell', {name: user.email})
    expect(name).toBeInTheDocument()
    expect(email).toBeInTheDocument()
  })
})