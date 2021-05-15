import React,{useState} from 'react';
import one from './images/1.jpg';
import './Cartitem.css';

function CartItem() {
    
    const [num, setnum] = useState(1);
    function minusNum(){
        setnum(num - 1);
    }
    function plusNum(){
        setnum(num + 1);
    }
    return (
        <tr>
        <td>
            <img src={one} alt="" />
            </td>
            <td><p>white mordern chair</p></td>
      <td>     <p className = 'price'>$130</p></td> 
         <td>   
             <div className="td_qty">
                <p>qty</p>
                <div className="qty_much">
                    <p className = 'minus'onClick = {minusNum}>-</p>
                   <div className="num">{num}</div>
                    <p className = 'plus' onClick = {plusNum}>+</p>
                </div>
                
            </div>
        </td>
        
    </tr>
    )
}

export default CartItem
