import React, { Component } from 'react';
import Item from "./Item"
class CartItems extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
<<<<<<< HEAD
            <div className="col">
=======
            <div className="col-12">
>>>>>>> 13dee712f55c75cfd396b8774420e89f9462e901
                {this.props.carts.map(item=>(
                    <Item updateQty={this.props.updateQty} deleteFromCart={this.props.deleteFromCart} key={item.product.id} item={item}></Item>
                ))}
            </div>
         );
    }
}
 
export default CartItems;