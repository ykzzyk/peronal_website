import React from "react"
import PropTypes from "prop-types"

import IconLinkedIn from "./linkedin"
import IconGitHub from "./github"
import IconExternal from "./external"
import IconMail from "./facebook"
import IconMedium from "./leetcode"

// Utility function to grab Icons by name
const Icon = ({ name, color }) => {
  switch (name.toLowerCase()) {
    case "linkedin":
      return <IconLinkedIn color={color} />
    case "github":
      return <IconGitHub color={color} />
    case "external":
      return <IconExternal color={color} />
    case "facebook":
      return <IconMail color={color} />
    case "leetcode":
      return <IconMedium color={color} />
    default:
      return null
  }
}

Icon.propTypes = {
  name: PropTypes.string.isRequired,
  color: PropTypes.string,
}

export default Icon
