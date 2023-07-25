import { render, screen, within } from "@testing-library/react"
import UserList from "./UserList"

test("render one user per row", async () => {
  const users = [
    { name: "jane", email: "jane@jane.com" },
    { name: "kite", email: "kite@jane.com" },
  ];

  const { container } = render(<UserList users={users} />);
  // screen.logTestingPlaygroundURL()

  const rows = container.querySelectorAll("tbody tr");
  expect(rows).toHaveLength(2);
});

test('each row renders user email and name', async () => {
  render(<UserList users={[]} />)
})