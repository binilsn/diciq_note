import { useCallback, useState } from "react";
import useTransform from "../../hooks/useTransform";
import styles from "./index.module.css";
import { Controller, useForm } from "react-hook-form";
import { Slate, withReact, Editable } from "slate-react";
import { createEditor } from "slate";
import Toolbar from "./Toolbar";
import Leaf from "./Leaf";
const EDITOR_KEY = "diciq-note-plus";
const initialValue = [
	{
		type: "paragraph",
		children: [{ text: "A line of text in a paragraph." }],
	},
];
const AppLoadedEditor = () => {
	const renderLeaf = useCallback((props) => <Leaf {...props} />, []);
	const [editor] = useState(() => withReact(createEditor()));
	const { encrypt, decrypt } = useTransform();
	const defaultVal = decrypt(localStorage.getItem(EDITOR_KEY));
	const { control, getValues } = useForm({
		defaultValues: {
			notePlus: defaultVal ? JSON.parse(defaultVal) : initialValue,
		},
	});

	const handleNoteChange = () =>
		localStorage.setItem(
			EDITOR_KEY,
			encrypt(JSON.stringify(getValues("notePlus")))
		);

	return (
		<main id={styles.container}>
			<Controller
				name="notePlus"
				control={control}
				render={({ field: { onChange, value } }) => (
					<Slate
						editor={editor}
						initialValue={value}
						onChange={(e) => onChange(e) && handleNoteChange()}
					>
						<Toolbar />

						<Editable
							renderLeaf={renderLeaf}
							spellCheck
							id={styles["diciq-editor"]}
						/>
					</Slate>
				)}
			/>
		</main>
	);
};

export default AppLoadedEditor;
