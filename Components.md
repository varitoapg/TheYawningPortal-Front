# Data

## Data layer

### UI

- loading: boolean
- modal
  - isOpen: boolean
  - isError: boolean
  - text: string

### User

- id: string
- username: string
- token: string
- isLogged: boolean

### Character

- image: string
- name: string
- race: string
- class: string
- speed: number
- stats:
  - strength: number
  - dexterity: number
  - constitution: number
  - intelligence: number
  - wisdom: number
  - charisma: number
- background: string
- details: string
- isAlive: boolean
- createdBy: Object

### Characters

- characters: Character[]

## Data modification

### UI

- loading
  - set to true
  - set to false
- modal
  - isOpen
    - set to true
    - set to false
  - text
    - set text
  - isError
    - set to true
    - set to false

### User

- isLogged
  - set to true
  - set to false

### Character

- getAllCharacters
- findCharacterById
- deleteCharacter
- updateCharacter
- toggleLifeCharacter
- toggleFavouriteCharacter

# Components

## App

### Show data

- Show a heading level 2 with 'Welcome travelers!' and 2 spans on navigate to /welcome
- Show a LoginForm on navigate to /login
- Show a RegisterForm on navigate to /register
- Show Loading if isLoading is true
- When isLogged is true
  - Show a CharacterList of the user on navigate to /home

### Get actions

## Header

### Show data

- Show a heading level 1 with 'The Yawning Portal'
- Show a D&D icon as a link
- Show a Navigation component

### Get actions

- Navigate to Welcome on click

## Navigation

### Show data

- When isLogged is true
  - Show a link to Home
  - Show a link to Create
  - Show a link to Community
  - Show a button with Logout
- When isLogged is false
  - Show a link to Register
  - Show a link to Login

### Get actions

## Button

### Show data

- Show the received text

### Get actions

- Call the received action on click

## RegisterForm

### Show data

- Show an input with label 'Username'
- Show an input with label 'Password'
- Show an input with label 'Email'
- Show a button with text 'Register'
- Show a text 'Are you new, traveler?'
- Show a link with text 'Log in'

### Get actions

- Submit form on enter or click 'Register'
- Navigate to Login page on click 'Log in'

## LoginForm

### Show data

- Show an input with label 'Username'
- Show an input with label 'Password'
- Show a button with text 'Log in'
- Show a text 'Do you want a pint of mead?'
- Show a link with text 'Register'

### Get actions

- Submit form on enter or click 'Log in'
- Navigate to Register page on click 'Register'

## Character

### Show data

- Show a heading level 2 with the received 'name' in desktop
- Show the received image with the received 'name' as aria label
- Show a span with the received 'name'
- Show a span with the received 'race'
- Show a span with the received 'class'
- Show a span with the received 'speed'
- Show 6 spans with the received 'stats'
- Show a span with the received 'background'
- Show a span with the received 'details'
- Show an icon of a pencil

### Get actions

- Navigate to "edit"

## CharacterCard

### Show data

- Show the received image with the received 'name' as aria label
- Show a span with the received 'name'
- Show a span with the received 'race'
- Show a span with the received 'class'
- Show 6 spans with the received 'stats'
- Show a skull or ank icon if character isAlive
- Show a broken heart icon

### Get actions

- Navigate to Detail on click (image)
- Toggle isAlive on click (skull or ank)
- Delete character on click (broken heart)

## CharacterCardList

### Show data

- Show a CharacterCard for each character received

### Get actions

## FIlter

### Show data

- Show a dropdown wit all classes as option

### Get actions

- Change the filter on click
