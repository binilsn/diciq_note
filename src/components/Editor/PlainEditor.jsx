import useTransform from "../../hooks/useTransform";
import styles from "./index.module.css";
import { useForm } from "react-hook-form";
const EDITOR_NOTE_KEY = "diciq-note";

const PlainEditor = () => {
	const { encrypt, decrypt } = useTransform();
	const { register, getValues } = useForm({
		defaultValues: { note: decrypt(localStorage.getItem(EDITOR_NOTE_KEY)) },
	});

	const handleNoteChange = () =>
		localStorage.setItem(EDITOR_NOTE_KEY, encrypt(getValues("note")));

	return (
		<main id={styles.container}>
			<textarea
				id={styles["diciq-editor"]}
				{...register("note", { onChange: handleNoteChange })}
			/>
		</main>
	);
};

export default PlainEditor;
