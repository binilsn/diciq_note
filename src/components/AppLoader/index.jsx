import { Box } from "@mui/material";
import loader from "../../assets/loader.svg";
const AppLoader = () => {
	return (
		<Box
			bgcolor="#FFFFFF"
			sx={{
				height: "100vh",
				width: "100%",
				display: "flex",
				flexDirection: "column",
				justifyContent: "center",
				alignItems: "center",
			}}
		>
			<img src={loader} alt="Loading..." height="15%" />
		</Box>
	);
};

export default AppLoader;
