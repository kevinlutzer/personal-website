# Personal Website Client

The client wep app for my personal website. 

# Run Server

`npm install`
`npm run start`

# Firebase Install 

`npm install -g firebase-tools`
`firebase init    # Generate a firebase.json(REQUIRED)`
`firebase serve   # Start development server`

# Functiosn Server

example 

`Visitor.post('/', {headers: {'x-forwarded-for': '0.0.0.0'}}).form({'visitorType': 'Other'})`