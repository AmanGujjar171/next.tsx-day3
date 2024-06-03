import React from 'react'

export default function page() {
  return (
   
      <div className="website">
        {/* this is navbar */}

        <div className="navbar">
          <div className="heading">
            <img src="./assignment 6 pics/navbar+header/Mask Group.png" alt="img does not show" />
            <h2>food waGon</h2>
          </div>
          <div className="deliver">
            <p>deliver to:</p>
            <img src="./assignment 6 pics/navbar+header/Icons.png" alt="img does not show" />
            <p>Current Location <b>Mohammadpur Bus Stand, Dhaka</b></p>
          </div>
          <div className="searchbtn">
            <div className="search">
              <img src="./assignment 6 pics/navbar+header/Search.png" alt="img does not show" />
              <p><b>Search Food</b></p>
            </div>
            <div className="button">
              <img src="./assignment 6 pics/navbar+header/user.png" alt="img does not show" />
              <button id="login">
                login
              </button>
            </div>
          </div>
        </div>

        {/* <!-- navbar is completed --> */}



        {/* <!-- this is header section --> */}

        <div className="header">
          <div className="titlecard">
            <h1>Are you starving?</h1>
            <p>within a few clicks, finds meals that are accessible near you</p>
            <div className="ordercard">
              <div className="buttons">
                <div className="delivery">
                  <img src="./assignment 6 pics/navbar+header/Icon.png" alt=" img does not show" />
                  <p><b>Delivery</b></p>
                </div>
                <div className="pickup">
                  <img src="./assignment 6 pics/navbar+header/Icon (1).png" alt="img does not show" />
                  <p><b>pickup</b></p>
                </div>
              </div>
              <hr />
                <div className="enteraddress">
                  <div className="inputaddress">
                    <img src="./assignment 6 pics/navbar+header/Icons.png" alt="img does not show" />
                    <input type="text" placeholder="enter your address" />
                  </div>
                  <div className="findfood">
                    <img src="./assignment 6 pics/navbar+header/Search.png" alt="img does not show" />
                    <button><b>Find Food</b></button>
                  </div>
                </div>
            </div>
          </div>
          <img id="img1" src="./assignment 6 pics/navbar+header/Image Base.png" alt="img does not show" />
        </div>

        {/* <!-- header is completed --> */}

        {/*  flashdeals is started  */}

        <div className="flashdeals">
          <div className="greysvage15">
            <img src="./assignment 6 pics/Flash Deals/Food Photo.png" alt="img does not show" />
            <h6><b>Greys Vage</b></h6>
            <p><b>6 Days Remaining</b></p>
          </div>
          <div className="greysvage10">
            <img src="./assignment 6 pics/Flash Deals/Food Photo (2).png" alt="img does not show" />
            <h6><b>Greys Vage</b></h6>
            <p><b>6 Days Remaining</b></p>
          </div>
          <div className="greysvage25">
            <img src="./assignment 6 pics/Flash Deals/Food Photo (3).png" alt="img does not show" />
            <h6><b>Greys Vage</b></h6>
            <p><b>6 Days Remaining</b></p>
          </div>
          <div className="greysvage20">
            <img src="./assignment 6 pics/Flash Deals/Food Photo (4).png " alt="img does not show" />
            <h6><b>Greys Vage</b></h6>
            <p><b>6 Days Remaining</b></p>
          </div>
        </div>

        {/* <!-- flashdeals is completed --> */}

        {/* <!-- the how does it work is started  --> */}



        <div className="work">
          <h1 id="h1">How does it work</h1>
          <div className="cards">
            <div className="location">
              <img src="./assignment 6 pics/how does it work/Icons.png" alt="img does not exist" />
              <h3>Select location</h3>
              <p>Choose the location where your food will be delivered.</p>
            </div>
            <div className="order">
              <img src="./assignment 6 pics/how does it work/Icons (1).png" alt="img does not exist" />
              <h3>Choose order</h3>
              <p>Check over hundreds of menus to pick your favorite food</p>
            </div>
            <div className="pay">
              <img src="./assignment 6 pics/how does it work/Icons (2).png" alt="img does not exist" />
              <h3>Pay advanced</h3>
              <p>It's quick, safe, and simple. Select several methods of payment</p>
            </div>
            <div className="meals">
              <img src="./assignment 6 pics/how does it work/Icons (3).png" alt="img does not exist" />
              <h3>Enjoy meals</h3>
              <p>Food is made and delivered directly to your home.</p>
            </div>
          </div>
        </div>

        {/* <!-- the how does it work is completed  --> */}



        {/* <!-- popular items is started --> */}

        <div className="popular">
          <h1 id="popularitems">popular items</h1>
          <div className="cards2">
            {/* <h1 id="leftbtn" > < </h1> */}
            <div className="burger">
              <img src="./assignment 6 pics/popular Items/Rectangle 336.png" alt="img does not exist" />
              <h5> Cheese Burger</h5>
              <div className="burgerA">
                <i className="fa-solid fa-location-dot"></i>
                <p>Burger Arena</p>
              </div>
              <h5><b>$3.88</b></h5>
              <button><b>Order Now</b></button>
            </div>
            <div className="toffeecake">
              <img src="./assignment 6 pics/popular Items/Rectangle 336 (1).png" alt="img does not exist" />
              <h5> Toffe's Cake</h5>
              <div className="topskick">
                <i className="fa-solid fa-location-dot"></i>
                <p>Top Sticks</p>
              </div>
              <h5>$4.00</h5>
              <button>Order Now</button>
            </div>
            <div className="dancake">
              <img src="./assignment 6 pics/popular Items/Rectangle 336 (2).png" alt="img does not exist" />
              <h5> dancake</h5>
              <div className="cakeworld">
                <i className="fa-solid fa-location-dot"></i>
                <p>Cake World</p>
              </div>
              <h5>$1.99</h5>
              <button>Order Now</button>
            </div>
            <div className="sandwitch">
              <img src="./assignment 6 pics/popular Items/Rectangle 336 (3).png" alt="img does not exist" />
              <h5>Crispy Sandwitch</h5>
              <div className="dine">
                <i className="fa-solid fa-location-dot"></i>
                <p> Fastfood Dine</p>
              </div>
              <h5>$3.00</h5>
              <button>Order Now</button>
            </div>
            <div className="thaisoup">
              <img src="./assignment 6 pics/popular Items/Rectangle 336 (4).png" alt="img does not exist" />
              <h5> Thai Soup</h5>
              <div className="foodyman">
                <i className="fa-solid fa-location-dot"></i>
                <p>Foody man</p>
              </div>
              <h5>$2.79</h5>
              <button>Order Now</button>
            </div>


            {/* <h1 id="rightbtn" > > </h1> */}
          </div>
        </div>


        {/* <!-- popular items is  completed --> */}

      </div>
  )
}
