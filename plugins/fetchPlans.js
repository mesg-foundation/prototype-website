import axios from 'axios'

const query = `query {
  allPlans {
    id
    title
    price
    currency
    executions
    members
    contracts
  }
}`

export default () => axios('https://api.graph.cool/simple/v1/eth-hook', {
  method: 'post',
  headers: {
    'content-type': 'application/json'
  },
  data: { query }
})
  .then(({ data }) => data.data.allPlans)
