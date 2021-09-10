import React from 'react'
import './Typography.css'

const Typography = ({ variant = 'p', color = 'black', styles = {}, children }) => {
	const element = React.createElement(variant, { className: `Typography-${variant}`}, children)
	return element
}

export default Typography