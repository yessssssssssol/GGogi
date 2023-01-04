import React from 'react';
import './CartInfoPrice.scss';

const CartInfoPrice = () => {
  //[Todo] 차후 백엔드에서 가격 정보 가져오기
  const CART_PRICEINFO = [
    {
      id: 1,
      name: '상품금액',
      price: '46,360',
    },
    {
      id: 2,
      name: '배송비',
      price: 0,
    },
    {
      id: 3,
      name: '결제예정금액',
      price: '46,360',
    },
  ];

  return (
    <div className="cartInfoPrice">
      {CART_PRICEINFO.map((item) => {
        return (
          <div key={item.id} className="priceInfoSection">
            <span className="priceTitle">{item.name}</span>
            <div className="priceSection">
              <span className="priceInfo">{item.price}</span>
              <span className="priceUnit"> 원</span>
            </div>
          </div>
        );
      })}
      <button className="orderBtn">주문하기</button>
    </div>
  );
};

export default CartInfoPrice;
