import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ContactPages } from '../components/pages/contact/ContactPages';
import { HomePages } from '../components/pages/home/HomePages';
import { Layout } from './Layout';
import { ProductsPages } from '../components/pages/product/ProductsPages';
import ScrollToTop from '../helpers/ScrollToTop';
import { StorePages } from '../components/pages/store/StorePages';
import { CartPages } from '../components/pages/cart/CartPages';
import { DetailLayout } from '../components/layouts/details/DetailLayout';
import { CategoryPages } from '../components/pages/category/CategoryPages';
import { getProductByCategory } from '../helpers/getProductByCategory';
import React from 'react';
import { initialDataCategory } from '../data';
import { ICategory } from '../interface';

export const AppRouter = () => {
	const { categories } = initialDataCategory;
	// const { categories } = useSelector((state: State) => state.Category);
	return (
		<BrowserRouter>
			<ScrollToTop>
				<Routes>
					<Route path="/" element={<Layout />}>
						<Route index element={<HomePages />} />
						<Route path="tienda" element={<CategoryPages />} />
						<Route
							path="linea_automotriz"
							element={<StorePages category="linea_automotriz" />}
						/>

						{getProductByCategory(categories, 'linea_automotriz').map(
							(data: ICategory, index: number) => (
								<React.Fragment key={index}>
									<Route
										path={`${data.category}/${data.subCategory}`}
										element={
											<ProductsPages
												title={data.subCategory}
												category="herramientas"
												subCategory={data.subCategory}
											/>
										}
									/>
									<Route
										path={`${data.category}/${data.subCategory}/:name`}
										element={<DetailLayout />}
									/>
								</React.Fragment>
							)
						)}

						<Route path="contacto" element={<ContactPages />} />
						<Route path="checkout" element={<CartPages />} />
					</Route>
				</Routes>
			</ScrollToTop>
		</BrowserRouter>
	);
};
