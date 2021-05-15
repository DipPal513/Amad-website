import React from 'react';
import Item from './Item';
import './Productarea.css';

import one from './images/1.jpg';
import two from './images/2.jpg';
import three from './images/3.jpg';
import four from './images/4.jpg';
import five from './images/5.jpg';
import six from './images/6.jpg';
import seven from './images/7.jpg';
import eight from './images/8.jpg';
import nine from './images/9.jpg';



function Productarea() {
    return (
        <>
            <div className="Product_area">
                <div className="line">
                    <Item
                        img={one}
                        c='item'
                        money={18}
                        name="mordern chair"
                    />
                    <Item
                        img={two}
                        money={189}
                        name="minimal plant pot"
                        c='item verticle'
                    />
                    <Item
                        img={three}
                        money={180}
                        name="mordern chair"
                        c='item'
                    /></div>
                <div className="line">
                    <Item
                        img={four}
                        money={18}
                        name="mordern chair"
                        c='item'
                    />
                    <Item
                        img={five}
                        money={18}
                        name="mordern chair"
                        c='item'
                    />
                    <Item
                        img={six}
                        money={18}
                        name="mordern chair"
                        c='item'
                    /></div>
                <div className="line">
                    <Item
                        img={seven}
                        money={18}
                        name="mordern chair"
                        c='item'
                    />
                    <Item
                        img={eight}
                        money={18}
                        name="mordern chair"
                        c='item'
                    />
                    <Item
                        img={nine}
                        money={18}
                        name="mordern chair"
                        c='item verticle'
                    /></div>



            </div>

        </>
    )
}

export default Productarea;
