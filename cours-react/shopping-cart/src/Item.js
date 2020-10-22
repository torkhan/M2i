import React, { Component } from 'react';

class Item extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            qty : this.props.item.qty
         }
    }
    changeQty = (event) => {
        this.props.updateQty(this.props.item.product.id, event.target.value)
        this.setState({
            qty : event.target.value
        })
    }
    render() { 
        return ( 
            <div className="row">
                <div className="col-2">
                    <img style={{width:'100%'}} src={this.props.item.product.image} />
                </div>
                <div className="col-3">
                    {this.props.item.product.title}
                </div>
                <div className="col-2">
                    {this.props.item.product.price} €
                </div>
                <input className="col-2" min="1" max="100" type="number" onChange={this.changeQty} defaultValue={this.props.item.qty} />
                <div className="col-1">
                    {this.props.item.qty * this.props.item.product.price}
                </div>
                <div className="col-2">
                <i class="fas fa-trash" onClick={()=> {
                        this.props.deleteFromCart(this.props.item.product.id)
                    }}></i>
                </div>
            </div>
         );
    }
}
 
export default Item;