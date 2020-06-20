import { User } from '../models/User'

test('it should be ok', () => {
  const user = new User()

  user.name = 'Cristiano'

  expect(user.name).toEqual('Cristiano')
})
