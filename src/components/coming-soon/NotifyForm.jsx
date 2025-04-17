import { useForm } from "react-hook-form";
import FadeInUp from "../animation/FadeInUp";
import Field from "../common/Field";
function NotifyForm() {
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm();
	const submitForm = (formData) => {
		console.log("Submite Form Data = ", formData);
	};

	return (
		<FadeInUp>
			<form onSubmit={handleSubmit(submitForm)}>
				<div className="aximo-coming-newsletter">
					<Field error={errors.email}>
						<input
							{...register("email", { required: "Email is required." })}
							type="email"
							name="email"
							id="email"
							placeholder="Enter your email"
						/>
					</Field>

					<button type="submit" id="aximo-notified-btn">
						Bądzmy w kontakcie!
					</button>
					<p>Nie udostępniamy twojego adresu ani nie wysyłamy treści reklamowyczh czy wiadomości typu SPAM*</p>
				</div>
			</form>
		</FadeInUp>
	);
}

export default NotifyForm;
