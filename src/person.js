// @flow

import * as t from 'typed-contracts'

import { validate, type ExtractType } from './validate'

const contract = t.object({
  name: t.string,
  gender: t.union('m', 'f'),
  friends: t.array((valueName, value) => contract(valueName, value)),
  email: t.union(t.string, t.array(t.string)).optional
})

export const personContract = contract('person')

export type Person = ExtractType<typeof personContract>

export const validatePerson = validate<Person>(personContract)
