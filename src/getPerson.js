// @flow
import { type Person, validatePerson } from './person'

export const getPerson = async (): Promise<Person> => {
  const person = await Promise.resolve({ name: 'Alex', gender: 'f', friends: [] })

  return validatePerson(person)
}
