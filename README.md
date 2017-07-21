# angular-openapi-schematics

The goal of this project is to be a quickstart Angular Schematics project.

This will eventually, theoretically, allow you to scaffold out an entire decoupled Angular application from a single command.

# The idea

Typing this command:
`schematics openapi-app myapp --api=https://yoursite.io/openapi/jsonapi?_format=json`

Would be the equivalent of using the Angular CLI to do this:
`ng new myapp`

Except that instead of a barebones application, we use the OpenAPI endpoint provided to analyze your data models and do much more!
