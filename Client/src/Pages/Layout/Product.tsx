import React from 'react'
import { Outlet } from 'react-router-dom'

const Product = (props:any) => {
  const TakeData = (data:any) => {
    props.currdata(data._id)
  }
  return (
    <>
  <div className="khung" style={{height: 2500}}>
  <header>
    <div className="khung-header">
      <div className="search">
        <i className="fa-solid fa-magnifying-glass search_i" />
        <i className="fa-regular fa-user user_i " />
      </div>
      <div className="logo">
        <img src="./img/logo.avif"  />
      </div>
      <div className="heard">
        <i className="fa-regular fa-heart heart_i" />
        <a href="/SignIn" style={{paddingRight : "3px"}}>SignIn</a> / <a href="/SignUp" style={{paddingLeft : "3px"}}>SignUp</a>
      </div>
    </div>
  </header>
  <nav>
    <div className="khung-nav">
      <a href={"/"}>Home</a>
      <a href={"/Product"}>Product</a>
      <a href={""}>Cookies</a>
      <a href={""}>Contact</a>
      <a href={""}>Location</a>
    </div>
  </nav>
  <section style={{height : "80%"}}>
    <div className="section-banner" style={{backgroundImage: 'url("//cdn.shopify.com/s/files/1/2159/5497/files/bg-pattern.png?v=1613541007")', backgroundPosition: 'center', backgroundColor: 'white'}}>
      <div className="section-banner-title">
        <h1>CAT'S TONGUE COOKIE</h1>
      </div>
    </div>
    <div className="Collection" >
      <div className="Collection-fream">
        <div className="Collection-Category">
          <div className="Collection-Category-frame">
            <div className="Collection-Category-frame-title">
              <h1>Category</h1>
            </div>
            <div className="Collection-Category-frame-ul">
              <ul>
                {props.data?.data?.map((data:any) => <li key={data._id} onClick={() => TakeData(data)} >{data.name}</li>)}
              </ul>
            </div>
          </div>
        </div>
        <div className="Collection-Product">
          <div className="Collection-Product-item1">
            <div className="Collection-Product-item1-khung">
              <i className="fa-solid fa-list i1" />
              <i className="fa-solid fa-table-cells i2" />
            </div>
          </div>
          <div className="Collection-Product-child">
          <Outlet />
          </div>
        </div>
      </div>
    </div>
  </section>
  <footer>
    <div className="image-footer">
    </div>
    <div className="footer-contact">
      <div className="footer-us">
        <div className="footer-frame">
          <div className="footer-us-title">
            <h2>About Us</h2>
          </div>
          <div className="footer-us-content">
            <p>The way the cakes and pastries from 
              <br />
              Cookie Crumbles, melt in your mouth is to be 
              <br />
              experienced to believe. It has a solid 
              <br />
              start and yet that is the way the cookie
              <br />
              crumbles..!</p>
          </div>
        </div>
      </div>
      <div className="footer-Support">
        <div className="footer-Support1">
          <div className="footer-Support1-title">
            <h2>About Us</h2>
          </div>
          <div className="footer-Support1-content">
            <a href={""}>Help</a>
            <a href={""}>Delivery Information</a>
            <a href={""}>Privacy Policy</a>
            <a href={""}>Terms &amp; Conditions</a>
            <a href={""}>Shipping details</a>
          </div>
        </div>
        <div className="footer-Support2">
          <div className="footer-Support1-title">
            <h2>Support</h2>
          </div>
          <div className="footer-Support1-content">
            <a href={""}>Help</a>
            <a href={""}>Delivery Information</a>
            <a href={""}>Privacy Policy</a>
            <a href={""}>Terms &amp; Conditions</a>
            <a href={""}>Shipping details</a>
          </div>
        </div>
        <div className="footer-Support3">
          <div className="footer-Support1-title">
            <h2>Collection</h2>
          </div>
          <div className="footer-Support1-content">
            <a href={""}>Help</a>
            <a href={""}>Delivery Information</a>
            <a href={""}>Privacy Policy</a>
            <a href={""}>Terms &amp; Conditions</a>
            <a href={""}>Shipping details</a>
          </div>
        </div>
      </div>
      <div className="footer-Contactus">
        <div className="footer-frame">
          <div className="footer-us-title">
            <h2>Contact us</h2>
          </div>
          <div className="footer-us-content">
            <p>The way the cakes and pastries from 
              <br />
              Cookie Crumbles, melt in your mouth is to be 
              <br />
              experienced to believe. It has a solid 
              <br />
              start and yet that is the way the cookie
              <br />
              crumbles..!</p>
          </div>
        </div>
      </div>
    </div>
  </footer>
</div>

    </>
  )
}

export default Product