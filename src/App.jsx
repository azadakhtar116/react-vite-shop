import { BrowserRouter, Routes, Route } from "react-router-dom";
// import css
import "./App.css";
import "./assets/css/style.css";
import "./assets/css/responsive.css";

// import bootstrap here
import "bootstrap/dist/css/bootstrap.min.css";

import PrivateRoute from './utility/PrivateRoute'

// import routes here
import Layout from "./components/layout/layout";
import Home from "./pages/e-shop/public-pages/home/index";
import About from "./pages/e-shop/public-pages/about/index";
import Login from "./pages/e-shop/public-pages/auth/login";

{/* Private Routes */}
import Dashboard from "./pages/e-shop/private-pages/dashboard/index";
import Form from './pages/e-shop/private-pages/dymaicForm/index'

function App() {
  return (
    <>
      <BrowserRouter>
        <Layout>
          <Routes>
            {/* Public Page Here */}
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/login" element={<Login />} />
           
            {/* Private Route */}
            <Route element={<PrivateRoute />}>
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/form" element={<Form />} />
             
            </Route>
          </Routes>
        </Layout>
      </BrowserRouter>
    </>
  );
}

export default App;
