import PropTypes from 'prop-types';

const HoverCard = ({ word, definition }) => {

    const formattedDefinition = definition.map((item, index) => (
        <span key={index}>
          {item}
          <br />
        </span>
      ));
  return (
    <div className="p-6 shadow-2xl absolute z-50 bg-cyan-700">
      <h2 className="text-5xl font-bold mb-8 text-white">{word}</h2>
      <p className='w-28'>{formattedDefinition}</p>
    </div>
  );
};

HoverCard.propTypes = {
  word: PropTypes.string.isRequired,
  definition: PropTypes.string.isRequired,
};

export default HoverCard;
