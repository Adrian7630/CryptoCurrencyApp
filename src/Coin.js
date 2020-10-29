import React from 'react';
import './Coin.css';

const Coin = ( { image, symbol, name, price, volume, priceChange, marketcap } ) => {

    return (
        <div className = "coin-container">
                                
            <div className = "coin-row">

                <div className = "coin">

                    <div><img src = { image } alt = "crypto" /></div>

                    <div><h1>{ name }</h1></div>

                    <div><p className = "coin-symbol"> { symbol } </p></div>

                </div>

                <div className = "coin-data">

                    <div><p className = "coin-price"> <span>price :</span> ${ price } </p></div>

                    <div><p className = "coin-volume"> <span>volume :</span> ${ volume.toLocaleString() } </p></div>

                    <div>
                        { priceChange < 0 ? 
                        ( <p className = "coin-percent red"><span>changes : </span> { priceChange ? priceChange.toFixed(2) : 0 } % </p> ) :
                        ( <p className = "coin-percent green"><span>changes : </span> { priceChange ? priceChange.toFixed(2) : 0 } % </p> )
                        }
                    </div>

                    <div>
                        <p className = "coin-marketcap">

                            <span>Mkt Cap:</span> ${ marketcap.toLocaleString() }

                        </p>
                    </div>

                </div>

            </div>

        </div>
    )
}

export default Coin;
