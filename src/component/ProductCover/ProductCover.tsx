import React from 'react'
import "./ProductCover.scss"

const ProductCover = () => {
    return (
        <>
        <div className="imgE_div">
            <img src="https://demo.vendure.io/assets/preview/5b/jakob-owens-274337-unsplash__preview.jpg?w=1000&h=300"
                className="imageE1"
            />
        </div>
        <div className='txtE'>
        {/* <li> <Link to="/" >Home</Link></li> */}
        <li> Home</li>

        <p>/Electronics</p>
    </div>
    <h1 id="elect">Electronics</h1>
    </>
    )
}

export default ProductCover;
