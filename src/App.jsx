import { Box } from "@mui/material";
import "./App.css";
import AppEditor from "./components/Editor";

function App() {
	return (
		<Box
      display="flex"
      sx={{height:{sm:'100vh', md: '100vh', lg: '100%'}}}
			flexDirection="column"
			justifyContent="center"
			padding={2}
		>
			<AppEditor />
		</Box>
	);
}

export default App;
