function Item() {
  return (
    <>
      <div className="item-container flex content-center justify-center gap-12 p-8">
        <div className="item-lhs">
          <img
            src="./src/assets/soap_front_crop.png"
            alt="Item image"
            className="item-image h-auto w-80"
          />
        </div>
        <div className="item-rhs flex w-80 flex-col content-center justify-center gap-4">
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
