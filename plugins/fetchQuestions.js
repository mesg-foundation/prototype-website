const questions = [{
  title: 'How much will it cost when the beta is finished ?',
  response: 'We will set the pricing according to the feedbacks we have from you, and our infrastructure cost but we really want to have an accessible price for developers and small projects like $19 or $29 but nothing sure yet.'
}, {
  title: 'How the pricing will be applied ?',
  response: 'It will be a price per project and based on the number of contracts you manage plus the number of events your projects triggers in one month.'
}, {
  title: 'What happen if my project triggers more events than I pay for ?',
  response: 'When you reach 75% of your quota you will receive a notification in the dashboard and by email to let you have time to upgrade your plan, after that when you reach 100% of your quotas your triggers will simply not be executed anymore and when the month is finished they will start again.'
}, {
  title: 'I want just to watch some contracts but don\'t interact with them, is there an offer for me ?',
  response: 'For now the plans have a limited number of contracts, but we plan to have soon a system with private and public contracts and this limit will only apply to private contract so you will be able to watch as many contracts as you want they will just be public. Think that it\'s like the Github repositories, if you share the knowledge it\'s free ;)'
}, {
  title: 'Are my data safe using your system ?',
  response: 'All the data from your contract are in the blockchain so perfectly secure and the one we manage on our own, the events and all logs informations contains only what your contract share and this is only visible by the team on your project. '
}]
  .map((x, i) => ({
    id: i,
    ...x
  }))

export default () => Promise.resolve(questions)
