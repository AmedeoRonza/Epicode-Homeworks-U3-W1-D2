import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Topbar from "./components/Topbar";
import Titolo from "./components/Titolo";
import AllTheBooks from "./components/AllTheBooks";
import Footer from "./components/Footer";
import { Container } from "react-bootstrap";

function App() {
	return (
		<>
			<Topbar />
			<Container>
				<Titolo />
				<AllTheBooks />
			</Container>
			<Footer />
		</>
	);
}

export default App;
