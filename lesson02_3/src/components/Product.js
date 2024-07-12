import React, { Component } from 'react';

class Product extends Component {
    render() {
        return (  
            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                <div className="thumbnail">
                    <img src="https://nhistore.com.vn/wp-content/uploads/2023/09/iphone-15-promax-titanium-nhistore-1.png" alt="iphone15promax" />
                    <div className="caption">
                        <h3>Iphone 15 promax</h3>
                        <p>
                            16.000.000 VND
                        </p>
                        <p>
                        <button type="button" class="btn btn-success">Mua hàng</button>
                        </p>
                    </div>
                </div>
            </div>
        );
    }
}

export default Product;