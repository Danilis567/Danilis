/* eslint-disable react/prop-types */
import PropTypes from "prop-types";

function BtnOutline({ data }) {
  return <button className="btn-outline">{data ?? ""}</button>;
}

BtnOutline.prototype = {
  data: PropTypes.string.isRequired,
};

export default BtnOutline;
