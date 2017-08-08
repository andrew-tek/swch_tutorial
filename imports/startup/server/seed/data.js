import {Meteor} from 'meteor/meteor';
import {Mongo} from 'meteor/mongo';
import {Products} from '/imports/api/products/products.js';

let data = [{
  name: 'Cali Yogo',
  image: 'https://swchllc.s3.amazonaws.com/photos/cali_yogo-strawberry.jpg',
  price: '15.99',
  flavors: ['strawberry', 'cream'],
  description: "This is the last STRAWberry"
},
{
  name: 'Mango',
  image: 'https://swchllc.s3.amazonaws.com/products/salt/mango/0.png',
  price: 19.99,
  flavors: ['mango', 'spicy'],
  description: "Girllll, you need to let that mango"
},
{
  name: 'Apple Shake',
 image: 'https://swchllc.s3.amazonaws.com/eliquids/milkshake_liquids-apple_shake.png',
 price: 14.99,
 flavors: ['apple', 'sour'],
 description: "An apple a day keeps the doctor away *wink* *wink*"
},
{
  name: 'High Voltage Vapor Diode',
  image: 'https://swchllc.s3.amazonaws.com/photos/high_voltage_vaporz-diode.jpg',
  price: 21.99,
  flavors: ['high', 'voltage'],
  description: "Something creative..."
},
{
  name: 'Lime',
  image: 'https://swchllc.s3.amazonaws.com/eliquids/mother_nature_vapor-sweet_keffir_lime.jpg',
  price: 5.99,
  flavors: ['spicy', 'sour'],
  description: "bLIME me"
},
  {
    name: 'Atomic Berry',
    image: 'https://swchllc.s3.amazonaws.com/eliquids/rich__famous-_atomic_berry.png',
    price: 10.99,
    flavors: ['strawberry', 'raspberry'],
    description: "Nuke Berry is Yum Berry"
  }
];


let checkProducts = Products.find({}).count();
for (i = 0; i < data.length; i++) {
  let selector = {name: data[i].name};
  Products.upsert(selector, {$set: data[i]});
}

// if (checkProducts.length == 0) {
//   for (i = 0; i < data.length; i++) {
//     Products.insert(data[i]);
//   }
// }
