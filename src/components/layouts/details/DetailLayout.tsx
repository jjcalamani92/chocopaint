import { useSelector, useDispatch } from 'react-redux';

import { useParams } from 'react-router-dom';
import { getProductById } from '../../../helpers/getProductById';
import { getProductMore } from '../../../helpers/getProductMore';
import { HeadingPrimary, HeadingTertiary } from '../heading/HeadingLayouts';
import { CardMoreProduct } from '../card/CardMoreProduct';
import { getProductBySubCategory } from '../../../helpers/getProductBySubCategory';
import { DetailImageColor } from './DetailImageColor';
import { DetailContent } from './DetailContent';
import { initialDataProduct } from '../../../data';

import { Swiper, SwiperSlide } from 'swiper/react/swiper-react';
import { Pagination } from 'swiper';
import 'swiper/swiper.min.css';
import 'swiper/modules/pagination/pagination.min.css';
import 'swiper/modules/navigation/navigation.min.css';
import { CardLayout } from '../card/CardLayout';

export const DetailLayout = () => {
	// const { products, index } = useSelector((state: State) => state.Product);
	const { products } = initialDataProduct;
	const { name } = useParams();
	const product = getProductById(products, name);
	const moreProduct = getProductBySubCategory(products, product.subCategory);

	return (
		<>
			<HeadingPrimary titleP="detalles del producto" />
			<section className="detail">
				{/* <!-- card left --> */}
				<DetailImageColor product={product} />
				{/* <!-- card right --> */}
				<DetailContent product={product} />
			</section>

			<HeadingTertiary title="Productos similares" />

			{/* <section className="product-more">
				<Swiper
					slidesPerView={2}
					spaceBetween={10}
					// pagination={{
					// 	clickable: false
					// }}
					breakpoints={{
						375: {
							slidesPerView: 2,
							spaceBetween: 10
						},
						765: {
							slidesPerView: 3,
							spaceBetween: 10
						},
						1024: {
							slidesPerView: 5,
							spaceBetween: 10
						}
					}}
					modules={[Pagination]}
					className="mySwiper"
				>
					{moreProducts.map((Products: any, index: number) => (
						<SwiperSlide key={index}>
							<CardMoreProduct Products={Products} />
						</SwiperSlide>
					))}
				</Swiper>
			</section> */}
			<section className="products">
				<Swiper
					slidesPerView={2}
					spaceBetween={10}
					// pagination={{
					// 	clickable: true
					// }}
					breakpoints={{
						375: {
							slidesPerView: 1,
							spaceBetween: 10
						},
						765: {
							slidesPerView: 3,
							spaceBetween: 10
						},
						1024: {
							slidesPerView: 6,
							spaceBetween: 10
						}
					}}
					modules={[Pagination]}
					className="mySwiper"
				>
					{moreProduct.map((Products: any, index: number) => (
						<SwiperSlide key={index}>
							<CardLayout Products={Products} />
						</SwiperSlide>
					))}
				</Swiper>
			</section>
		</>
	);
};
