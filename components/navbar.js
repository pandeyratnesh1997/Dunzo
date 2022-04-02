function navbar(){
    return `<div id="menubar">
    <div id="menuLeft">
    <div><a href="index.html"><img src="https://resources.dunzo.com/web-assets/prod/_next/static/images/logo-7b2b540792556466133aea6e7c6ae513.png"></a></div>
        <div class="menuTop"><i class="fa-solid fa-location-dot"></i><select class="options"><option>Mumbai</option></select></div>
    </div>
    <div id="menuRight">
        <div id="search" class="hover"><i class="fa-solid fa-magnifying-glass icons"></i><p class="iconText">Search</p></div>
        <div id="cart" >
            <div class="hover"><a href="cart.html"><i class="fa-solid fa-cart-shopping icons"></i><p class="iconText">Cart</p></a></div>
            <div id="cartItems">0</div>
        </div>
        <div id="profile" class="hover"><i class="fa-regular fa-user icons"></i><p class="iconText">Profile</p></div>
    </div>
</div>`
}

export default navbar;