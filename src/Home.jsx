import React,{useState,useEffect} from 'react'

function Home() {
    const[menu,setMenu]=useState(true);   

  const handlemenu=()=>{
    setMenu(false);
  }
  const handlemenus=()=>{
    setMenu(true);
  }
 
  
    return (
        <div>
          <div>
            
          </div>
      <div class="nav-bar">
          <div class="menu-icons">
            {menu?<div>
              <span onClick={()=>handlemenu()}>
         -----------<br/>
         -----------<br/>
         -----------<br/>
          </span>
            </div>:<div>
            <span onClick={()=>handlemenus()}>
         ----------<br/>
         ----------<br/>
         ----------<br/>
          </span> 
              </div>}
          </div>
          <nav>
              {menu?
              <div></div>:<div><ul>
<li><a href="/#">Home</a></li><hr/>
<li><a href="/#/product">Product</a></li><hr/>
<li><a href="/#/cart">Cart</a></li><hr/>
<li><a href="/#/account">Account</a></li><hr/>

              </ul></div>}
 </nav>
 
          </div>  
          
   <div>
     <div class="latest">
      <h1>LATEST</h1>
      <hr/><br/>
      <div className="c-box">
        <img src="./img/dior.jpeg"/>
         <button className="btn"><a>Buy Now</a></button>
      </div>
     </div>
     </div> 
     
     <div class="product">
       <h1>Products</h1><hr/><br/><a href="/#/Product">
       <img src="./img/chimdii.jpg" height="260px" width="100%"/></a>
       </div> 

       <div class="product"><h1>Most Reviewed</h1><hr/><br/>
         <img src="./img/adre.jpg" height="260px" width="100%"/>
         </div> 

         <div  class="horzontal"><h1>
           Recent Reviews</h1><hr/><br/>
           <img src="./img/dior.jpeg" height="260px" width="100%"/>
         </div>

         <div >
           <h1>Related Sites</h1><hr/><br/>
           <div class="circle-2"> 
           <img src="./img/dior.jpeg" />
           <img src="./img/dior.jpeg" />
           <img src="./img/dior.jpeg" />
           </div>
           </div>

           <div class="product">
             <h1>Therapists</h1><hr/><br/>
             <img src="*" height="260px" width="100%"/>
           </div>
           <br/>
           <div className="footer">
<div className="container">
<div className="row">
<div className="footer-col-2">

<p>Our Purpose is to Sustainably make the Pleasure and Benefits of Clothing Access to the Many.</p>
</div>
<div className="footer-col-3">
<h3>Related Site</h3>
<ul>
<li><a href="https://Coderdivine.github.io/divere/" >Divere Food</a></li>
<li><a href="https://Coderdivine.github.io/Dida/" >Dida Tech</a></li>

</ul>
</div>
<div className="footer-col-4">
<h3>Follow Us</h3>
<ul>

<li><a href="###" >YouTube</a></li>
<li><a href=" //https://www.instagram.com/_chimdi.xo_/">Instagram</a></li>
<li><a href="//https://web.facebook.com/divine.ezechukwu/">Facebook</a></li>
<li><a href="###">Twitter</a></li>

</ul>
</div>

<hr/>
<p className="copyright">&copy; Copyright 2021-Axgura _____ </p>
</div></div>
<div></div></div>
 
 
         
</div>
    )
}

export default Home;
