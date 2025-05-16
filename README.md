# 💻 Frontend (React.js + Tailwind CSS)

## ✅ Features

- Display a list of all books from the backend API  
- View detailed information about each book  
- Request and display AI-generated insights (via Gemini)  
- Responsive UI with loading and error handling  
- Clean styling with Tailwind CSS  

---

## ▶️ Running the Frontend

### 1. Clone and Navigate

```bash
git clone https://github.com/your-username/library-frontend.git
cd library-frontend
```

### 2. Install Dependencies

```bash
npm install
```

This installs essential dependencies like:

- `react-router-dom` – for client-side routing  
- `axios` – for making API calls  
- `tailwindcss`, `postcss`, and `autoprefixer` – for styling  

If not already configured, install manually:

```bash
npm install react-router-dom axios
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p
```

### 3. Configure Tailwind CSS

Update `tailwind.config.js`:

```js
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [],
}
```

In `src/index.css` (or create one), add:

```css
@tailwind base;
@tailwind components;
@tailwind utilities;
```

Then, import it in `index.js` or `App.js`:

```js
import './index.css';
```

---

### 4. Set Up Environment Variable

Create a `.env` file in the root directory:

```env
REACT_APP_API_BASE_URL=http://localhost:8080
```

(Replace with your deployed backend URL if needed.)

---

### 5. Start the Development Server

```bash
npm start
```

---

## 🖼️ Pages & Functionality

| Page                | Path              | Description                                      |
|---------------------|-------------------|--------------------------------------------------|
| Book List Page      | `/`               | Displays all books with title, author, and year |
| Book Detail Page    | `/books/:id`      | Shows full details of a selected book           |
| AI Insights Feature | Button on detail  | Calls `/books/{id}/ai-insights` and displays AI summary |

---

## 🧩 Technologies Used

- **React.js** with functional components and hooks  
- **Tailwind CSS** for fast and modern styling  
- **Axios** for REST API calls  
- **React Router DOM** for client-side navigation  
- **Environment Variables** for API configuration  

---

## 🚀 Deployment (Optional)

To build and deploy the frontend (e.g., on Netlify, Vercel):

```bash
npm run build
```

Then upload the `build/` folder to your chosen hosting provider.
