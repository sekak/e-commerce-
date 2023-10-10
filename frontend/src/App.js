import React from "react";
import { BrowserRouter as Router, Switch, Route, Link,Redirect } from "react-router-dom";

import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import Home from "./pages/Home/Home";
import Product from "./pages/Product/Product";
import Products from "./pages/Products/Products";
import "./app.scss";
import Login from "./Authent/Login/Login";
import Register from "./Authent/Register/Register";
import { useSelector } from "react-redux";
 

function App() {
  const user = useSelector((state) => state.cart.user.stateUser);
  console.log(user);
  return (
    <Router>
      <div>
        {user && <Navbar />}
        <Switch>
          <Route path="/" exact>
             {user ?  <Home /> : <Redirect to='/login'/>}
          </Route>
          <Route path="/products/:text">
            {user ?  <Product /> : <Redirect to='/login'/>}
          </Route>
          <Route path="/product/:id">
          {user ?  <Products /> : <Redirect to='/login'/>}
          </Route>
          <Route path="/login">
           {!user ?  <Login /> : <Redirect to='/'/>}
          </Route> 
          <Route path="/register">
          {!user ?  <Register /> : <Redirect to='/'/>}
          </Route>
        </Switch>
        {user && <Footer />}

      </div>
    </Router>
  );
}

export default App;

// need handle login register

// function App() {
//   const user = useSelector((state) => state.cart.user.stateUser);
//   console.log(user);
//   return (
//     <Router>
//       <div>
//          <Navbar /> 
//         <Switch>
//           <Route path="/" exact>
//              <Home />  
//           </Route>
//           <Route path="/products/:text">
//            <Product />  
//           </Route>
//           <Route path="/product/:id">
//            <Products />  
//           </Route>
//           <Route path="/login">
//            <Login />  
//           </Route> 
//           <Route path="/register">
//           <Register />  
//           </Route>
//         </Switch>
//           <Footer /> 

//       </div>
//     </Router>
//   );
// }

// export default App;
