import React from "react"
import PropTypes from "prop-types"

const External = ({ color }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      x="0px"
      y="0px"
      role="img"
      fill={color}
      width="24"
      height="24"
    >
      <g>
        <path
          d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm4.441 16.892c-2.102.144-6.784.144-8.883 0-2.276-.156-2.541-1.27-2.558-4.892.017-3.629.285-4.736 2.558-4.892 2.099-.144 6.782-.144 8.883 0 2.277.156 2.541 1.27 2.559 4.892-.018 3.629-.285 4.736-2.559 4.892zm-6.441-7.234l4.917 2.338-4.917 2.346v-4.684z"
        />
      </g>
    </svg>
    )
}

External.propTypes = {
  color: PropTypes.string,
}

External.defaultProps = {
  color: "#000000",
}

export default External
