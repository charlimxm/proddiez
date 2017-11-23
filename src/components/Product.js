import React from 'react'

const Product = ({productObj, deleteProduct, addSub}) => {
  return (
    <div className="col s12 m4">
      <div className="card blue-grey darken-1">
        <div className="card-content white-text">
          <span className="card-title">{ productObj.title }</span>
          <p>{ productObj.subtitle }</p>
          <p className="right">{ productObj.subCount } subscribers</p>
        </div>
        <div className="card-action white-text">
          <a className="btn btn-floating red"
            onClick={(e) => deleteProduct(productObj.id)}>
            <i className="material-icons">close</i>
          </a>
          <a className="btn btn-floating right"
            onClick={(e) => addSub(productObj.id)}>
            <i className="material-icons">add</i>
          </a>
        </div>
      </div>
    </div>
  )
}

export default Product
