<template>
  <div className="home-container">
          <div className="main-slider slider slick-initialized slick-slider">
            <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel" data-interval="3000">
                <ol class="carousel-indicators">
                    <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
                    <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                    <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
                </ol>
                <div class="carousel-inner">
                    <div class="carousel-item active">
                    <img class="d-block w-100" src="../assets/images/slideshow1-1.jpg" alt="First slide">
                    </div>
                    <div class="carousel-item">
                    <img class="d-block w-100" src="../assets/images/slideshow1-2.jpg" alt="Second slide">
                    </div>
                    <div class="carousel-item">
                    <img class="d-block w-100" src="../assets/images/slideshow1-3.jpg" alt="Third slide">
                    </div>
                </div>
                <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="sr-only">Previous</span>
                </a>
                <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="sr-only">Next</span>
                </a>
            </div>
          </div>

          <section class="section products-main">
              <div class="container">
                  <div class="row justify-content-center">
                      <div class="col-lg-8">
                          <div class="title text-center">
                              <h2>Mới</h2>
                              <p>Doanh số bán hàng trực tuyến tốt nhất để mua sắm vào cuối tuần này</p>
                          </div>
                      </div>
                  </div>
          
          
              <div class="row">
              <div class="col-lg-3 col-12 col-md-6 col-sm-6 mb-5 " >
                  <div class="product">
                      <div class="product-wrap">
                          <a href="#"><img class="img-fluid w-100 mb-3 img-first" src="src/assets/images/222.jpg" alt="product-img" /></a>
                          <a href="#"><img class="img-fluid w-100 mb-3 img-second" src="src/assets/images/322.jpg" alt="product-img" /></a>
                      </div>
          
                      <div class="product-hover-overlay">
                          <a href="#"><i class="tf-ion-android-cart"></i></a>
                          </div>
          
                      <div class="product-info">
                          <h2 class="product-title h5 mb-0"><a href="#">Sleeve linen shirt</a></h2>
                          <span class="price">
                              $50.10
                          </span>
                      </div>
                  </div>
                  </div>
              </div>
              </div>
          </section>

          <section class="section products-list">
          <div class="container">
              <div class="row">
              <div class="col-lg-4 col-sm-12 col-md-12">
                  <img src="src/assets/images/adsv.jpg" alt="Product big thumb"  class="img-fluid w-100" />
              </div>

              <div class="col-lg-4 col-sm-6 col-md-6">
                  <div class="widget-featured-entries mt-5 mt-lg-0">
                  <h4 class="mb-4 pb-3">Sản phẩm hot nhất</h4>

                          <div class="media mb-3">
                              <a class="featured-entry-thumb" href="/productdetails">
                              <img src="src/assets/images/p-1.jpg" alt="Product thumb" width="64" class="img-fluid mr-3" />
                          </a>
                          <div class="media-body">
                              <h6 class="featured-entry-title mb-0"><a href="#">Keds - Kickstart Pom Pom</a></h6>
                              <p class="featured-entry-meta">$42.99</p>
                          </div>
                          </div>
                  </div>
              </div>


              <div class="col-lg-4 col-sm-6 col-md-6">
                  <div class="widget-featured-entries mt-5 mt-lg-0">
                  <h4 class="mb-4 pb-3">Sản phẩm giá tốt nhất</h4>

                          <div class="media mb-3">
                              <a class="featured-entry-thumb" href="/productdetails">
                              <img src="src/assets/images/p-7.jpg" alt="Product thumb" width="64" class="img-fluid mr-3" />
                          </a>
                          <div class="media-body">
                              <h6 class="featured-entry-title mb-0"><a href="#">Keds - Kickstart Pom Pom</a></h6>
                              <p class="featured-entry-meta">$42.99</p>
                          </div>
                          </div>
                  </div>
              </div>
              </div>
          </div>
          </section>
          <section class="features border-top">
          <div class="container">
              <div class="row">
              <div class="col-lg-3 col-sm-6 col-md-6">
                  <div class="feature-block">
                  <i class="tf-ion-android-bicycle"></i>
                  <div class="content">
                      <h5>Miễn phí ship</h5>
                      <p>Tất cả đơn hàng</p>
                  </div>
                  </div>
              </div>
              <div class="col-lg-3 col-sm-6 col-md-6">
                  <div class="feature-block">
                  <i class="tf-wallet"></i>
                  <div class="content">
                      <h5>30 Ngày hoàn trả</h5>
                      <p>Tiền hoàn lại ví</p>
                  </div>
                  </div>
              </div>
              <div class="col-lg-3 col-sm-6 col-md-6">
                  <div class="feature-block">
                  <i class="tf-key"></i>
                  <div class="content">
                      <h5>Thanh toán an toàn</h5>
                      <p>Tin cậy, tiện ích, tận tình</p>
                  </div>
                  </div>
              </div>
              <div class="col-lg-3 col-sm-6 col-md-6">
                  <div class="feature-block">
                  <i class="tf-clock"></i>
                  <div class="content">
                      <h5>24/7 Hỗ trợ</h5>
                      <p>Hỗ trợ khách hàng mọi lúc </p>
                  </div>
                  </div>
              </div>
              </div>
          </div>
          </section>
      </div>
</template>