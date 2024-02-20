import PropTypes from "prop-types";
import { Tooltip } from "keep-react";

const Lines = ({ ayah, number }) => {
  return (
    <div className="relative flex flex-row mt-16 ml-24">
      <h1 className="font-bold text-2xl text-teal-700">{number}</h1>

      {ayah
        .slice()
        .reverse()
        .map((item, index) => (
          <div key={index}>
            {item.card ? (
              <Tooltip
                title={item.word}
                content={item.definition}
                trigger="hover"
                placement="top"
                animation="duration-300"
                style="dark"
              >
                <p className="font-bold text-2xl text-red-700">{item.word}</p>
              </Tooltip>
            ) : (
              <p className="text-2xl text-sky-900">{item.word}</p>
            )}
          </div>
        ))}
    </div>
  );
};

Lines.propTypes = {
  ayah: PropTypes.object.isRequired,
  number: PropTypes.string.isRequired,
};

export default Lines;
