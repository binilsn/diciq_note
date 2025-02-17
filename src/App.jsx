import { Box } from "@mui/material";
import "./App.css";
import AppEditor from "./components/Editor";
import { useEffect, useState } from "react";
import AppLoader from "./components/AppLoader";

function App() {
	const [active, setActive] = useState(true);

	useEffect(() => {
		setTimeout(() => {
			setActive(false);
		}, 3000);
	}, [active]);

	if (active) return <AppLoader />;
	else
		return (
			<Box
				display="flex"
				sx={{ height: { sm: "100vh", md: "100vh", lg: "100%" } }}
				flexDirection="column"
				justifyContent="center"
				padding={2}
			>
				<AppEditor />
			</Box>
		);
}

export default App;
