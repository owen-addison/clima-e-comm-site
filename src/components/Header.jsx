import PropTypes from 'prop-types';

function Header({ onShowInfo }) {
  return (
    <>
      <div className="header min-w-screen flex h-auto content-center justify-between border-b border-moss-800 pt-0">
        <div
          id="logo-container"
          className="font-sans text-2xl font-light tracking-widest text-moss-950"
        >
          Clima
        </div>
        <div
          id="header-links-container"
          className="flex flex-row items-center justify-center"
        >
          <div className="flex items-center justify-center">
            <p
              className="group w-auto cursor-pointer text-center font-sans text-base font-light tracking-wide text-moss-950 transition duration-300"
              onClick={onShowInfo}
            >
              About
              <span className="block h-0.5 max-w-0 bg-moss-950 bg-opacity-70 transition-all duration-500 group-hover:max-w-full"></span>
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

// Define the expected prop types
Header.propTypes = {
  onShowInfo: PropTypes.func.isRequired,
};

export default Header;
