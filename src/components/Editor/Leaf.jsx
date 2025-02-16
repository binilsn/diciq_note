import PropTypes from "prop-types";

const Leaf = ({ attributes, children, leaf }) => {
	if (leaf.bold) {
		children = <strong>{children}</strong>;
	}
	if (leaf.code) {
		children = <code>{children}</code>;
	}
	if (leaf.italic) {
		children = <em>{children}</em>;
	}
	if (leaf.underline) {
		children = <u>{children}</u>;
	}
	return <span {...attributes}>{children}</span>;
};

Leaf.propTypes = {
	attributes: PropTypes.object.isRequired,
	children: PropTypes.node.isRequired,
	leaf: PropTypes.object.isRequired,
};
export default Leaf;
