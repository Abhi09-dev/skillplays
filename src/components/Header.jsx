import React from 'react'
import reactLogo from '../assets/images/logo.png'

const Header = () => {
	return (
		<>
			<nav className="navbar navbar-expand-lg nav-brder-btm">
				<div className="container">
					<a className="navbar-brand pt-0" href="#">
						<img src={reactLogo} className="logo react" alt="React logo" />
					</a>
					{/* <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarScroll" aria-controls="navbarScroll" aria-expanded="false" aria-label="Toggle navigation">
						<span className="navbar-toggler-icon"></span>
					</button> */}
					<button className="btn navbar-toggler tglr-btn p-2" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasExample" aria-controls="offcanvasExample" aria-expanded="false" aria-label="Toggle navigation">
						<img src='../src/assets/images/menus.svg' className="menu" alt="" />
					</button>

					<div className="collapse navbar-collapse" id="navbarScroll">
						<ul className="navbar-nav ms-auto my-2 my-lg-0 navbar-nav-scroll header-menu">
							<li className="nav-item pe-3">
								<a className="nav-link active" aria-current="page" href="#">Home</a>
							</li>
							<li className="nav-item px-3">
								<a className="nav-link" href="#">Communities</a>
							</li>
							<li className="nav-item px-3">
								<a className="nav-link" href="#">About</a>
							</li>
							<li className="nav-item px-3">
								<a className="nav-link" href="#">How to</a>
							</li>
							<li className="nav-item ps-3">
								<a className="nav-link" href="#">Faq</a>
							</li>
						</ul>
					</div>
				</div>
			</nav>

			<div className="offcanvas offcanvas-start bg-323838" tabIndex="-1" id="offcanvasExample" aria-labelledby="offcanvasExampleLabel">
				<div className="offcanvas-header">
					<h5 className="offcanvas-title" id="offcanvasExampleLabel">
						<img src={reactLogo} className="logo react" alt="React logo" />
					</h5>
					<button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
				</div>
				<div className="offcanvas-body">
					<div>
						Some text as placeholder. In real life you can have the elements you have chosen. Like, text, images, lists, etc.
					</div>
					<div className="dropdown mt-3">
						<button className="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown">
							Dropdown button
						</button>
						<ul className="dropdown-menu">
							<li><a className="dropdown-item" href="#">Action</a></li>
							<li><a className="dropdown-item" href="#">Another action</a></li>
							<li><a className="dropdown-item" href="#">Something else here</a></li>
						</ul>
					</div>
				</div>
			</div>
		</>
	)
}

export default Header