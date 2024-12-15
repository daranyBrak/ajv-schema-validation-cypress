
# Installation
- npm install -D cypress-ajv-schema-validator
- npm install cypress --save-dev

# Configuration
validateSchema() is a custom Cypress command or utility function used to validate data from API responses, ensuring it matches a predefined schema.

How to configure the cy.validateSchema() custom command: In cypress/support/commands.js, you need to import two lines from the ajv library:

`import 'cypress-ajv-schema-validator'`

`import validateSchema from 'cypress-ajv-schema-validator'`


