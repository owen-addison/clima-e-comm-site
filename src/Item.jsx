import { useState, useEffect } from 'react';

function Item() {
  const [isDetailedView, setIsDetailedView] = useState(false);
  const [shouldShowDetails, setShouldShowDetails] = useState(false);

  // Handler to toggle the view state
  const toggleView = () => {
    // Toggle the detailed view which triggers the resizing of item-rhs
    setIsDetailedView((prev) => !prev);
  };

  useEffect(() => {
    if (isDetailedView) {
      // Wait for the resize transition of item-rhs to finish before showing details
      setTimeout(() => {
        setShouldShowDetails(true);
      }, 500); // This matches the duration of the resize transition
    } else {
      setShouldShowDetails(false);
    }
  }, [isDetailedView]);

  return (
    <div className="item-container flex content-center justify-center gap-12 p-8">
      {/* Image container */}
      <div className="item-lhs cursor-pointer">
        <img
          src="./src/assets/soap_front_crop.png"
          alt="Item image"
          className="item-image h-80 w-auto"
          onClick={toggleView}
        />
      </div>
      {/* Description box that resizes and then fades in content */}
      <div
        className={`item-rhs flex flex-col content-center justify-center gap-4 overflow-hidden p-4 transition-all duration-500 ease-in-out ${isDetailedView ? 'w-80' : 'w-0'} ${shouldShowDetails ? 'opacity-100' : 'opacity-0'}`}
      >
        {shouldShowDetails && (
          <>
            <div className="item-details-container">
              <h3 className="item-header font-semibold">Soap</h3>
              <ul className="item-ingredients">
                <li className="ingredient">Ingredient 1</li>
                <li className="ingredient">Ingredient 2</li>
                <li className="ingredient">Ingredient 3</li>
              </ul>
            </div>
            <button className="add-button">Add to basket</button>
          </>
        )}
      </div>
    </div>
  );
}

export default Item;
