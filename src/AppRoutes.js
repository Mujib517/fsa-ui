import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './Home';
import Contact from './Contact';
import About from './About';
import UserList from './users/UserList';
import NotFound from './NotFound';
import Header from "./Header";
import Footer from "./Footer";
import Register from "./Register";
import Login from "./Login";
import UpdateUser from "./UpdateUser";
import AutoCounter from "./utils/AutoCounter";
import CounterWithHooks from "./utils/CounterWithHooks";

const AppRoutes = () => <BrowserRouter>
    <Header />
    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/users" element={<UserList />} />
        <Route path="/users/update" element={<UpdateUser />} />
        {/* <Route path="*" element={<Home />} /> */}
        {/* <Route path="*" element={<Navigate to="/" />} /> */}
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/counter" element={<CounterWithHooks />} />
        <Route path="*" element={<NotFound />} />
    </Routes>
    <Footer />
</BrowserRouter>

export default AppRoutes;
