import PropTypes from 'prop-types';

function Info({ onClose }) {
  return (
    <>
      <div className="info fixed inset-0 z-10 flex flex-col items-start justify-start bg-moss-400">
        <div className="info-header flex h-16 w-full flex-shrink-0 flex-row justify-end px-8 pb-8">
          <p
            className="tracking-wider-2 group w-auto cursor-pointer items-center text-center font-sans text-base font-light text-moss-950 transition duration-300"
            onClick={onClose}
          >
            Close
            <span className="block h-0.5 max-w-0 bg-moss-950 bg-opacity-70 transition-all duration-500 group-hover:max-w-full"></span>
          </p>
        </div>
        <div className="info-body flex flex-col items-center justify-center p-8">
          <div className="about-section flex flex-col items-center justify-center p-8">
            <h1 className="text-xl font-medium">ABOUT</h1>
            <div className="about-text flex w-4/6 flex-col gap-6 p-8">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Et
                malesuada fames ac turpis egestas sed. Sit amet aliquam id diam.
                Elementum integer enim neque volutpat. Ipsum nunc aliquet
                bibendum enim facilisis gravida neque. Faucibus et molestie ac
                feugiat sed lectus vestibulum mattis. Id interdum velit laoreet
                id. Egestas quis ipsum suspendisse ultrices gravida dictum. Arcu
                non sodales neque sodales ut etiam sit amet. Tortor at auctor
                urna nunc. Egestas diam in arcu cursus euismod quis. Non odio
                euismod lacinia at quis risus sed vulputate odio. Et malesuada
                fames ac turpis egestas integer eget aliquet nibh.
              </p>
              <p>
                Id diam maecenas ultricies mi eget mauris. Pellentesque eu
                tincidunt tortor aliquam nulla facilisi cras. Nibh tortor id
                aliquet lectus proin nibh. Pharetra diam sit amet nisl suscipit
                adipiscing bibendum est ultricies. Nibh nisl condimentum id
                venenatis a condimentum. Proin fermentum leo vel orci porta non
                pulvinar. Auctor elit sed vulputate mi sit. Eu ultrices vitae
                auctor eu augue ut. Turpis egestas maecenas pharetra convallis
                posuere morbi leo urna molestie. Commodo viverra maecenas
                accumsan lacus vel facilisis. Venenatis lectus magna fringilla
                urna. Aliquam sem fringilla ut morbi tincidunt. Enim blandit
                volutpat maecenas volutpat blandit aliquam. Elit duis tristique
                sollicitudin nibh sit.
              </p>
            </div>
            <div className="contact-section flex flex-col items-center justify-center p-8">
              <h1 className="text-xl font-medium">CONTACT</h1>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

// Define the expected prop types
Info.propTypes = {
  onClose: PropTypes.func.isRequired,
};

export default Info;
