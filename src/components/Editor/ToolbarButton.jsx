import { Grid2, IconButton } from "@mui/material";
import PropTypes from "prop-types";
import { Editor } from "slate";
import { useSlate } from "slate-react";
const ToolbarButton = ({ mark, icon }) => {
	const editor = useSlate();
	const toggleMark = () =>
		isActive(mark)
			? Editor.removeMark(editor, mark)
			: Editor.addMark(editor, mark, true);

	const isActive = () => hasMarks() && Editor.marks(editor)[mark] && true;
	const hasMarks = () => Editor.marks(editor) && true;

	return (
		<Grid2 size={{ md: 1, xs: 12, lg: 0.5 }} p={1}>
			<IconButton
				sx={{ border: 1 }} 
				onMouseDown={(e) => {
					e.preventDefault();
					toggleMark();
				}}
				color={isActive() ? "primary" : "default"}
			>
				{icon}
			</IconButton>
		</Grid2>
	);
};

ToolbarButton.propTypes = {
	mark: PropTypes.string.isRequired,
	icon: PropTypes.node.isRequired,
};

export default ToolbarButton;
