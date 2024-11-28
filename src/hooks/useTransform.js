import * as CryptoJS from "crypto-js";
import dayjs from "dayjs";

export default function useTransform() {
	const getKey = () => {
		const key = localStorage.getItem("diciq-key");
		if (key == null || key.length == 0) {
			const newKey = String(CryptoJS.SHA256(dayjs().unix().toString));
			localStorage.setItem("diciq-key", newKey);
			return newKey;
		}
		return key;
	};

	const encrypt = (data = "") => {
		if (data == null || data.length == 0) return "";
		const cipherText = CryptoJS.AES.encrypt(data, getKey()).toString();
		return cipherText;
	};

	const decrypt = (data = "") => {
		if (data == null || data.length == 0) return "";
		const bytes = CryptoJS.AES.decrypt(data, getKey());
		const plainText = bytes.toString(CryptoJS.enc.Utf8);
		return plainText;
	};

	return { decrypt: decrypt, encrypt: encrypt };
}
