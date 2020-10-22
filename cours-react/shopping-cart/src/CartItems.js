import React, { Component } from 'react';
import Item from "./Item"
class CartItems extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <div className="col-12">
                {this.props.carts.map(item=>(
                    <Item updateQty={this.props.updateQty} deleteFromCart={this.props.deleteFromCart} key={item.product.id} item={item}></Item>
                ))}
            </div>
         );
    }
}
 
export default CartItems;