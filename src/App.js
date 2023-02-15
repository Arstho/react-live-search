import Goods from './components/Goods';
import Menu from './components/Menu';
import Title from './components/TitleAndBasket';
import { useState } from 'react';

let details = 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
const goods = [
  { 'name': 'MacBook', 'details': details, 'cost_now': '97000р', 'cost_last': '109000р', 'img': 'goods/mac.png' },
  { 'name': 'Белый холодильник', 'details': details, 'cost_now': '45000р', 'cost_last': '53000р', 'img': 'http://intocode.ru/d/react-project-1/images/7.jpg' },
  { 'name': 'Computer', 'details': details, 'cost_now': '127000р', 'cost_last': '', 'img': 'goods/comp.png' },
  { 'name': 'Samsung', 'details': details, 'cost_now': '87000р', 'cost_last': '108000р', 'img': 'goods/tv.png' },
  { 'name': 'BlackBerry', 'details': details, 'cost_now': '77000р', 'cost_last': '85000р', 'img': 'goods/phone.png' },
  { 'name': 'Стиральная машина', 'details': details, 'cost_now': '37000р', 'cost_last': '45000р', 'img': 'http://intocode.ru/d/react-project-1/images/6.jpg' },
  { 'name': 'Скутер', 'details': details, 'cost_now': '47000р', 'cost_last': '55000р', 'img': 'http://intocode.ru/d/react-project-1/images/3.jpg' },
  { 'name': 'Колонка', 'details': details, 'cost_now': '27000р', 'cost_last': '35000р', 'img': 'http://intocode.ru/d/react-project-1/images/8.jpg' },
  { 'name': 'Ipad Pro', 'details': details, 'cost_now': '38000р', 'cost_last': '43000р', 'img': 'goods/ipad.png' },
  { 'name': 'TV', 'details': details, 'cost_now': '197000р', 'cost_last': '209000р', 'img': 'http://intocode.ru/d/react-project-1/images/4.jpg' },
  { 'name': 'MacBook M2', 'details': details, 'cost_now': '197000р', 'cost_last': '209000р', 'img': 'http://intocode.ru/d/react-project-1/images/1.jpg' },
  { 'name': 'Sony', 'details': details, 'cost_now': '47000р', 'cost_last': '55000р', 'img': 'http://intocode.ru/d/react-project-1/images/2.jpg' },
];

const title = 'Intocode Coding Shopcamp';

function App() {
  const [item, setItem] = useState('');

  const handleSearch = goods.filter(el => {
    return el.name.toLowerCase().includes(item.toLowerCase())
  })

  return (
    <div className="App">
      <Title title={title} />
      <div className='search_div'>
        <input type="text" className='search'  onChange={(e) => setItem(e.target.value)} />
      </div>
      <div className='content'>
        <div>
          <Menu />
        </div>
        <div className='goods_list'>
          {handleSearch.map(item => <Goods name={item.name} cost_now={item.cost_now} details={item.details} cost_last={item.cost_last} img={item.img} />)}
        </div>
      </div>
    </div>
  );
}

export default App;
