import React from 'react';

const Footer = () => {
  return (
    <div>
      <section class="py-0 bg-1000">
        <div class="container">
          <div class="row py-7">
            <div class="col-12 col-sm-12 col-lg-6 mb-4 order-0 order-sm-0"><a class="text-decoration-none" href="#"><img src="assets/img/icons/Logo2.png" height="51" alt="" /></a>
              <p class="text-light mt-4 mb-0">EU: +49 9999 0000</p>
              <p class="text-light mb-0">US: +00 4444 0000</p>
              <p class="text-light mt-5">info@gohub.ee</p>
              {/* <div class="d-flex"><a href="#!"><img class="me-xl-3 me-1" src="assets/img/gallery/linkedin-line1.svg" alt="in" width:'20px'="width:'20px'" height:'20px'="height:'20px'" /></a><a href="#!"><img class="me-xl-3 me-1" src="assets/img/gallery/facebook-line1.svg" alt="fb" width:'20px'="width:'20px'" height:'20px'="height:'20px'" /></a><a href="#!"><img class="me-xl-3 me-1" src="assets/img/gallery/twitter-line1.svg" alt="twitter" width:'20px'="width:'20px'" height:'20px'="height:'20px'" /></a><a href="#!"><img class="me-xl-3 me-1" src="assets/img/gallery/instagram-line1.svg" alt="instragram" width:'20px'="width:'20px'" height:'20px'="height:'20px'" /></a>
              </div> */}
            </div>
            <div class="col-3 col-sm-4 col-lg-2 mb-3 order-2 order-sm-1">
              <h5 class="lh-lg fw-bold text-light font-sans-serif">About Us</h5>
              <ul class="list-unstyled text-light mb-md-4">
                <li class="lh-lg"><a class="text-500 footer-link text-light" href="#!">Newsroom</a></li>
                <li class="lh-lg"><a class="text-500 footer-link text-light" href="#!">Blog</a></li>
                <li class="lh-lg"><a class="text-500 footer-link text-light" href="#!">Gohub API</a></li>
                <li class="lh-lg"><a class="text-500 footer-link text-light" href="#!">Gift cards</a></li>
                <li class="lh-lg"><a class="text-500 footer-link text-light" href="#!">Career</a></li>
                <li class="lh-lg"><a class="text-500 footer-link text-light" href="#!">Gohub driving jobs</a></li>
              </ul>
            </div>
            <div class="col-6 col-sm-4 col-lg-2 mb-3 order-3 order-sm-2">
              <h5 class="lh-lg fw-bold text-light font-sans-serif">Offerings</h5>
              <ul class="list-unstyled text-light mb-md-4 mb-lg-0">
                <li class="lh-lg"><a class="text-500 footer-link text-light" href="#!">Gohub Eats</a></li>
                <li class="lh-lg"><a class="text-500 footer-link text-light" href="#!">Gohub Business</a></li>
                <li class="lh-lg"><a class="text-500 footer-link text-light" href="#!">Guhub Freight</a></li>
                <li class="lh-lg"><a class="text-500 footer-link text-light" href="#!">Gohub Health</a></li>
              </ul>
            </div>
            <div class="col-6 col-sm-4 col-lg-2 mb-3 order-3 order-sm-2">
              <h5 class="lh-lg fw-bold text-light font-sans-serif"> Support</h5>
              <ul class="list-unstyled text-light mb-md-4 mb-lg-0">
                <li class="lh-lg"><a class="text-500 footer-link text-light" href="#!">Terminal Conditions</a></li>
                <li class="lh-lg"><a class="text-500 footer-link text-light" href="#!">About Us</a></li>
                <li class="lh-lg"><a class="text-500 footer-link text-light" href="#!">Contact US</a></li>
                <li class="lh-lg"><a class="text-500 footer-link text-light" href="#!">Terms of Use</a></li>
              </ul>
            </div>
          </div>
        </div>

        <section class="py-0 bg-1000">
          <div class="container">
            <div class="row justify-content-md-between justify-content-evenly py-3">
              <div class="col-12 col-sm-8 col-md-6 col-lg-auto text-center text-md-start">
                <p class="fs--1 my-2 fw-bold text-200">&copy; 2022 Your Company Inc</p>
              </div>
              <div class="col-12 col-sm-8 col-md-6">
                <p class="fs--1 my-2 text-center text-md-end text-200"> Made with&nbsp;
                  <svg class="bi bi-suit-heart-fill" xmlns="http://www.w3.org/2000/svg" width="12" height="12" fill="#F95C19" viewBox="0 0 16 16">
                    <path d="M4 1c2.21 0 4 1.755 4 3.92C8 2.755 9.79 1 12 1s4 1.755 4 3.92c0 3.263-3.234 4.414-7.608 9.608a.513.513 0 0 1-.784 0C3.234 9.334 0 8.183 0 4.92 0 2.755 1.79 1 4 1z"></path>
                  </svg>&nbsp;by&nbsp;<a class="fw-bold text-info text-200" href="https://themewagon.com/" target="_blank">ThemeWagon </a>
                </p>
              </div>
            </div>
          </div>
        </section>
    </section>
    </div>
  )
}

export default Footer
