import './App.css';

import { Jumbotron } from './Components/Jumbotron/Jumbotron';
import { MenuPortfolio } from './Components/MenuPortfolio/MenuPortfolio';
import { portfolio } from './portfolioInfo';



function App() {
	return (
		<div className='App'>
			<Jumbotron />
      <MenuPortfolio portfolio={portfolio}/>
    
		</div>
	);
}

export default App;
