import React from 'react';
import '../App.css';
import AllCategories from '../Components/Filter/AllCategories';
import Cart from '../Components/Cart/Cart';
import Souvenirs from '../Components/SouvenirsComponents/Souvenirs';

function Shop() {
return (
<div className="">
<div>
<AllCategories/>
</div>
<div className='shopItem'>
<Souvenirs />
<Cart />
</div>
</div> 
  );
}

export default Shop;