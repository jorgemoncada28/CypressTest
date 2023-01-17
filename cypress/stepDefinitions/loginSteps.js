/// <reference types="Cypress" />

import { Given, When, Then } from '@badeball/cypress-cucumber-preprocessor';

Given('I open DemoBlaze page', ()=>{
    
    cy.visit('https://www.demoblaze.com/index.html')
})
When('I enter correct login credentials', (dataTable) => {
    
    cy.get('#login2').click()
    cy.wait(2000)
    //cy.get('#loginusername').type('jjmoncada')
    cy.get('#loginusername').type(dataTable.rawTable[1][0])
    cy.wait(2000)
    cy.get('#loginpassword').type(dataTable.rawTable[1][1])
    //nuevo comentario en el código
    
})
Then('submit the information and validate welcome message', () => {
    cy.wait(2000)
   cy.get("[type='button'").contains("Log in").click()
   cy.get('#nameofuser').should('have.text','Welcome jjmoncada')
})