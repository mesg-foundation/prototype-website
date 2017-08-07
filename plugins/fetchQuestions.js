const questions = [
  { title: 'Do you ... ?', response: 'Yes we do !!' },
  { title: 'Do you ... ?', response: 'No we don\'t !!' }
]
  .map((x, i) => ({
    id: i,
    ...x
  }))

export default () => Promise.resolve(questions)
