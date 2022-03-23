import CodashCard from './CodashCard';
import EmailForm from './EmailForm';
import Footer from './Footer';
import Section from './Section';

export default function Home() {
	return (
		<div className="flex flex-col">
			<CodashCard/>
			<Section/>
			<EmailForm/>
			<Footer />
		</div>
	);
}