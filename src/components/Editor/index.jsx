import { Paper } from "@mui/material";
import { useEffect, useRef, useState } from "react";
import "trix/dist/trix.css";
import Trix from 'trix'

const AppEditor = () => {
	const [data, setData] = useState(localStorage.getItem("diciq-note"));
	const editorRef = useRef();
	useEffect(() => {
		Trix.config.textAttributes.fontSize = {
			styleProperty: "font-size",
			inheritable: 1,
		};
		editorRef.current.addEventListener("trix-change", (event) => {
			setData(event.target.innerHTML);
			localStorage.setItem("diciq-note", event.target.innerHTML);
		});
	}, [editorRef]);

	return (
		<main>
			<input type="text" hidden value={data} id="editor-input" readOnly />
			<Paper sx={{ marginBottom: 2 }}>
				<trix-editor
					ref={editorRef}
					toolbar="app-editor-toolbar"
					input="editor-input"
					style={{ height: "80vh", overflowY: "auto" }}
				></trix-editor>
			</Paper>
			<Paper elevation={10} sx={{ padding: 4, borderRadius: 4 }}>
				<trix-toolbar id="app-editor-toolbar"></trix-toolbar>
			</Paper>
		</main>
	);
};

export default AppEditor;
