# Interactive Lists with the new Angular 7 Drag and Drop tool

Here is a list of 4 things we need to be able to use the Drag and Drop tool in Angular 7

## cd to a preferred location
// run the command below
`ng new dragdrop`

## Angular Material installed on the above app
`ng add @angular/material`

##  Rendering a list

Open the app component file and add an array of hotels for example.
`hotels = [
    'Arena Hotel - Amsterdam',
    'Grand Hotel Amstelveen - Amsterdam',
    'Arenas Atiram Hotel- Barcelona',
    'Catalonia Atenas - Barcelona',
    'Catalonia Magdalenes - Barcelona',
    'Abba Berlin hotel - Berlin',
    'Adele Designhotel - Berlin',

  ];`
  
  And then mport Drag Drop module in the app module file. (app.module.ts)

## Running the app

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.
