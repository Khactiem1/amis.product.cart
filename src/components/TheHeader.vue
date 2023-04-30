<template>
   <nav style="top: 0; margin: 0;" class="navbar fixed-top navbar-expand-lg navbar-light bg-white w-100 navigation" id="navbar">
        <div class="container">
            <RouterLink class="navbar-brand font-weight-bold" to="/">E-Shop</RouterLink>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#main-navbar"
            aria-controls="main-navbar" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse " id="main-navbar">
            <ul class="navbar-nav mx-auto">
                <li class="nav-item active">
                    <RouterLink class="nav-link" to="/">Trang chủ</RouterLink>
                </li>
                <li class="nav-item">
                <a class="nav-link" href="#">Về chúng tôi</a>
                </li>
                <li class="nav-item dropdown dropdown-slide">
                <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown3" role="button" data-delay="350"
                    data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    Xem shop
                </a>
                <ul class="dropdown-menu" aria-labelledby="navbarDropdown3">
                     
                    <li><RouterLink class="nav-link" to="/shop">Sản phẩm</RouterLink></li>
                    <!-- <li><RouterLink class="nav-link" to="/productdetails">Product Details Page</RouterLink></li> -->
                    <li><RouterLink class="nav-link" to="/checkout">Thanh toán</RouterLink></li>
                    <li><RouterLink class="nav-link" to="/cart">Giỏ hàng</RouterLink></li>
                </ul>
                </li>
            </ul>
            </div>
        
            <ul class="top-menu list-inline mb-0 d-none d-lg-block" id="top-menu">
            <li class="list-inline-item">
              <input type="search" class="form-control rounded" placeholder="Tìm sản phẩm" aria-label="Search" aria-describedby="search-addon" />
            </li>
            <li class="dropdown cart-nav dropdown-slide list-inline-item">
                <a href="#" class="dropdown-toggle cart-icon" data-toggle="dropdown" data-hover="dropdown">
                <i class="tf-ion-android-cart"></i>
                </a>
                <div class="dropdown-menu cart-dropdown">
               
                <div class="media">
                    <a href="/product-single">
                    <img class="media-object img- mr-3" src="src/assets/images/cart-1.jpg" alt="image" />
                    </a>
                    <div class="media-body">
                    <h6>Ladies Bag</h6>
                    <div class="cart-price">
                        <span>1 x</span>
                        <span>1250.00</span>
                    </div>
                    </div>
                    <a href="#" class="remove"><i class="tf-ion-close"></i></a>
                </div>
                <div class="cart-summary">
                    <span class="h6">Tổng</span>
                    <span class="total-price h6">197.000.000</span>
                    <div class="text-center cart-buttons mt-3">
                    <a href="#" class="btn btn-small btn-transparent btn-block">Giỏ hàng</a>
                    <a href="#" class="btn btn-small btn-main btn-block">Thanh toán</a>
                    </div>
                </div>
                </div>
            </li>
            </ul>
        </div>
        </nav>
</template>
<script setup lang="ts">
</script>