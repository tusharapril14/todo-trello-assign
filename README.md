# Todo-Trello-App

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 14.2.13.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.




Project Specification:




Features of this application :

        Add New Todos using an input field and button.

        Drag & Drop todos between Pending and Completed.

        Delete Todos from the list.

        API Integration (though the backend does not actually save changes).



NOTES:
    I have only created two lanes because todo api has only two states, Completed and Not Completed  which is true and false.
    I used @angular/cdk library to create my drag and drop functionality

Optimizations and improvements: 
    We could have a separate ui/modal for our Add Todo Form;
    I could have lazy loaded the components and board, but it would be pointless because we have only one page which is compulsory in our feature.

More feature:
    We can have user based todo-trelo board for their todo statuses.
    We can have more statuses for our todo card (for example: In Progress, In Development, In Production) but we need to have api support for that.
    We can ofcourse beautify our todo-trello with tailwind and other css libraries.
