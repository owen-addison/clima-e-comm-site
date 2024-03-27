function Item() {
  return (
    <>
      <div className="item-container">
        <div className="item-lhs">
          <img
            src="./src/assets/soap_7.png"
            alt="Item image"
            className="item-image h-auto w-96"
          />
        </div>
        <div className="item-rhs">
          <div className="item-details-container">
            <h3 className="item-header">Soap</h3>
            <ul className="item-ingredients">
              <li className="ingredient">Ingredient 1</li>
              <li className="ingredient">Ingredient 2</li>
              <li className="ingredient">Ingredient 3</li>
            </ul>
          </div>
          <button className="add-button">Add to basket</button>
        </div>
      </div>
    </>
  );
}

export default Item;
