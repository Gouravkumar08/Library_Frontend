## 💻 Frontend (React.js + Tailwind CSS)

### ✅ Features

- Display a list of all books from the backend API
- View detailed information about each book
- Request and display AI-generated insights (via Gemini)
- Responsive UI with loading and error handling
- Clean styling with Tailwind CSS

---

### ▶️ Running the Frontend

#### 1. Clone and Navigate

```bash
git clone https://github.com/your-username/library-frontend.git
cd library-frontend
```

#### 2. Install Dependencies

```bash
npm install
```

#### 3. Set Up Environment Variable

Create a `.env` file in the root of the frontend with the following:

```env
REACT_APP_API_BASE_URL=http://localhost:8080
```

(Replace the URL with your backend deployment URL if hosted.)

#### 4. Start the Development Server

```bash
npm start
```
---

### 🖼️ Pages & Functionality

| Page                | Path              | Description                                      |
|---------------------|-------------------|--------------------------------------------------|
| Book List Page      | `/`               | Displays all books with title, author, and year |
| Book Detail Page    | `/books/:id`      | Shows full details of a selected book           |
| AI Insights Feature | Button on detail  | Calls `/books/{id}/ai-insights` and displays AI summary |

---

### 🧩 Technologies Used

- React.js (with functional components and hooks)
- Tailwind CSS for styling
- Axios or Fetch API for HTTP requests
- React Router DOM for navigation
- Environment variables via `.env`

---

### 🚀 Deployment (Optional)

To build and deploy the frontend (e.g., on Netlify, Vercel):

```bash
npm run build
```

Then upload the `build/` directory to your hosting platform.

