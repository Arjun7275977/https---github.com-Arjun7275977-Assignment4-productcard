import './App.css';
import React from 'react';
//import  ProductCard from './Component/ Productcard.js'
import Productcard from './Component/Productcard';

function App() {
  const productData = [
    {
      productId: '1',
      productPic: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ2CIB_25J1OKp_nrBbUVeIGdRdeupM9t7S2Q&usqp=CAU',
      productName: 'Shoes',
      Brand: 'Adidas',
      productDescription: 'A stylish pair of shoes that you would love to wear!',
      Price: '4000 Rs'
    },
    
     
      {
        productId: '2',
        productPic: 'https://5.imimg.com/data5/SY/OJ/MY-57047128/plain-t-shirts-500x500.jpg',
        productName: 'T-Shirt',
        Brand: 'Nike',
        productDescription: 'A comfortable t-shirt that you can wear all day!',
        Price: '1500 Rs'
      },
      {
        productId: '3',
        productPic: 'https://m.media-amazon.com/images/I/41wG1Hfy7vL.jpg',
        productName: 'Watch',
        Brand: 'Titan',
        productDescription: 'A sleek and stylish watch that complements your style!',
        Price: '5000 Rs'
      },
      {
        productId: '4',
        productPic: 'https://images-static.nykaa.com/media/catalog/product/d/e/de6f57castd0384_1.jpg?tr=w-500,pr-true',
        productName: 'Bag',
        Brand: 'Puma',
        productDescription: 'A spacious and trendy bag for your everyday use!',
        Price: '3000 Rs'
      },
      {
        productId: '5',
        productPic: 'https://i.pcmag.com/imagery/reviews/03G8MAcdjG2x10d9vtGTILq-4.fit_scale.size_760x427.v1569472469.jpg',
        productName: 'Headphones',
        Brand: 'JBL',
        productDescription: 'High-quality headphones for an immersive audio experience!',
        Price: '4000 Rs'
      }
  ];
    
  
  
      return (
        <div className="product-list">
          {productData.map((product, index) => (
            <Productcard key={index} productDetails={product} />
          ))}
        </div>
      );
    }
    export default App;