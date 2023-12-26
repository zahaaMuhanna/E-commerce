import React ,{ Component } from 'react'
import Categories from './../categories/Categories.jsx';
import './home.css'


function Home() {
  
  return (
    <>
    <Categories/> 
<section className='homesection'>
  <div className='container '>
  <h2 className="h2Home">Our Products</h2>
  <div>
      <ul className="nav nav-tabs border-bottom-0" id="myTab" role="tablist">
        <li className="nav-item" role="presentation">
          <button className="nav-link active" id="home-tab" data-bs-toggle="tab" data-bs-target="#home" type="button" role="tab" aria-controls="home" aria-selected="true">All Products</button>
        </li>
        <li className="nav-item" role="presentation">
          <button className="nav-link" id="profile-tab" data-bs-toggle="tab" data-bs-target="#profile" type="button" role="tab" aria-controls="profile" aria-selected="false">Women</button>
        </li>
        <li className="nav-item" role="presentation">
          <button className="nav-link" id="men-tab" data-bs-toggle="tab" data-bs-target="#men" type="button" role="tab" aria-controls="men" aria-selected="false">Men</button>
        </li>
        <li className="nav-item" role="presentation">
          <button className="nav-link" id="Kids-tab" data-bs-toggle="tab" data-bs-target="#Kids" type="button" role="tab" aria-controls="Kids" aria-selected="false">Kids</button>
        </li>
      </ul>

      <div className="tab-content" id="myTabContent">

        <div className="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">
          <div className="row py-5">

            <div className="col-md-3 pt-3">
              <img src="women/women4.png" alt="product-01" className="itemProduct" />
              <h5 className="h5Home">Esprit Ruffle Shirt</h5><span className="spanHome">$16.64</span>
            </div>
            <div className="col-md-3  pt-3">
              <img src="women/women2.png" alt="product-01" className="itemProduct" />
              <h5 className="h5Home">Esprit Ruffle Shirt</h5><span className="spanHome">$16.64</span>
            </div>
            <div className="col-md-3  pt-3">
              <img src="women/women3.png" alt="product-01" className="itemProduct" />
              <h5 className="h5Home">Esprit Ruffle Shirt</h5><span className="spanHome">$16.64</span>
            </div>
            <div className="col-md-3  pt-3">
              <img src="women/women5.png" alt="product-01" className="itemProduct" />
              <h5 className="h5Home">Esprit Ruffle Shirt</h5><span className="spanHome">$16.64</span>
            </div>

            <div className="col-md-3  pt-3">
              <img src="kids\kids1.png" alt="product-01" className="itemProduct" />
              <h5 className="h5Home">Esprit Ruffle Shirt</h5><span className="spanHome">$16.64</span>
            </div>
            <div className="col-md-3  pt-3">
              <img src="kids/kids2.png" alt="product-01" className="itemProduct" />
              <h5 className="h5Home">Esprit Ruffle Shirt</h5><span className="spanHome">$16.64</span>
            </div>
            <div className="col-md-3  pt-3">
              <img src="kids/kids4.png" alt="product-01" className="itemProduct" />
              <h5 className="h5Home">Esprit Ruffle Shirt</h5><span className="spanHome">$16.64</span>
            </div>
            <div className="col-md-3  pt-3">
              <img src="man/man2.png" alt="product-01" className="itemProduct" />
              <h5 className="h5Home">Esprit Ruffle Shirt</h5><span className="spanHome">$16.64</span>
            </div>

            <div className="col-md-3  pt-3">
              <img src="man/man3.png" alt="product-01" className="itemProduct" />
              <h5 className="h5Home">Esprit Ruffle Shirt</h5><span className="spanHome">$16.64</span>
            </div>
            <div className="col-md-3  pt-3">
              <img src="man/man4.png" alt="product-01" className="itemProduct" />
              <h5 className="h5Home">Esprit Ruffle Shirt</h5><span className="spanHome">$16.64</span>
            </div>
          </div>
        </div>

        <div className="tab-pane fade" id="profile" role="tabpanel" aria-labelledby="profile-tab">
          <div className="row py-5">
          <div className="col-md-3 pt-3">
              <img src="women/women4.png" alt="product-01" className="itemProduct" />
              <h5 className="h5Home">Esprit Ruffle Shirt</h5><span className="spanHome">$16.64</span>
            </div>
            <div className="col-md-3  pt-3">
              <img src="women/women2.png" alt="product-01" className="itemProduct" />
              <h5 className="h5Home">Esprit Ruffle Shirt</h5><span className="spanHome">$16.64</span>
            </div>
            <div className="col-md-3  pt-3">
              <img src="women/women3.png" alt="product-01" className="itemProduct" />
              <h5 className="h5Home">Esprit Ruffle Shirt</h5><span className="spanHome">$16.64</span>
            </div>
            <div className="col-md-3  pt-3">
              <img src="women/women5.png" alt="product-01" className="itemProduct" />
              <h5 className="h5Home">Esprit Ruffle Shirt</h5><span className="spanHome">$16.64</span>
            </div>
          </div>
        </div>

        <div className="tab-pane fade" id="men" role="tabpanel" aria-labelledby="men-tab">
          <div className="row py-5">
          <div className="col-md-3  pt-3">
              <img src="man/man2.png" alt="product-01" className="itemProduct" />
              <h5 className="h5Home">Esprit Ruffle Shirt</h5><span className="spanHome">$16.64</span>
            </div>

            <div className="col-md-3  pt-3">
              <img src="man/man3.png" alt="product-01" className="itemProduct" />
              <h5 className="h5Home">Esprit Ruffle Shirt</h5><span className="spanHome">$16.64</span>
            </div>
            <div className="col-md-3  pt-3">
              <img src="man/man4.png" alt="product-01" className="itemProduct" />
              <h5 className="h5Home">Esprit Ruffle Shirt</h5><span className="spanHome">$16.64</span>
            </div>
          </div>
        </div>

        <div className="tab-pane fade" id="Kids" role="tabpanel" aria-labelledby="Kids-tab">
          <div className="row py-5">
          <div className="col-md-3  pt-3">
              <img src="kids\kids1.png" alt="product-01" className="itemProduct" />
              <h5 className="h5Home">Esprit Ruffle Shirt</h5><span className="spanHome">$16.64</span>
            </div>
            <div className="col-md-3  pt-3">
              <img src="kids/kids2.png" alt="product-01" className="itemProduct" />
              <h5 className="h5Home">Esprit Ruffle Shirt</h5><span className="spanHome">$16.64</span>
            </div>
            <div className="col-md-3  pt-3">
              <img src="kids/kids4.png" alt="product-01" className="itemProduct" />
              <h5 className="h5Home">Esprit Ruffle Shirt</h5><span className="spanHome">$16.64</span>
            </div>
          </div>
        </div>

      </div>
    </div>
    
  </div>
</section>

</>

  )
}

export default Home