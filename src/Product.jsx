import React,{useState,useEffect} from 'react'

function Product() {
    const[menu,setMenu]=useState(true);   
 
    const handlemenu=()=>{
      setMenu(false);
    }
    const handlemenus=()=>{
      setMenu(true);
    }
    const [details,setDetails]=useState(false);
    const handledetails=()=>{
        setDetails(true);
    }
    const handledetail=()=>{
        setDetails(false);
    }
      return (
          <div>
        <div class="nav-bar">
            
            <div class="menu-icons">
            <input placeholder="Search For Products ..."/>
              {menu?<div>
                <span onClick={()=>handlemenu()}>
           --------<br/>
           --------<br/>
           --------<br/>
            </span>
              </div>:<div>
              <span onClick={()=>handlemenus()}>
           --------<br/>
           --------<br/>
           --------<br/>
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
            <br/>{!details?<div>
                <div className="listed">
                <img src="./img/beanie.jpeg"/>
                <h1>Name:###############</h1><br/>
                <h1>Description:###############</h1><br/>
                <h1>Amount:###############</h1>
                <button onClick={()=>handledetails()}>Details</button>
            </div>
            <div className="listed">
                <img src="./img/beanie.jpeg"/>
                <h1>Name:###############</h1><br/>
                <h1>Description:###############</h1><br/>
                <h1>Amount:###############</h1>
                <button onClick={()=>handledetails()}>Details</button>
            </div>
            <div className="listed">
                <img src="./img/beanie.jpeg"/>
                <h1>Name:###############</h1><br/>
                <h1>Description:###############</h1><br/>
                <h1>Amount:###############</h1>
                <button onClick={()=>handledetails()}>Details</button>
            </div>
            <div className="listed">
                <img src="./img/beanie.jpeg"/>
                <h1>Name:###############</h1><br/>
                <h1>Description:###############</h1><br/>
                <h1>Amount:###############</h1>
                <button onClick={()=>handledetails()}>Details</button>
            </div>
            <div className="listed">
                <img src="./img/beanie.jpeg"/>
                <h1>Name:###############</h1><br/>
                <h1>Description:###############</h1><br/>
                <h1>Amount:###############</h1>
                <button onClick={()=>handledetails()}>Details</button>
            </div>
            <div className="listed">
                <img src="./img/beanie.jpeg"/>
                <h1>Name:###############</h1><br/>
                <h1>Description:###############</h1><br/>
                <h1>Amount:###############</h1>
                <button>Details</button>
            </div>
            <div className="listed">
                <img src="./img/beanie.jpeg"/>
                <h1>Name:###############</h1><br/>
                <h1>Description:###############</h1><br/>
                <h1>Amount:###############</h1>
                <button>Details</button>
            </div>
            <div className="listed">
                <img src="./img/beanie.jpeg"/>
                <h1>Name:###############</h1><br/>
                <h1>Description:###############</h1><br/>
                <h1>Amount:###############</h1>
                <button>Details</button>
            </div><div className="listed">
                <img src="./img/beanie.jpeg"/>
                <h1>Name:###############</h1><br/>
                <h1>Description:###############</h1><br/>
                <h1>Amount:###############</h1>
                <button>Details</button>
            </div>
            <div className="listed">
                <img src="./img/beanie.jpeg"/>
                <h1>Name:###############</h1><br/>
                <h1>Description:###############</h1><br/>
                <h1>Amount:###############</h1>
                <button>Details</button>
            </div>
            <div className="listed">
                <img src="./img/beanie.jpeg"/>
                <h1>Name:###############</h1><br/>
                <h1>Description:###############</h1><br/>
                <h1>Amount:###############</h1>
                <button>Details</button>
            </div><br/>
            <div class="product">
               <h1>Therapist</h1><hr/><br/>
               <img src="*" height="260px" width="100%"/>
             </div>
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
   
   
            </div>:<div>
            <div className="listing">
                <div class="top">
                <img src="./img/beanie.jpeg"/></div>
                <div className="imgs">
                    <img src="./img/beanie.jpeg"/>
                    <img src="./img/beanie.jpeg"/>
                    <img src="./img/beanie.jpeg"/>
                    <img src="./img/beanie.jpeg"/>
                </div>
                <h1>Name: </h1><small></small>
                <h1>Description: </h1><small></small>
                <h1>Amount: </h1><small></small>
                <select><option>Red</option>
                <option>Blue</option>
                <option>Black</option>
                <option>Green</option></select>
                <br/>
                <select><option>Size 1</option>
                <option>Size 2</option>
                <option>Size 3</option>
                <option>Size 4</option></select>
                <button>Add To Cart</button>
                <button onClick={()=>handledetail()}>Back</button>
            </div></div>}
           
    
  
             
           
           
  </div>
    )
}

export default Product
