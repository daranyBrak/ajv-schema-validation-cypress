const responseBody = {
    "$schema": "http://json-schema.org/draft-07/schema#",
    "type": "object", // Changed from "array" to "object"
    "properties": {
      "id": { "type": "integer", "description": "Unique identifier for the product" },
      "title": { "type": "string", "description": "Title of the product" },
      "price": { "type": "number", "description": "Price of the product" },
      "description": { "type": "string", "description": "Description of the product" },
      "category": { "type": "string", "description": "Category of the product" },
      "image": { "type": "string", "format": "uri", "description": "URL to the product image" },
      "rating": {
        "type": "object",
        "properties": {
          "rate": { "type": "number", "description": "Average rating of the product" },
          "count": { "type": "integer", "description": "Number of ratings received" }
        },
        "required": ["rate", "count"],
        "description": "Rating details of the product"
      }
    },
    "required": ["id", "title", "price", "description", "category", "image", "rating"]
  };
  

const path = {endPoint: '/products/1', method: 'GET'}

describe('API Schema Validation with OpenAPI 3.0.2', () => {
    it('should validate the pet data using OpenAPI 3.0.2 schema', () => {
        cy.request('GET', 'https://fakestoreapi.com/products/1').validateSchema(responseBody, path)
    })
})
  