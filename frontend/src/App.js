import {
  BrowserRouter,
  Routes,
  Route 
} from "react-router-dom";
import PrivateRoutes from './utils/PrivateRoutes';
import { AuthProvider } from './context/AuthContext';
import { Helmet } from "react-helmet";
import './assets/css/theme.css';
import './assets/css/user.css';
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import Dashboard from './pages/Dashboard';
// import './App.css';

function App() {
  const caption = '9jaCodeKids';

  return (
    <BrowserRouter>
      <AuthProvider>
        <Helmet>
          <meta charSet="utf-8" />
          <title>{caption}</title>
          <link rel="canonical" href="http://9jacodekids.com" />
          <meta name="description" content="9jaCodeKids website, learn coding" />
        </Helmet>
        <Routes>
          <Route path="login" element={<LoginPage caption={caption} />} />
          <Route path="*" element={<main style={{ padding: "1rem" }}>
              <h3>Error 404! Page doesn't exist</h3><p>Oops! You landed on a page that does not exist</p></main>}
          />
          
          <Route element={<PrivateRoutes />}>
            <Route exact path="/" element={<HomePage caption={caption} />} />
            <Route path="/dashboard" element={<Dashboard caption={caption} />} />
            {/* <Route path="/" element={<OtherPage />} /> */}
          </Route>
        </Routes>
      </AuthProvider>
    </BrowserRouter>
  );
}

export default App;


// index.js

// import React from 'react';
// // import ReactDOM from 'react-dom/client';
// import { render } from "react-dom";
// import {
//   BrowserRouter,
//   Routes,
//   Route,
// } from "react-router-dom";
// import App from './App';
// import HomePage from './pages/HomePage';
// import LoginPage from './pages/LoginPage';

// const rootElement = document.getElementById("root");
// render(
//   <BrowserRouter>
//     <Routes>
//       <Route path="/" element={<App />}>
//         <Route path="/" element={<HomePage />} />
//         <Route path="login" element={<LoginPage />} />
//       </Route>
//     </Routes>
//   </BrowserRouter>,
//   rootElement
// );

