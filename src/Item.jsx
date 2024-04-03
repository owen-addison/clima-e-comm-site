import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

function Item({ data }) {
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
    <div
      className="item-container m-4 flex cursor-pointer content-center justify-center gap-12 p-8 hover:bg-moss-500"
      onClick={toggleView}
    >
      {/* Image container */}
      <div className="item-lhs">
        <img
          src={data.imageSrc}
          alt={`${data.name} image`}
          className="item-image h-80 w-auto"
        />
      </div>
      {/* Description box that resizes and then fades in content */}
      <div
        className={`item-rhs flex flex-col content-center justify-center overflow-hidden transition-all duration-500 ease-in-out ${isDetailedView ? 'w-80 gap-4 p-4' : 'w-0 gap-0 p-0'} ${shouldShowDetails ? 'opacity-100' : 'opacity-0'}`}
      >
        {shouldShowDetails && (
          <>
            <div className="item-details-container">
              <h3 className="item-header font-semibold">{data.name}</h3>
              <ul className="item-ingredients">
                {data.ingredients.map((ingredient, index) => (
                  <li key={index} className="ingredient">
                    {ingredient}
                  </li>
                ))}
              </ul>
            </div>
            <button className="add-button w-max self-center rounded border border-moss-800 bg-moss-800 px-4 py-2 font-semibold text-slate-100 transition-colors duration-200 ease-in-out hover:border-moss-950 hover:bg-moss-950">
              Add to basket
            </button>
          </>
        )}
      </div>
    </div>
  );
}

// Define the expected prop types
Item.propTypes = {
  data: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    imageSrc: PropTypes.string.isRequired,
    ingredients: PropTypes.array.isRequired,
  }).isRequired,
};

export default Item;
