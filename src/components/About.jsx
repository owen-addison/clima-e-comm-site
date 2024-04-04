import PropTypes from 'prop-types';

function About({ onClose }) {
  return (
    <>
      <div className="about fixed inset-0 z-10 flex flex-col items-start justify-start bg-moss-400">
        <div className="about-header flex w-full flex-row justify-end px-4">
          <button
            onClick={onClose}
            className="mx-4 rounded bg-moss-700 px-4 py-2 text-white hover:bg-moss-900"
          >
            Close
          </button>
        </div>
        <div className="about-body flex flex-col items-center justify-center p-8">
          <h1 className="text-xl font-medium">ABOUT</h1>
          <div className="about-text flex w-4/6 flex-col gap-6 p-8">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Et
              malesuada fames ac turpis egestas sed. Sit amet aliquam id diam.
              Elementum integer enim neque volutpat. Ipsum nunc aliquet bibendum
              enim facilisis gravida neque. Faucibus et molestie ac feugiat sed
              lectus vestibulum mattis. Id interdum velit laoreet id. Egestas
              quis ipsum suspendisse ultrices gravida dictum. Arcu non sodales
              neque sodales ut etiam sit amet. Tortor at auctor urna nunc.
              Egestas diam in arcu cursus euismod quis. Non odio euismod lacinia
              at quis risus sed vulputate odio. Et malesuada fames ac turpis
              egestas integer eget aliquet nibh.
            </p>
            <p>
              Id diam maecenas ultricies mi eget mauris. Pellentesque eu
              tincidunt tortor aliquam nulla facilisi cras. Nibh tortor id
              aliquet lectus proin nibh. Pharetra diam sit amet nisl suscipit
              adipiscing bibendum est ultricies. Nibh nisl condimentum id
              venenatis a condimentum. Proin fermentum leo vel orci porta non
              pulvinar. Auctor elit sed vulputate mi sit. Eu ultrices vitae
              auctor eu augue ut. Turpis egestas maecenas pharetra convallis
              posuere morbi leo urna molestie. Commodo viverra maecenas accumsan
              lacus vel facilisis. Venenatis lectus magna fringilla urna.
              Aliquam sem fringilla ut morbi tincidunt. Enim blandit volutpat
              maecenas volutpat blandit aliquam. Elit duis tristique
              sollicitudin nibh sit.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

// Define the expected prop types
About.propTypes = {
  onClose: PropTypes.func.isRequired,
};

export default About;
