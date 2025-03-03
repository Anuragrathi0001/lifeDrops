import { useState } from "react";
import HeroComponent from "../../sections/hero/hero-component";
import FormComponent from "../../sections/form/form-component";
import ContactDetailsComponent from "../../sections/details/details-component";
import HeaderComponent from "../../sections/header/header-component";
import BeforeFooterCTA from "../../sections/before-footer-cta/before-footer-cta-components";
import FooterComponent from "../../sections/footer/footer-component";

import Axios from "axios";

import { FaPhoneAlt, FaMapMarkerAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import newUsersInsertRequest from "../../utility-functions/new-users-insert-request";

const ContactPage = () => {
	const [formData, setFormData] = useState({
		name: "",
		email: "",
		phone: "",
		reason: "",
		message: "",
	});

	const handleSubmit = (e) => {
		e.preventDefault();

		console.log(formData);

		Axios.post("http://localhost:3001/create-need-help", {
			name: formData.name,
			email: formData.email,
			phone: formData.phone,
			reason: formData.reason,
			message: formData.message,
		})
			.then((response) => {
				console.log("success");
				console.log(response.data);
			})
			.catch((error) => {
				console.log(error);
			});

		newUsersInsertRequest(formData, "need-help");

		setFormData({
			name: "",
			email: "",
			phone: "",
			reason: "",
			message: "",
		});
	};

	const ContactPageDetails = {
		hero: {
			subheadingText: "Got any Questions?",
			headingText: "Don't Know What to Do? Let Us Assist You.",
			classHint: "contact-page-hero",
		},
	};

	const fields = [
		{
			key: "name",
			name: "name",
			type: "text",
			placeholder: "Name",
			required: true,
		},
		{
			key: "email",
			name: "email",
			type: "email",
			placeholder: "Email",
			required: true,
		},
		{
			key: "phone",
			name: "phone",
			type: "tel",
			placeholder: "Phone",
			required: true,
		},
		{
			key: "reason",
			name: "reason",
			type: "text",
			placeholder: "Reason",
			required: false,
		},
	];

	const contactDetails = [
    {
      key: "phone",
      stepNumber: <FaPhoneAlt />,
      stepName: "Phone",
      stepDescription: "+91 9719472233",
      stepUrl: "tel:+91 8650489767",
    },
    {
      key: "email",
      stepNumber: <MdEmail />,
      stepName: "Email",
      stepDescription: "help_lifedrops@gmail.com",
      stepUrl: "mailto:help_lifedrops@gmail.com",
    },
    {
      key: "address",
      stepNumber: <FaMapMarkerAlt />,
      stepName: "Address",
      stepDescription: "Alpha 1,gautambudh nagar,greater noida",
      stepUrl:
        "https://www.google.com/maps/dir//Alpha+1,+Block+E,+Alpha+I,+Greater+Noida,+Uttar+Pradesh/@28.4723306,77.5114879,17z/data=!4m9!4m8!1m0!1m5!1m1!1s0x390cea7e6f255555:0x962896a30b7f922d!2m2!1d77.5140181!2d28.4723714!3e0?entry=ttu&g_ep=EgoyMDI1MDEyMi4wIKXMDSoASAFQAw%3D%3D",
    },
  ];

	return (
		<>
			<HeaderComponent />

			<HeroComponent {...ContactPageDetails.hero} />
			<FormComponent
				fields={fields}
				heading={"We're to help"}
				buttonText={"Send Message"}
				handleSubmit={handleSubmit}
				formData={formData}
				setFormData={setFormData}
			/>
			<ContactDetailsComponent contactDetails={contactDetails} />
			<BeforeFooterCTA />
			<FooterComponent />
		</>
	);
};

export default ContactPage;
