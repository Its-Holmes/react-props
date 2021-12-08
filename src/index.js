import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';


const oneMobile = {
  img :'https://rukminim1.flixcart.com/image/312/312/ktbu6q80/mobile/2/m/c/8s-5g-rmx3381-realme-original-imag6zhgghpzegzp.jpeg?q=70',
  title:<h1>realme 8s 5G (Universe Blue, 128 GB)</h1>,
  price: <h3>₹19,999</h3>
}

const twoMobile = {
  img:'https://rukminim1.flixcart.com/image/312/312/ku4ezrk0/mobile/b/o/m/c31-mzb0a0min-poco-original-imag7bzqxekkpkrv.jpeg?q=70',
  title:<h1>POCO C31 (Shadow Gray, 32 GB) </h1>,
  price: <h3>₹8,499</h3>

}

const threeMobile = {
  img:'https://rukminim1.flixcart.com/image/312/312/kg8avm80/mobile/d/g/b/apple-iphone-12-mini-dummyapplefsn-original-imafwgbfhfevaajh.jpeg?q=70',
  title:<h1>APPLE iPhone 12 Mini (White, 64 GB)</h1>,
  price: <h3>₹44,999</h3>

}

const fourMobile = {
  img:'https://rukminim1.flixcart.com/image/312/312/kn22m4w0/mobile/a/q/8/galaxy-f12-sm-f127gzgiins-samsung-original-imagftmjw3xqg4yk.jpeg?q=70',
  title:<h1>SAMSUNG Galaxy F12 (Sea Green, 64 GB)</h1>,
  price: <h3>₹11,499</h3>

}

const Mobiles = (props) =>{
  return(<section className='mobiles'>
    <img src={props.img} alt='Its just' />
    <h1>{props.title}</h1>
    <h4>{props.price}</h4>
  </section>)
  


}

const Mobile = () =>{
  return(<article className='mobile'>
    <Mobiles img={oneMobile.img} title={oneMobile.title} price={oneMobile.price} />
    <Mobiles img={twoMobile.img} title={twoMobile.title} price={twoMobile.price} />
    <Mobiles img={threeMobile.img} title={threeMobile.title} price={threeMobile.price} />
    <Mobiles img={fourMobile.img} title={fourMobile.title} price={fourMobile.price} />

  </article>)
}

ReactDOM.render(
  <React.StrictMode>
    <Mobile />
  </React.StrictMode>,
  document.getElementById('root')
);


