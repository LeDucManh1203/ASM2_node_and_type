import React from 'react'

const ProductPage = (props:any) => {
  return (
    <>
            {props.data?.data?.map((data:any) =>           
            <div className="Collection-Product-item" key={data._id}>
              <div className="grid-item-img">
                <img src={`${data.image}`}  />
              </div>
              <div className="eye" style={{padding : "5px 7px"}}>
                <a href={`/productDeltail/${data._id}`}><i className="fa-solid fa-eye" /></a>
              </div>
              <div className="grid-item-name">
                <h3>{data.name}</h3>
                <p>${data.price}.00</p>
              </div>
              <div className="grid-item-detail">
                <div className="star">
                  <i className="fa-solid fa-star" style={{color: '#ffd00a'}} />
                  <i className="fa-solid fa-star" style={{color: '#ffd00a'}} />
                  <i className="fa-solid fa-star" style={{color: '#ffd00a'}} />
                  <i className="fa-solid fa-star" style={{color: '#ffd00a'}} />
                  <i className="fa-solid fa-star" style={{color: '#c7c5b9'}} />
                </div>
                <div className="ingredient">
                  <p>wheat</p>
                  <p>banana</p>
                  <p>blueberry</p>
                </div>
              </div>
            </div> )}
          
    </>
  )
}

export default ProductPage