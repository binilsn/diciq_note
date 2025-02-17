import { IconButton, Stack, Tooltip, Typography } from "@mui/material";
import { useState } from "react";
import AppLoadedEditor from "./LoadedEditor";
import PlainEditor from "./PlainEditor";
import { AutoAwesome } from "@mui/icons-material";

const EDITOR_KEY = "diciq-note-user-editor";

const AppEditor = () => {
	const selected = JSON.parse(localStorage.getItem(EDITOR_KEY));
	const [enableLoadedEditor, setEnableLoadedEditor] = useState(selected);

	const handleToggle = () =>
		setEnableLoadedEditor((prev) => {
			localStorage.setItem(EDITOR_KEY, !prev);
			return !prev;
		});

	return (
		<>
			<Stack
				direction="row"
				my={1}
				p={1}
				justifyContent="center"
				alignItems="center"
				spacing={1}
			>
				<Typography
					variant="h4"
					fontWeight="bold"
					textAlign="center"
					color="#FFFFFF"
					m={2}
				>
					Notepad
				</Typography>
				<Tooltip
					title={
						enableLoadedEditor ? "Disable Plus Editor" : "Enable Plus Editor"
					}
					arrow
					placement="right"
				>
					<IconButton
						size="large"
						sx={{ color: enableLoadedEditor ? "wheat" : "default" }}
						onClick={handleToggle}
					>
						<AutoAwesome />
					</IconButton>
				</Tooltip>
			</Stack>
			{enableLoadedEditor ? <AppLoadedEditor /> : <PlainEditor />}
		</>
	);
};

export default AppEditor;
