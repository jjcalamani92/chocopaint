import { initialDataProduct } from '../../../data';

import { getProductBySubCategory } from '../../../helpers/getProductBySubCategory';
import { CardLayout } from '../../layouts/card/CardLayout';
import { Swiper, SwiperSlide } from 'swiper/react/swiper-react';
import { Pagination } from 'swiper';
import 'swiper/swiper.min.css';
import 'swiper/modules/pagination/pagination.min.css';
import 'swiper/modules/navigation/navigation.min.css';

interface Props {
	subCategory: string;
}
export const StoreComponent = ({ subCategory }: Props) => {
	const { products } = initialDataProduct;
	const product = getProductBySubCategory(products, subCategory);
	return (
		<>
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
							slidesPerView: 4,
							spaceBetween: 10
						}
					}}
					modules={[Pagination]}
					className="mySwiper"
				>
					{product.map((Products: any, index: number) => (
						<SwiperSlide key={index}>
							<CardLayout Products={Products} />
						</SwiperSlide>
					))}
				</Swiper>
			</section>
		</>
	);
};
