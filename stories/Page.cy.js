import Page from './Page.vue'

describe('<Page />', () => {
  it('renders', () => {
    // see: https://on.cypress.io/mounting-vue
    cy.mount(Page)
  })
})