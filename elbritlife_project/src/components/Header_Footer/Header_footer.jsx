import React from 'react'
import Header_Footer_Circle from '../HF_Circle/Header_Footer_Circle'

const Header_footer = () => {
  return (
    <div className='ml-44 mr-44 -mt-40 bg-[#17414f] grid grid-cols-3 items-center justify-center rounded-3xl gap-10 ' >
        <Header_Footer_Circle desc="clinically studied" text ="All products that we offer have undergone lab and safety tests"/>
        <Header_Footer_Circle desc="Vegetarian Friendly" text ="We have a wide selection of vegetarian products to meet your needs"/>
        <Header_Footer_Circle desc="Made in India" text ="Shop local and explore health products made right here in India"/>
        <Header_Footer_Circle desc="Free shipping" text ="We deliver to your door with no shipping costs on your orders"/>
        <Header_Footer_Circle desc="No Risk" text ="We ensure that all products are safe and within their use-by date"/>
        <Header_Footer_Circle desc="GMO free" text ="Natural, no modified products and derivatives for those who need it"/>

    </div>
  )
}

export default Header_footer