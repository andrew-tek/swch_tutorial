import React, {Component} from 'react';
export default class ProductInsert extends Component {
  render() {


    let insertProduct = () => {
      let name = this.refs.name.value.trim();
      let photo = this.refs.photo.value.trim();
      let price = this.refs.price.value.trim();
      let description = this.refs.description.value.trim();
      let volume = this.refs.volume.value.trim();

      console.log('name', name);
      console.log('description', description);
      console.log('image', photo);
      console.log('price', price);
      let product = {
        name: name,
        image: photo,
        price: price,
        description: description,
        volume: volume
      }
      Meteor.call("insertProduct", product, function(error, result){
        if(result === 'success'){
                console.warn("successful");

        }
        else{
          console.warn("error");
          return;
        }
      });
      this.refs.name.value = "";
      this.refs.photo.value = "";
      this.refs.description.value = "";
      this.refs.volume.value = "";
      this.refs.price.value = "";
    }
    return (
      <div>
        <div className="form-horizontal">
          <div className="form-group">
            <label htmlFor="inputName" className="col-sm-2 control-label">Name</label>
            <div className="col-sm-10">
              <input ref="name" type="text" className="form-control" id="inputName" placeholder="Product Name" />
            </div>
          </div>
          <div className="form-group">
            <label htmlFor="inputPhoto" className="col-sm-2 control-label">Photo</label>
            <div className="col-sm-10">
              <input ref="photo" type="text" className="form-control" id="inputPhoto" placeholder="Product Photo"/>
            </div>
          </div>
          <div className="form-group">
            <label htmlFor="inputPrice" className="col-sm-2 control-label">Price</label>
            <div className="col-sm-10">
              <input ref="price" type="number" className="form-control" id="inputPrice" placeholder="Product Price" />
            </div>
          </div>
          <div className="form-group">
            <label htmlFor="inputDescription" className="col-sm-2 control-label">Description</label>
            <div className="col-sm-10">
              <input ref="description" type="text" className="form-control" id="inputDescription" placeholder="Product Description"/>
            </div>
          </div>
          <div className="form-group">
            <label htmlFor="inputVolume" className="col-sm-2 control-label">Volume</label>
            <div className="col-sm-10">
              <input ref="volume" type="text" className="form-control" id="inputVolume" placeholder="Product Volume"/>
            </div>
          </div>
          <div className="form-group">
            <div className="col-sm-offset-2 col-sm-10">
              <button onClick={insertProduct} type="submit" className="btn btn-default">Submit</button>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
