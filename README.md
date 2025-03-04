Features of this application

Add New Todos using an input field and button.

Drag & Drop todos between Pending and Completed.

Delete Todos from the list.

API Integration (though the backend does not actually save changes).

I kept the UI minimal and completed the only feature required.

Added Validation for input field

Added Confimation For Delete

Loading State has Been Added for the CRUD operations





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

