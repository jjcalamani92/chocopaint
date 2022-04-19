import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretDown, faSearch } from '@fortawesome/free-solid-svg-icons';
import { getProductByCategory } from '../../../helpers/getProductByCategory';
import { useContext, useState } from 'react';
import { UiContext } from '../../../context';
import { initialDataCategory } from '../../../data';
import { ICategory } from '../../../interface';

import 'react-modern-drawer/dist/index.css';

import Drawer from 'react-modern-drawer';
import { HeaderLogo } from './HeaderLogo';

interface Props {
	logo: string;
}

export const HeaderNavbar = ({ logo }: Props) => {
	const { isMenuOpen, toggleSideMenu } = useContext(UiContext);

	const handleClose = () => {
		toggleSideMenu();
	};
	const { categories } = initialDataCategory;

	const [isOpen, setIsOpen] = useState(false);
	const toggleDrawer = () => {
		setIsOpen((prevState) => !prevState);
	};
	return (
		<>
			{/* <div className={isMenuOpen ? 'nav-btn active' : 'nav-btn'}> */}
			<div className="nav-btn nav-btns">
				<div className="nav-links">
					<ul>
						<li className="nav-link">
							<NavLink to="tienda">Tienda</NavLink>
						</li>
						<li className="nav-link">
							<NavLink to="linea_automotriz">
								linea automotriz
								<FontAwesomeIcon className="icon" icon={faCaretDown} />
							</NavLink>
							<div className="dropdown">
								<ul>
									{getProductByCategory(categories, 'linea_automotriz').map(
										(data: ICategory, index: number) => (
											<li className="dropdown-link" key={index}>
												<NavLink to={`${data.category}/${data.subCategory}`}>
													{data.nameSubCategory}
												</NavLink>
											</li>
										)
									)}

									<div className="arrow"></div>
								</ul>
							</div>
						</li>
						<li className="nav-link">
							<a href="#">
								servicios
								<FontAwesomeIcon className="icon" icon={faCaretDown} />
							</a>
							<div className="dropdown">
								<ul>
									<li className="dropdown-link">
										<a href="#">Link 1</a>
									</li>
									<li className="dropdown-link">
										<a href="#">Link 2</a>
									</li>
									<li className="dropdown-link">
										<a href="#">
											Link 3
											<FontAwesomeIcon className="icon" icon={faCaretDown} />
										</a>
										<div className="dropdown second">
											<ul>
												<li className="dropdown-link">
													<a href="#">Link 1</a>
												</li>
												<li className="dropdown-link">
													<a href="#">Link 2</a>
												</li>
												<li className="dropdown-link">
													<a href="#">Link 3</a>
												</li>
												<li className="dropdown-link">
													<a href="#">
														More
														<FontAwesomeIcon
															className="icon"
															icon={faCaretDown}
														/>
													</a>
													<div className="dropdown second">
														<ul>
															<li className="dropdown-link">
																<a href="#">Link 1</a>
															</li>
															<li className="dropdown-link">
																<a href="#">Link 2</a>
															</li>
															<li className="dropdown-link">
																<a href="#">Link 3</a>
															</li>
															<div className="arrow"></div>
														</ul>
													</div>
												</li>
												<div className="arrow"></div>
											</ul>
										</div>
									</li>
									<li className="dropdown-link">
										<a href="#">Link 4</a>
									</li>
									<div className="arrow"></div>
								</ul>
							</div>
						</li>
						<li className="nav-link">
							<NavLink to="contacto">Contacto</NavLink>
						</li>
					</ul>
				</div>
			</div>

			<Drawer
				open={isMenuOpen}
				onClose={toggleSideMenu}
				direction="left"
				size={300}
				className="nav-btn"
			>
				<div className="logo-navbars">
					<NavLink to="/">
						{/* <FontAwesomeIcon className="icon" icon={faCode} /> */}
						<img src={`${logo}`} alt="" />
					</NavLink>
				</div>

				<form action="" className="search active">
					<input
						type="search"
						name=""
						placeholder="Busca aquí..."
						id="search-box"
					/>
					<label>
						<FontAwesomeIcon className="icon" icon={faSearch} />
					</label>
				</form>

				<div className="nav-links">
					<ul>
						<li className="nav-link">
							<NavLink onClick={handleClose} to="tienda">
								Tienda
							</NavLink>
						</li>
						<li className="nav-link">
							<NavLink onClick={handleClose} to="linea_automotriz">
								linea automotriz
								<FontAwesomeIcon className="icon" icon={faCaretDown} />
							</NavLink>
							<div className="dropdown">
								<ul>
									{getProductByCategory(categories, 'linea_automotriz').map(
										(data: ICategory, index: number) => (
											<li className="dropdown-link" key={index}>
												<NavLink
													onClick={handleClose}
													to={`${data.category}/${data.subCategory}`}
												>
													{data.nameSubCategory}
												</NavLink>
											</li>
										)
									)}

									<div className="arrow"></div>
								</ul>
							</div>
						</li>
						<li className="nav-link">
							<a href="#">
								servicios
								<FontAwesomeIcon className="icon" icon={faCaretDown} />
							</a>
							<div className="dropdown">
								<ul>
									<li className="dropdown-link">
										<a href="#">Link 1</a>
									</li>
									<li className="dropdown-link">
										<a href="#">Link 2</a>
									</li>
									<li className="dropdown-link">
										<a href="#">
											Link 3
											<FontAwesomeIcon className="icon" icon={faCaretDown} />
										</a>
										<div className="dropdown second">
											<ul>
												<li className="dropdown-link">
													<a href="#">Link 1</a>
												</li>
												<li className="dropdown-link">
													<a href="#">Link 2</a>
												</li>
												<li className="dropdown-link">
													<a href="#">Link 3</a>
												</li>
												<li className="dropdown-link">
													<a href="#">
														More
														<FontAwesomeIcon
															className="icon"
															icon={faCaretDown}
														/>
													</a>
													<div className="dropdown second">
														<ul>
															<li className="dropdown-link">
																<a href="#">Link 1</a>
															</li>
															<li className="dropdown-link">
																<a href="#">Link 2</a>
															</li>
															<li className="dropdown-link">
																<a href="#">Link 3</a>
															</li>
															<div className="arrow"></div>
														</ul>
													</div>
												</li>
												<div className="arrow"></div>
											</ul>
										</div>
									</li>
									<li className="dropdown-link">
										<a href="#">Link 4</a>
									</li>
									<div className="arrow"></div>
								</ul>
							</div>
						</li>
						<li className="nav-link">
							<NavLink onClick={handleClose} to="contacto">
								Contacto
							</NavLink>
						</li>
					</ul>
				</div>
			</Drawer>
		</>
	);
};
