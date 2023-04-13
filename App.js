import React from "react";
import ReactDOM from "react-dom/client";

const root=ReactDOM.createRoot(document.getElementById("root"));

const Header = () => {
  return(
    <div className="header">
      <div className="logo-container">
        <img className="logo" 
        src="https://images-platform.99static.com/A_Ax0GQuo_NHI0Y7XZHmFtGfBDY=/0x0:1000x1000/500x500/top/smart/99designs-contests-attachments/126/126252/attachment_126252018"/>

      </div>
      <div>
      <h2 className="app-name">Food Hub</h2>
      </div>
      <div className="nav-item">
        <ul>
          <li>Home</li>
          <li>About Us</li>
          <li>Contact Us</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
}

const RestaurantCard = () => {
  return(
    <div className="res-card">
      <img className="res-logo"
      alt="res-logo"
      src="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_264,h_288,c_fill/a79403b3daea9a1ede0a7b1ec36bc943"/>
      <h3>Meghana Foods</h3>
      <h4>Biryani, North Indian, Asian</h4>
      <h4>4.4 stars</h4>
      <h4>38 minutes</h4>
    </div>
  );
}

const Body = () => {
  return(
    <div className="body">
      <div className="search">Search</div>
      <div className="res-container">
        <RestaurantCard />
        <RestaurantCard />
        <RestaurantCard />
        <RestaurantCard />
        <RestaurantCard />
        <RestaurantCard />
        <RestaurantCard />
        <RestaurantCard />
        <RestaurantCard />
        <RestaurantCard />
        <RestaurantCard />
        <RestaurantCard />
        <RestaurantCard />
        <RestaurantCard />
        <RestaurantCard />
        <RestaurantCard />
        <RestaurantCard />
        <RestaurantCard />
      </div>
    </div>
  );
}

const AppLayout = () => {
  return(
    <div className="app">
     <Header />
     <Body />
    </div>
  )
}

root.render(<AppLayout />);