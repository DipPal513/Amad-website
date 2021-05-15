import React from 'react';
import './Item.css';

function Item({img,money,name,c}) {
    return (
        <>
            <div className ={c}>
                
                    <img src={img}alt="" />
                    <div className="hover_content">
                        <div className="line"></div>
                        <p>From ${money}</p>
                        <h4>{name}</h4>
                    
                    </div>
               

            </div>
        </>
    )
}

export default Item
