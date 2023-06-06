function LandingPage () {
    return (
        <div className="contentContainer">
          <div className="leftsidecontentcontainer">
            <div>
              <h1 className="mainHeader">
                Years of refreshing the world, Coca-Cola{" "}
              </h1>
            </div>
            <div>
              <p className="contentHeader">
                Coca-Cola, or Coke, is a carbonated soft drink manufactured by
                the Coca-Cola Company. In 2013, Coke products were sold in over
                200 countries worldwide, with consumers drinking more than 1.8
                billion company beverage servings each day.
              </p>
            </div>
            <div>
              <button id="btn3" className="btn">
                Buy Now
              </button>
            </div>
          </div>
          <div id='canImg'>
            <img src="https://clipart-library.com/image_gallery2/Coca-Cola-PNG-Picture.png" height={900}></img>
          </div>
        </div>
    )
}

export default LandingPage