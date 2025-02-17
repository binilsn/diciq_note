import {
	Code,
	FormatBoldOutlined,
	FormatItalic,
	FormatUnderlined,
} from "@mui/icons-material";
import { Grid2, Paper } from "@mui/material";
import ToolbarButton from "./ToolbarButton";

const Toolbar = () => {
	return (
		<Grid2
			component={Paper}
			justifyContent="start"
			container
			my={2}
			p={2}
			elevation={12}
		>
			<ToolbarButton mark="bold" icon={<FormatBoldOutlined />} />
			<ToolbarButton mark="italic" icon={<FormatItalic />} />
			<ToolbarButton mark="underline" icon={<FormatUnderlined />} />
			<ToolbarButton mark="code" icon={<Code />} />
		</Grid2>
	);
};

export default Toolbar;
