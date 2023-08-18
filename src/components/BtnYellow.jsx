/* eslint-disable react/prop-types */
import PropTypes from "prop-types";

function BtnYellow({ data }) {
  return <button className="btn-yellow"> {data ?? ""} </button>;
}

BtnYellow.prototype = {
  data: PropTypes.string.isRequired,
};

export default BtnYellow;
