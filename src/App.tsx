import { AppRouter } from './routers/AppRouter';
import { UiProvider, CartProvider } from './context';

const App = () => {
	return (
		<CartProvider>
			<UiProvider>
				<AppRouter />
			</UiProvider>
		</CartProvider>
	);
};

export default App;
