function Slidebar() {
   
  
    return (
      <>
      <div
  id="carouselExampleAutoplaying"
  className="carousel slide"
  data-bs-ride="carousel"
>
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.42u2QEjK-q8IL56mX20zdgHaJV%26pid%3DApi%26h%3D160&f=1&ipt=7421fae7b935a7b36ec31394db4289f89981f1fb804e6dbf1d89eca0c2737217&ipo=images" className="d-block w-100" alt="..." />
    </div>
    <div className="carousel-item">
      <img src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.XskzfIZ78kS68B2LmxifXwHaEK%26pid%3DApi%26h%3D160&f=1&ipt=0a328ab92f12fd47b047d915fab3b9d35f7a2febb5a2d9288fc8f550b15b6a9b&ipo=images" className="d-block w-100" alt="..." />
    </div>
    <div className="carousel-item">
      <img src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.evUMYFwlMncUnlz-sqBP5wHaEo%26pid%3DApi%26h%3D160&f=1&ipt=650d07d1eab9c441169dabd1665c47533d24ed51f34fbb5a21df47eafc92385f&ipo=images" className="d-block w-100" alt="..." />
    </div>
  </div>
  <button
    className="carousel-control-prev"
    type="button"
    data-bs-target="#carouselExampleAutoplaying"
    data-bs-slide="prev"
  >
    <span className="carousel-control-prev-icon" aria-hidden="true" />
    <span className="visually-hidden">Previous</span>
  </button>
  <button
    className="carousel-control-next"
    type="button"
    data-bs-target="#carouselExampleAutoplaying"
    data-bs-slide="next"
  >
    <span className="carousel-control-next-icon" aria-hidden="true" />
    <span className="visually-hidden">Next</span>
  </button>
</div>

      
      </>
    )
  }
  
  export default Slidebar