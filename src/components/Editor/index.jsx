import useTransform from "../../hooks/useTransform";
import styles from "./index.module.css";
import { useForm } from "react-hook-form";

const AppEditor = () => {
	const { encrypt, decrypt } = useTransform();
	const { register, getValues } = useForm({
		defaultValues: { note: decrypt(localStorage.getItem("diciq-note")) },
	});

	const handleNoteChange = () =>
		localStorage.setItem("diciq-note", encrypt(getValues("note")));

	return (
		<main id={styles.container}>
			<textarea
				id={styles["diciq-editor"]}
				{...register("note", { onChange: handleNoteChange })}
			/>
		</main>
	);
};

export default AppEditor;
