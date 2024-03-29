import React, { useState } from 'react';
import './App.css';
import Header from './components/Header/Header';
import CardComponent from './components/CardComponent/CardComponent';
import NavBar from './components/NavBar';
import HomeIcon from '@mui/icons-material/Home';
import CartWidget from './components/CartWidget/CartWitdget';
import ItemListConteiner from './components/ItemListConteiner/ItemListConteiner';
import ItemCounter from './components/ItemCounter/ItemCounter';


const App = () => {
      return (
      <div>
         <Header className='Center'/>

          <div className='Center'>
          <NavBar menu='HOME'/>
          <ItemCounter/>

          <ItemListConteiner/> 

          </div>


          <div className='UserSection'>
            <CardComponent 
              title='Bebidas Alcoholicas' 
              description='Cervezas, Licores, Whiskey, Vodka, Ron, etc.' 
              img='https://i0.wp.com/beverageindustrynews.com.ng/wp-content/uploads/2015/09/diageo_brands.jpg?fit=420%2C315&ssl=1'/>
            <CardComponent 
              title='Gaseosas' 
              description='Gaseosas Colas, Gaseosas de Lima-limon, Aguas tonicas, etc' 
              img='https://previews.123rf.com/images/monticello/monticello1804/monticello180400265/103002442-poznan-polonia-6-de-abril-de-2018-botellas-de-marcas-mundiales-de-refrescos-incluidos-productos-de-c.jpg?fj=1'/>
            <CardComponent 
              title='Jugos' 
              description='Variedad de Jugos' 
              img='https://thefoodtech.com/wp-content/uploads/2020/06/jugos-y-n%C3%A9ctares.jpg'/>
          </div>
       </div>
          
    );
};

export default App;
