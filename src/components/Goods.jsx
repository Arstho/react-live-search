import { useState } from "react";

function Goods(props) {
  const [buy, setBuy] = useState(true);
  const [details, setDetails] = useState();

  const handleAdded = (e) => {
    e.preventDefault();
    setBuy(false)
    console.log(1)
  }

  const handleDelete = (e) => {
    e.preventDefault();
    setBuy(true)
  }

  const handleDetails = () => {
    setDetails(<div className="detailsBlock">{props.details}<button onClick={handleClose} className="btnX">✖️</button></div>)
  }

  const handleClose = () => {
    setDetails();
  }

  return (
    <div className="main">
      <div >
        <img className="img" src={props.img} alt="" />
      </div>
      <div className="price">
        <ins className="price_now">{props.cost_now} </ins>
        <del className="price_last">{props.cost_last}</del>
        <button onClick={handleDetails} className="details_btn">Детали</button>
      </div>
      <p className="goods_name">{props.name}</p>
      {details}
      <p className="details">{props.details}</p>
      <button onClick={handleAdded} disabled={!buy} className={`${buy ? 'btn_buy' : 'btn_block'}`}>{buy ? 'Купить' : 'Уже в корзине'}</button>
      {!buy && <a onClick={handleDelete} className='deleteFromBasket' href="d">Удалить из кoрзины</a>}
    </div>
  );
}


export default Goods;