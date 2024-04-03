import PropTypes from 'prop-types';

function About({ onClose }) {
  return (
    <>
      <div className="about fixed inset-0 z-10 flex flex-col items-start justify-between bg-moss-400">
        <div className="about-header flex w-full flex-row justify-end px-4">
          <button
            onClick={onClose}
            className="mx-4 rounded bg-moss-700 px-4 py-2 text-white hover:bg-moss-900"
          >
            Close
          </button>
        </div>
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
