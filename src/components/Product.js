import React, {Component} from 'react';
import garment from '../media/Tribe_3d.gif' 
class ProductCard extends Component {
    constructor(props)
    {
        super(props);
        this.state = { color : '#4cb96b' };
    }
 
    getClick()
    {
        if (this.state.color === '#4cb96b')
            this.setState({ color : '#aaa' });
        else
            this.setState({ color : '#4cb96b' });
    }
 
    render()
    {
        return (    
            <div class="wrapper">
                <img class="product-img" src={garment}/>
                <div class="product-name">Product Name</div>
                <button class="add-cart-btn">Add</button>
            </div>
        );
            
  }
} 
 
export default ProductCard;