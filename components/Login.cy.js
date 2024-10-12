import Login from './LoginForm.vue'

describe('<Login />', () => {
  it('renders', () => {
    // see: https://on.cypress.io/mounting-vue
    cy.mount(Login)
  })
})