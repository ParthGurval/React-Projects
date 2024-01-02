import React from 'react'
import Card from 'react-bootstrap/Card';
import Carousel from 'react-bootstrap/Carousel';
import ExampleCarouselImage from 'components/ExampleCarouselImage';


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
                        <select>
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



                <Carousel fade>
      <Carousel.Item>
        <ExampleCarouselImage text="First slide" />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <ExampleCarouselImage text="Second slide" />
        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <ExampleCarouselImage text="Third slide" />
        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>



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
