function Card() {

   
    let item = [
        {title:"hello", para:"hello is your class name"},
        {title:"chintu", para:"chintu is my name"}
        
    ];
    return (
        
      <>

      {item.map((item,index) =>(
      
      <div className="card" style={{ width: "18rem" }}>
  <img src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.QXIXIWmGzJz0AvWxeccMKwHaEo%26pid%3DApi&f=1&ipt=ed3128fa828d204f0b0c7b1e3e870e5e8edf94a3f90c55c72928f057b2202a39&ipo=images" className="card-img-top" alt="..." />
  <div className="card-body">
    <h5 className="card-title">{item.title}</h5>
    <p className="card-text">
      {item.para}
    </p>
    <a href="#" className="btn btn-primary">
      Go somewhere
    </a>
  </div>
</div>
      ))}

      
      </>
        
    )

  }
  
  export default Card