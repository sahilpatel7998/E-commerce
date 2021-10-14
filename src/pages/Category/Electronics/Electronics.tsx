import React from 'react'
import ProductCover from '../../../component/ProductCover/ProductCover'
import Footer from '../../../layout/footer/footer'
import { Header } from '../../../layout/header'
import { Category } from '../../../Assetes/Dummydata/categoryDetail'

const Electronics = () => {
    return (
        <div>
            <Header/>
            {/* {
                Category.filter((curElem, index) =>{
                    return curElem.heading==="Electronics"
                })
            } */}
            <ProductCover />
            <Footer/>
        </div>
    )
}

export default Electronics
