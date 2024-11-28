import { Box, Typography } from "@mui/material";
import "./App.css";
import AppEditor from "./components/Editor";

function App() {
	return (
		<Box
			display="flex"
			sx={{ height: { sm: "100vh", md: "100vh", lg: "100%" } }}
			flexDirection="column"
			justifyContent="center"
			padding={2}
		>
			<Typography
				variant="h4"
				fontWeight="bold"
				textAlign="center"
				color="#FFFFFF"
				m={2}
			>
				DiciQ
			</Typography>
			<AppEditor />
		</Box>
	);
}

export default App;
