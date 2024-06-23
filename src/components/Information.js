import React from 'react'
import Sino from '../assets/sinos.png'
import rosquinha from '../assets/rosquinha.png'
import Dl from '../assets/saco-de-dinheiro-em-dolares-na-mao.png'
import Map from '../assets/mapas-e-bandeiras (1).png'
import './Information.css'

const Information = () => {
  return (
      <div className='information'>
        <h5 className='heading_working'>Como Funciona</h5>
    <div className='working'>
        <div className='container_boxes_work'>
            <div className='boxes_work'>
                <div><img src={Map}/></div>
                <h4>Selecione Localização</h4>
                
            </div>
        </div>

        <div className='container_boxes_work'>
            <div className='boxes_work'>
                <div><img src={Sino}/></div>
                <h4>Escolha o pedido</h4>
                
            </div>
        </div>

        <div className='container_boxes_work'>
            <div className='boxes_work'>
                <div><img src={Dl}/></div>
                <h4>Pagar conta</h4>
                
            </div>
        </div>

        <div className='container_boxes_work'>
            <div className='boxes_work'>
                <div><img src={rosquinha}/></div>
                <h4>Refeições Felizes</h4>
                
            </div>
        </div>
    </div>
    </div>
  )
}

export default Information