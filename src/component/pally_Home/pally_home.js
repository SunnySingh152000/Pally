import './pally_Home.css'
export function  Pally_Home () {
    return(
       <div className='divide'>
        <div></div>

        <div className='Pallyh'>
        <h3>PALLY</h3>
        <h1>Pallet Builder</h1>
        <p>Programming your robot palletizer has never been easier. Use this easy to use pallet builder to design your 3D pallet in just a few minutes, then simply export the file over to your robot palletizer.</p>
        <p>Supported robot palletizing platforms:</p>
        <div className='anchorl'>
        <a href="https://www.rocketfarm.no/software-products/palletizing/">Pally</a>
        <a href="https://columbiaokura.com/products/cobots/">miniPAL</a>
        <a href="https://www.peetersrs.nl/producten/palletiseren/cobot-palletiser/">GoBot Palletise Solution</a>
        <a href="https://www.fdautomation.it/it/prodotti/flexipall-isola-robotizzata-collaborativa-pallettizzazione/">Flexipall</a>
        <a href="http://palco.stimba.sk/">PAL.co</a>
        <a href="#">PalletBooster2000</a>
        </div>
         <div ><button className='btn ' id='newbtn'>New project</button>  <button className='btn' id='btn2'>Import project</button> </div>
         <div className='view'>
         <p>View Pallet Builder v2.3.2 <a href="">changes</a></p>
         </div>
        
       
        </div>
        <div className='palletbuilder'><img src='pallet_builder.png' width="110%" height={600}/></div>
       </div>
    )

}