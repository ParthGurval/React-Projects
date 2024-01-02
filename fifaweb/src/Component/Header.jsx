import React from 'react'
import Card from 'react-bootstrap/Card';



const Header = () => {
  return (
    <>
    
     <div className="container-fluid">

        <div className="row" style={{marginBottom:"0px !important"}}>

            <ul className='HeaderEdit'>

                    <li><i class="fa fa-bars" aria-hidden="true"></i></li>
                    <li><img src='../Img/World-Cup-logo-landscape-on-dark.webp' className='fifaLogo' height="40px" width="150px"></img></li>
                    {/* <li style={{color: "black"}} className='listItem1'>Fifa World Cup <br/>Quatar </li> */}
                    <li className='listItem'>NEWS</li>
                    <li className='listItem'>HIGHLIGHTS</li>
                    <li className='listItem'>KNOCKOUTS & GROUPS</li>
                    <li className='listItem'>SCORES & FIXTURES</li>
                    <li className='listItem'>TEAMS</li>
                    <li className='listItem'>FIFA WORLD CUP TROPHY TOUR</li>
                    <li className='listItem'>FIFA FAN FESTIVAL<sup style={{fontWeight:"normal"}}>TM</sup></li>
                    <li>
                        <select className='LanguageList'>
                            <option value="">ENG</option>
                            <option value="">HIN</option>
                            <option value="">POR</option>
                            <option value="">RUS</option>
                            <option value="">CHI</option>
                            <option value="">JAP</option>
                            <option value="">SPI</option>
                        </select>
                    </li>
                    <li>
                        <input type="search" placeholder='Search' className='searchBox'/>
                    </li>
                    <li className='listItem'>
                    <i class="fa fa-user-circle logoPerson" aria-hidden="true"></i>
                    </li>
            

            </ul>

        </div>

        <div className="row" style={{backgroundColor: "#550065", marginTop: "0px"}}>

                <div className='col-4'>

                    <div className="row">

                            <div className='watchDiv' ><img src="../Img/WatchImg.webp" className='watchImg' alt="WatchImg"/></div>
                            <h2>Matches</h2>

                            <div className='cardGroup'>

                        
      {[
        'Light'
      ].map((variant) => (
        <Card
          bg={variant.toLowerCase()}
          text={variant.toLowerCase() === 'light' ? 'dark' : 'white'}
          style={{ width: '18rem' }}
          className="mb-2 rctCards"
          
        >
          
          <Card.Body>
            <Card.Title>Final<br/> Lusai Stadium  <sapn>18 DEC 2022</sapn> </Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
          </Card.Body>
        </Card>
      ))}

{[
        'Light'
      ].map((variant) => (
        <Card
          bg={variant.toLowerCase()}
          text={variant.toLowerCase() === 'light' ? 'dark' : 'white'}
          style={{ width: '18rem' }}
          className="mb-2 rctCards"
          
        >
          
          <Card.Body>
            <Card.Title>Quator Final<br/> Lusai Stadium  <sapn>18 DEC 2022</sapn> </Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
          </Card.Body>
        </Card>
      ))}



                            </div>
                            
                            <div className='cardGroup'></div>

                    </div>

                </div>

                <div className='col-8 mainImgDiv'>



                <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
  <ol class="carousel-indicators">
    <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
    <li data-target="#carouselExampleIndicators" data-slide-to="1" class="active"></li>
  </ol>
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img class="d-block w-100" src="Img/fifaMianImg.webp" alt="First slide" className='imgSlid1'/>
    </div>
    <div class="carousel-item">
      <img class="d-block w-100" src="../../public/Img/WatchImg.webp" alt="Second slide" className='imgSlid1'/>
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



                    {/* <div className="contxImg">
                    <h4>NOW AVAILABLE</h4>
                        <h1>Goals, Highlights & More</h1>
                        <p>Relive your favourite moments from FIFA World Cup 2022<sup>TM</sup>.</p>
                    </div> */}
                        
                </div>

        </div>
        
    </div> 
    </>
  )
}

export default Header
