import React from 'react'
import './Header.css'
import Logo from '../assets/icons8-comida-rápida-96.png'
import Bike from '../assets/homem-andando-de-bicicleta.png'
import Burge from '../assets/burger_sandwich_PNG96712.png'
import Lupa from '../assets/lupa (1).png'
import Map from '../assets/mapas-e-bandeiras (1).png'
import User from '../assets/sombra-de-usuario-masculino.png'
import Sacola from '../assets/preto.png'


const Header = () => {
  return (
    <div className='header'>
        <div className='top_nav'>
            <div className='logo'>
                <div><img src={Logo} className='logo_img'></img></div>
                <h4 className='logo_heading'>FoodGone.</h4>
            </div>

            <div className='location'>
                <h3 className='delivery'>Deliver To:</h3>
                <h3 className='place'><span className='location'><img className='icon_location' src={Map}/></span>Localização atual <span>Rua das Palmeiras, Jardim Azano I</span></h3>
            </div>

            <div className='input_nav'>
                <div className='input_box'>
                    <input className='search' placeholder='Buscar alimentos' type='search'/>
                    <span className='icon_search'><img src={Lupa}/></span>
                </div>

                <div><a href='#' className='btn_login'><span><img src={User}/></span> Login</a></div>
            </div> 
        </div>

        <div className='banner_home'>
            <div className='content_home'>
                <h1 className='heading_home'>Você está com fome?</h1>
                <h3 className='heading_home_2'>Em poucos cliques, encontre refeições acessíveis perto de você</h3>

                <div className='box_content'>
                    <div className='tabs'>
                        <di><a href='#'><span><img src={Bike}/></span>Deliver</a></di>
                        <di><a href='#' className='btn_2_home'><span><img src={Sacola}/></span>Pick Up</a></di>
                    </div>

                    <div className='input_data'>
                        <input className='search_banner' placeholder='Buscar alimentos' type='search'/>
                        <div><a href='#'>Buscar</a></div>
                    </div>
                </div>
            </div>

            <div className='img_banner'>
                <div><img src={Burge}/></div>
            </div>
        </div>
    </div>
  )
}

export default Header