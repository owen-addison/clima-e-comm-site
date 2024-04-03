import PropTypes from 'prop-types';

function About({ onClose }) {
  return (
    <>
      <div className="fixed inset-0 z-10 flex flex-col items-start justify-between bg-moss-700">
        <button
          onClick={onClose}
          className="m-4 rounded bg-red-600 p-2 text-white hover:bg-red-700"
        >
          Close
        </button>
        {/* Your about content here */}
      </div>
    </>
  );
}

// Define the expected prop types
About.propTypes = {
  onClose: PropTypes.func.isRequired,
};

export default About;
