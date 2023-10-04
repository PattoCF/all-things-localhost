This project was bootstrapped with [Create Contentful App](https://github.com/contentful/create-contentful-app).

## Available Scripts

In the project directory, you can run:

#### `npm start`

## What does it do?
Simple app that allows you to run any field type from localhost. Each field type, and general location is defined as a separate component: 
- Config Screen
- Page
- Home
- Sidebar
- Field
  - Boolean
  - DateTime
  - Entry Reference
  - Entry Reference Many
  - JSON Object
  - Location
  - Long Text
  - Media Reference
  - Media Reference Many
  - Number Decimal
  - Number Integer
  - Rich Text
  - Short Text
  - Short Text List

<img width="241" alt="image" src="https://github.com/PattoCF/all-things-localhost/assets/59477906/45863730-1cec-4693-b9ac-394d845dd149">


The repository includes a content model and entries for the above use cases in the space-import.json. The content types have an internal name plus field type pre-configured:
![image](https://github.com/PattoCF/all-things-localhost/assets/59477906/cbc30bf4-27a9-4078-a475-cd2b7071d709)

All you need to do: 
1. Install the app
2. Import the content model
3. Start development for any field type from localhost
