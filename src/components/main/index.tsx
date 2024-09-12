import { Flex } from '../styled-components';
import Carrousel from './Carrousel';
import Info from './Info';

const Main = (): JSX.Element => {
	return (
		<>
			<Flex>
				<Carrousel />
				<Info />
			</Flex>
		</>
	);
};

export default Main;
