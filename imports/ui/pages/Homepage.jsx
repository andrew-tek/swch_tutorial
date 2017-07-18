import React, {PropTypes, Component} from 'react';
import ProductGrid from '/imports/ui/components/Products/ProductGrid.jsx';
export default class Homepage extends Component {
    render() {
        if (this.props.loading) {
            return <div>loading...</div>;
        } else {
          let {products, catalogType} = this.props;
          console.warn('homepage catalogType ', catalogType);
          let productsList = products.map(function(product){
              return <ProductGrid key={product._id} product={product} catalogType = {catalogType}/>
          });
            return (
                <div>
                  <h1 className="text-center">{catalogType === 'retail' ? 'Retail Price' : 'Wholesale Price'}</h1>
                    <div className="container">
                        {productsList}
                    </div>
                </div>
            )
        }
    }
}
