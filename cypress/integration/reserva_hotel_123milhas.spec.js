/// <reference types="cypress" />

describe("Efetuando reserva de hotel", () => {

    before('', () => {
        // cy.viewport(1200, 900)
        cy.visit('https://123milhas.com/ ')

    })

    it("Iniciando a reserva", () => {

        cy.get('#hoteis > .nav-link > .description-tab').click()
        cy.get('#txtHotelLocation').type('Fortaleza').wait(150)
        cy.contains('Fortaleza, Ceará, Brasil').click()

        cy.get('#checkinDate').click()
        cy.get('.uib-datepicker > div > :nth-child(1) > :nth-child(1) > :nth-child(1) > :nth-child(1)').contains(30).click()
        cy.get('#checkoutDate').click()
        cy.get('.uib-datepicker > div > :nth-child(1) > :nth-child(1) > :nth-child(1) > :nth-child(2)').contains(3).click()
        cy.get('#passengerSelectRooms').click()
        cy.get('#btnIdChildAdd-1').dblclick()
        cy.get('[class="age-child__age form-group"] [id="rooms[0].children.ages[0]"]').select('9 anos')
        cy.get('[class="age-child__age form-group"] [id="rooms[0].children.ages[1]"]').select('10 anos')
        cy.get('#travel-package-confirm').click()
        cy.get('#searchHotelSubmit').click()
        
        // cy.get(':nth-child(4) > .age-child').contains('#rooms\[0\]\.children\.ages\[0\]').contains('9 anos').click()
        // cy.get('#rooms\[0\]\.children\.ages\[0\]').click()
        
     

    })
})