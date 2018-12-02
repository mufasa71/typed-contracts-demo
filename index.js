// @flow

import { getPerson } from './src/getPerson'

getPerson().then(p => {
  console.log(p.friends.map(f => f.name))
})

