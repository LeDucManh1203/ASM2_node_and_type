import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { GetOne } from '../../API/product';

const DetailProduct = () => {
  const [data, setdata] = useState([]);
  const {id} = useParams();
  useEffect(() => {
    GetOne(id).then(({data}) => setdata(data))
  },[])
  return (
    <>
     <div className="section-banner" style={{backgroundImage: 'url("//cdn.shopify.com/s/files/1/2159/5497/files/bg-pattern.png?v=1613541007")', backgroundPosition: 'center', backgroundColor: 'white'}}>
      <div className="section-banner-title">
        <h1>CAT'S TONGUE COOKIE</h1>
      </div>
    </div>
    <div className="section-frame-Product" style={{backgroundImage: 'url(../../../img/footer-bg_ab1f0246-9f03-407d-9f84-e769576fa6be.webp)', backgroundRepeat: 'no-repeat', backgroundPosition: 'bottom'}}>
      <div className="section-frame-Product-child">
        <div className="section-frame-Product-child-image">
          <img src={`${data?.data?.image}`} />
        </div>
        <div className="section-frame-Product-child-title">
          <div className="cookie-title">
            <div className="cookie-titleh1">
              <h1>Cat's tongue cookie</h1>
            </div>
            <div className="cookie-star">
              <i className="fa-solid fa-star" style={{color: '#ffd00a'}} />
              <i className="fa-solid fa-star" style={{color: '#ffd00a'}} />
              <i className="fa-solid fa-star" style={{color: '#ffd00a'}} /> 
              <i className="fa-solid fa-star" style={{color: '#ffd00a'}} />
              <i className="fa-solid fa-star" style={{color: '#c7c5b9'}} />
            </div>
            <div className="cookie-description">
              <div className="cookie-description-p">
                <p>{data?.data?.description}</p>
              </div>
            </div>
          </div>
        </div>
        <div className="section-frame-Product-child-bill">
          <div className="section-frame-Product-child-bill-child">
            <div className="price">
              <div className="price-name">
                <p style={{fontSize: "1rem"}}>Cake Name : </p> <span style={{paddingTop : "0px", paddingBottom : "11px"}}>{data?.data?.name}</span>
              </div>
              <div className="Pricelist">
                <div className="Pricelist-price">
                  <p>${data?.data?.price}.00</p>
                </div>
                <div className="Pricelist-FLAVOR">
                  <div className="Pricelist-FLAVOR-title">
                    <p>FLAVOR</p>
                  </div>
                  <div className="Pricelist-FLAVOR-buttom">
                    <span>Vanilla Bean</span>
                    <span>Butter Peanut</span>
                    <span>Peanut Butter</span>
                  </div>
                </div>
                <div className="Pricelist-Add">
                  <span><i className="fa-solid fa-cart-shopping" />Add To Card</span>
                  <span><i className="fa-sharp fa-regular fa-heart" />Add To Wishlist</span>    
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="section-frame-Product-Description">
        <div className="section-frame-Product-Description-title">
          <div className="section-frame-Product-Description-title-child">
            <h1>Description</h1>
          </div>
        </div>
        <div className="section-frame-Product-Description-title1">
          <div className="section-frame-Product-Description-title1-frame">
            <span>Dolor tempus turpis at metus scelerisque placerat nulla deumantos solicitud felis. Pellentesque diam dolor, elementum etos lobortis des mollis ut risus. Sedcus faucibus an sullamcorper mattis drostique des commodo pharetras loremos.Donec pretium egestas sapien et mollis.</span>
            <p>Lorem ipsum dolor sit amet</p>
            <span>Dolor tempus turpis at metus scelerisque placerat nulla deumantos solicitud felis. Pellentesque diam dolor, elementum etos lobortis des mollis ut risus. Sedcus faucibus an sullamcorper mattis drostique des commodo pharetras loremos.Donec pretium egestas sapien et mollis.</span>
            <p>Lorem ipsum dolor sit amet</p>
            <span>Dolor tempus turpis at metus scelerisque placerat nulla deumantos solicitud felis. Pellentesque diam dolor, elementum etos lobortis des mollis ut risus. Sedcus faucibus an sullamcorper mattis drostique des commodo pharetras loremos.Donec pretium egestas sapien et mollis.</span>
            <p>Lorem ipsum dolor sit amet</p>
            <span>Tortor at auctor urna nunc id cursus metus aliquam. Odio tempor orci dapibus ultrices. Tortor condimentum lacinia quis vel eros donec ac odio. Velit euismod in pellentesque massa placerat duis ultricies lacus. Scelerisque purus semper eget duis at tellus at urna condimentum. Eu facilisis sed odio morbi quis commodo odio aenean urpis massa sed elemen. </span>
          </div>
        </div>
      </div>
    </div>
    </>
  )
}

export default DetailProduct