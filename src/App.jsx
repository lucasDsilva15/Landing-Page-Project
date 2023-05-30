import './App.css'

function App() {
  return (
    <>
    <div className='container'>
    <header>
        <img className='Logo' src='https://companieslogo.com/img/orig/KO-b23a2a5e.png?t=1684129869'></img>
        <ul className='menuLinks'>
          <li>Home</li>
          <li>Products</li>
          <li>Community</li>
          <li>Contact Us</li>
        </ul>
        <div className='loginBtns'>
          <button className='btn'id='btn1'>Log In</button>
        <div className='divider'></div>
          <button className='btn' id='btn2'>Sign up</button>
        </div>
      </header>
      <div className='contentContainer'>
        <div className='leftsidecontentcontainer'>
          <div>
            <h1 className='mainHeader'> Years of refreshing the world, Coca-Cola </h1>
          </div>
          <div>
            <p className='contentHeader'>Coca-Cola, or Coke, is a carbonated soft drink manufactured by the Coca-Cola Company. In 2013, Coke products were sold in over 200 countries worldwide, with consumers drinking more than 1.8 billion company beverage servings each day.</p>
          </div>
          <div>
            <button id='btn3'className='btn'> Buy Now</button>
          </div>
        </div>
      
      <img src='https://clipart-library.com/image_gallery2/Coca-Cola-PNG-Picture.png'></img>
      </div>
    </div>
    </>
  )
}

export default App
