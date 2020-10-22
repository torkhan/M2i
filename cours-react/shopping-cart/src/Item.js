import React, { Component } from 'react';

class Item extends Component {
    constructor(props) {
        super(props);
        this.state = {
            qty: this.props.item.qty
        }
    }
    changeQty = (event) => {
        this.props.updateQty(this.props.item.product.id, event.target.value)
        this.setState({
            qty: event.target.value
        })
    }
    render() {
        return (



            <div className="row">
                <div className="col-3">
                    <img src={this.props.item.product.image} />
                </div>
                <div className="col-3">
                    {this.props.item.product.title}
                </div>
                <div className="col-1">
                    {this.props.item.product.price} €
                </div>
                <input className="col-2 form-control" type="number" onChange={this.changeQty} defaultValue={this.props.item.qty} />
                <div className="col-1">
                    {this.state.qty * this.props.item.product.price}
                </div>
                <div className="col-2">
                    <button className="col btn btn-danger" onClick={() => {
                        this.props.deleteFromCart(this.props.item.product.id)
                    }}>Remove</button>
                </div>
            </div>
        );
    }
}

export default Item;