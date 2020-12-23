import React,{useState} from 'react'
import Product from './Product'
import Modal from './Modal';
import './Home.css'
function Home() {

  const [selectedImg, setSelectedImg] = useState(null);

    return (
        <div className="home">
        <div id="demo" class="carousel slide" data-ride="carousel">

     
        <ul class="carousel-indicators">
          <li data-target="#demo" data-slide-to="0" class="active"></li>
          <li data-target="#demo" data-slide-to="1"></li>
          <li data-target="#demo" data-slide-to="2"></li>
        </ul>
        
        
        <div class="carousel-inner">
          <div class="carousel-item active">
            <img src="/images/frame1.png" className="i1" ></img>
          </div>
          <div class="carousel-item">
            <img src="/images/frame3.png" className="i1" ></img>
          </div>
          <div class="carousel-item">
            <img src="/images/frame4.png" alt="New York" className="i1"></img>
          </div>
        </div>
        
       
        <a class="carousel-control-prev" href="#demo" data-slide="prev">
          <span class="carousel-control-prev-icon"></span>
        </a>
        <a class="carousel-control-next" href="#demo" data-slide="next">
          <span class="carousel-control-next-icon"></span>
        </a>
      </div>
          <div className="home_row">
          <Product 
          id="12321341"
          title ="Smart Audio Black Square Fastrack Unisex sunglasses "
          price={3499.00 }
          rating={5}
          image="https://cdn1.titaneyeplus.com/media/catalog/product/cache/1/image/768x432/9df78eab33525d08d6e5fb8d27136e95/s/w/swd002bk1_1_lar.webp"
          setSelectedImg={setSelectedImg}
          />
          <Product 
          id="12321341"
          title ="Maxmara MM SLIM sunglasses"
          price={1196}
          rating={5}
          image="https://cdn.eyerim.com/media/catalog/product/cache/shared/image/9df78eab33525d08d6e5fb8d27136e95/s/m/smax-g021438-m084473-bi-3.jpg"
          setSelectedImg={setSelectedImg}
          />

          </div>
          <div className="home_row">
          <Product 
          id="12321341"
          title ="Cubitts Twyford round-frame acetate and gold-tone sunglasses "
          price={1600}
          rating={5}
          image="https://media.gq.com/photos/5f5bd66696a1f7d72ebc08de/master/w_2000,h_1333,c_limit/Cubitts-'Twyford'-round-frame-acetate-and-gold-tone-sunglasses.jpg"
          setSelectedImg={setSelectedImg}
          />
          <Product 
          id="12321341"
          title ="
         
          Grey Blue Gradle Aviator Sun Goggles"
          price={1300}
          rating={5}
          image="https://5.imimg.com/data5/BC/RN/MY-75932613/grey-frame-ke-andar-blue-colour-aviator-500x500.jpeg"
          setSelectedImg={setSelectedImg}
          />
          <Product 
          id="12321341"
          title ="Yellow Mirrored Mercury Lens In A Black Frame Aviator Sunglasses"
          price={900}
          rating={5}
          image="https://5.imimg.com/data5/HO/FF/MY-19467740/black-yellow-mirrored-aviator-sunglasses-500x500.jpg"
          setSelectedImg={setSelectedImg}
          />
          <Product 
          id="12321341"
          title ="
  
          Retro Red Tint Round Daredevil Inspired Sunglasses"
          price={1700}
          rating={5}
          image="https://imgix.bustle.com/uploads/image/2019/9/25/f7ce22e7-b7ec-484d-b7b1-cf395d61140c-81tas-n7nl_ul1500_.jpg"
          setSelectedImg={setSelectedImg}
          />
          { selectedImg && (
            <Modal selectedImg={selectedImg} setSelectedImg={setSelectedImg} />
            )}
          
          </div>
          
          
         
         
        </div>
    )
}

export default Home;
