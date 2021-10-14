import React from 'react'
import './cover.scss'

const Cover = () => {
    return (
        <>
        <div className="banner">
            <img id="banner" src='https://demo.vendure.io:443/assets/preview/40/abel-y-costa-716024-unsplash__preview.jpg' alt="dfdfdf"></img>
        </div>
        <div className="section">
                 <div className = "image_container">
                     <img src = "https://demo.vendure.io/assets/preview/5b/jakob-owens-274337-unsplash__preview.jpg?w=400&h=150" alt = "pic one"/>
                     <img src = "https://demo.vendure.io/assets/preview/3e/paul-weaver-1120584-unsplash__preview.jpg?w=400&h=150" alt = "pic two"/>
                     <img src = "https://demo.vendure.io/assets/preview/96/michael-guite-571169-unsplash__preview.jpg?w=400&h=150" alt = "pic three"/>
                    
                 </div>
                 <h1><li>Electronics</li></h1>
                 <h1 id = "h_g"><li>Home & Garden</li></h1>
                 <h1 id = "s_o"><li>Sports & Outdoor</li></h1>

                 </div>
    </>
    )
}

export default Cover;
