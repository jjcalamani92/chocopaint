import { FooterLink } from './FooterLink';
import { FooterHorario } from './FooterHorario';
import { FooterContact } from './FooterContact';
import { FooterInfo } from './FooterInfo';
import { initialData } from '../../../data';

export const FooterLayout = () => {
	// const { date } = useSelector((state: State) => state.Start);
	const { date } = initialData;
	const { name, domain, logo, phoneNumber, map } = date;

	return (
		<>
			<section className="footer">
				<FooterLink />
				<FooterHorario />
				<FooterContact domain={domain} phoneNumber={phoneNumber} />
				<FooterInfo />
			</section>
		</>
	);
};
