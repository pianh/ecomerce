// HomePage.js
import React from "react";
import TypeProduct from "../../components/TypeProduct/TypeProduct";
import { WrapperTypeProduct } from "./style";
import SliderComponent from "../../components/SliderComponent/SliderComponent";
import slider1 from '../../assets/images/slider1.webp'
import slider2 from '../../assets/images/slider2.webp'
import slider3 from '../../assets/images/slider3.webp'

function HomePage() {
  const arr = ['TV', 'Tu Lanh', 'Laptop']
  return (
    <div style={{ padding: '0 120px' }}>
      <WrapperTypeProduct>
      {arr.map((item)=>{
        return (
          <TypeProduct name={item} key={item} />
        )
      })}
      </WrapperTypeProduct>
      {/* Slider */}
      <SliderComponent arrImages={[slider1, slider2, slider3]} />
    </div>
    )
}

export default HomePage;
