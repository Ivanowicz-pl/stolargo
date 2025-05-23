import ArrowRight3Img from "../../../assets/images/icon/arrow-right3.svg";
import { useForm } from "react-hook-form";
import Field from "../../common/Field";

function MessageForm() {
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm();
	const submitForm = (formData) => {
		console.log("Submite Form Data = ", formData);
	};

	return (
		<form onSubmit={handleSubmit(submitForm)}>
			<div className="aximo-form-field">
				<Field error={errors.name}>
					<input
						{...register("name", { required: "Name is required." })}
						type="text"
						name="name"
						id="name"
						placeholder="Imię"
					/>
				</Field>
			</div>
			<div className="aximo-form-field">
				<Field error={errors.email}>
					<input
						{...register("email", { required: "Email is required." })}
						type="email"
						name="email"
						id="email"
						placeholder="Twój adres email"
					/>
				</Field>
			</div>
			<div className="aximo-form-field">
				<input type="text" placeholder="Twój numer telefonu" />
			</div>
			<div className="aximo-form-field">
				<textarea name="textarea" placeholder="Twoja wiadomość"></textarea>
			</div>
			<button id="aximo-submit-btn" type="submit">
				Wyślij wiadomość{" "}
				<span>
					<img src={ArrowRight3Img} alt="ArrowRight3Img" />
				</span>
			</button>
		</form>
	);
}

export default MessageForm;
