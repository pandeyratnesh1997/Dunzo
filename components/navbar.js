function navbar(){
    return `<div id="menubar">
    <div id="menuLeft">
        <div><img src="https://resources.dunzo.com/web-assets/prod/_next/static/images/logo-7b2b540792556466133aea6e7c6ae513.png"></div>
        <div class="menuTop"><select class="options"><option>Location</option></select></div>
    </div>
    <div id="menuRight">
        <div id="search" class="hover"><i class="fa-solid fa-magnifying-glass icons"></i><p class="iconText">Search</p></div>
        <div id="cart" class="hover"><i class="fa-solid fa-cart-shopping icons"></i><p class="iconText">Cart</p></div>
        <div id="profile" class="hover"><i class="fa-regular fa-user icons"></i><p class="iconText">Profile</p></div>
    </div>
</div>`
}

export default navbar;