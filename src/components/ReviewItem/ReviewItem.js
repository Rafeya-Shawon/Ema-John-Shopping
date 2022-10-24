import React from "react";
import "./ReviewItem.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons'

const ReviewItem = ({ product, handleRemoveItem }) => {
  const { name, price, quantity, img, shipping ,id} = product;

  return (
    <div className="review-item">
      <div>
        <img src={img} alt="" />
      </div>
      <div className="review-details-container">
        <div className="review-details">
            <p>{name}</p>
            <p><small>${price}</small></p>
            <p><small>${shipping}</small></p>
            <p><small>{quantity}</small></p>
        </div>
        <div className="delete-container">
            <button className="btn-delete" onClick={()=>handleRemoveItem(id)}><FontAwesomeIcon icon={faTrashAlt} className="delete"/></button>
        </div>
      </div>
    </div>
  );
};

export default ReviewItem;
