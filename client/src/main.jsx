import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router'
import { CommentProvider } from './context/Comments.context.jsx'
import { AuthProvider } from './context/Auth.context.jsx'
import { CourseProvider } from './context/Courses.context.jsx'

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <AuthProvider>
      <CommentProvider>
        <CourseProvider>
          <App />
        </CourseProvider>
      </CommentProvider>
    </AuthProvider>
  </BrowserRouter>,
)
