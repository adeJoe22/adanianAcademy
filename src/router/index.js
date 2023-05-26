import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";

//Layouts
import RootLayout from "../layouts/RootLayout";
import StudentLayout from "../layouts/StudentLayout";

// Pages
import Home from "../pages/home";
import Courses from "../pages/courses";
import Blog from "../pages/blog";
import Contact from "../pages/contact";
import Insturctor from "../pages/instructor";
import Login from "../pages/login";
import Register from "../pages/register";
import Partners from "../pages/partner";
import StudentDashboard from "../pages/dashboard/student";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route index element={<Home />} />
      <Route path="courses" element={<Courses />} />
      <Route path="blog" element={<Blog />} />
      <Route path="contact" element={<Contact />} />
      <Route path="instructor" element={<Insturctor />} />
      <Route path="register" element={<Register />} />
      <Route path="login" element={<Login />} />
      <Route path="partners" element={<Partners />} />
      <Route path="student" element={<StudentLayout />}>
        <Route index element={<StudentDashboard />} />
      </Route>
    </Route>
  )
);

export default router;
