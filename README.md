Todo-Trello-App
This is a Trello-style Todo board built with Angular, featuring drag-and-drop functionality and API integration. The application allows users to add, drag & drop, and delete todos while mimicking state changes locally.


🚀 Features
✅ Add New Todos using an input field and button.
✅ Drag & Drop Todos between Pending and Completed using @angular/cdk.
✅ Delete Todos from the list.
✅ API Integration with https://dummyjson.com/todos (Backend does not persist changes).

📌 Notes
The app has two lanes (Pending & Completed) because the API only provides a completed: boolean status.
Drag & Drop is implemented using @angular/cdk.



🛠 Setup & Installation
1️⃣ Clone the repository:
    git clone https://github.com/tusharapril14/todo-trello-assign
    cd todo-trello-app

2️⃣ Install dependencies:
    npm install

3️⃣ Run the development server:
    ng serve
    Navigate to http://localhost:4200/ in your browser.

⚡ Optimizations & Improvements
🔹 A modal form for adding todos could enhance UX.
🔹 Lazy loading components could be useful for larger apps, but this app has only one main feature.
🔹 Tailwind CSS or other libraries could be used for UI improvements

🚀 Future Enhancements
🔸 User-based Trello Board with authentication.
🔸 More Statuses like In Progress, In Review, Completed. (Requires API support).
🔸 Full backend integration for persistent updates.

🛠 Development Commands
    ng serve
    ng build
    ng test
    ng e2e


📖 Resources & Docs
Angular CLI
Angular CDK - Drag and Drop
DummyJSON API Docs

