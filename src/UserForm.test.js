import { screen, render } from '@testing-library/react'
import UserForm from './UserForm'
import user from '@testing-library/user-event'

test('user form has 2 input fields and one button', async () => {
  render(<UserForm />)

  const inputs = screen.getAllByRole('textbox')
  const button = screen.getByRole('button')
  expect(inputs).toHaveLength(2)
  expect(button).toBeInTheDocument()
})


test('onAddUserFunction is called', async () => {
  const mock = jest.fn()
  render(<UserForm onUserAdd={mock} />)
  const nameInput = screen.getByRole('textbox', {
    name: /name/i
  })
  const emailInput = screen.getByRole('textbox', {
    name: /email/i
  })
  await user.click(nameInput)
  await user.keyboard('Jane')
  
  await user.click(emailInput)
  await user.keyboard('jane@jane.com')

  const button = screen.getByRole('button')
  await user.click(button)

  expect(mock).toHaveBeenCalled()
  expect(mock).toHaveBeenCalledWith({name: 'Jane', email: 'jane@jane.com'})
})