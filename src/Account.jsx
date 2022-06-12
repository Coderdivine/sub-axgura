import React,{useState,useEffect} from 'react'

function Account() {
    const[menu,setMenu]=useState(true);   
 
    const handlemenu=()=>{
      setMenu(false);
    }
    const handlemenus=()=>{
      setMenu(true);
    }
    const[update,setUpdate]=useState(true);
    const[setttings,setSettings]=useState(false);
    const[post,setPost]=useState(false);
    const[about,setAbout]=useState(false);
    
    const handleabout=()=>{
        setAbout(true);
        setPost(false);
        setSettings(false);
        setUpdate(false);
        
    }
    const handlesettings=()=>{
        setAbout(false);
        setPost(false);
        setSettings(true);
        setUpdate(false);
    }
    const handlepost=()=>{
        setAbout(false);
        setPost(true);
        setSettings(false);
        setUpdate(false);
    }
    const handleupdate=()=>{
        setAbout(false);
        setPost(false);
        setSettings(false);
        setUpdate(true);
    }
    const[edit,setEdit]=useState(false);
    const handleedit=()=>{
        setEdit(true);
    }
    const[menuu,setMenuu]=useState(null);   
    const handlemenuss=(e)=>{
      console.log("@"+ e.target.files[0])
      setMenuu(URL.createObjectURL(e.target.files[0]));

    
    }
    useEffect(() => {
     if(menuu !== null){
      localStorage.setItem("imageaxgura",JSON.stringify(menuu))
      }
    }, [menuu])
    const localimage=JSON.parse(localStorage.getItem("imageaxgura"));

    
    
      return (
          <div>
        <div class="nav-bar">
            
            <div class="menu-icons">
            
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
          <div className="account"><div class="accounts">
              <img src={localimage} /><pre><span onClick={handleedit}>Edit Image</span></pre>
              {!edit?<div></div>:<div><input type="file" onChange={(e)=>handlemenuss(e)}/>
            </div>}
              <h2>Name: Ezechukwu Divine Chimdindu.</h2><br/>
              <h2>Email: Chimdi4332@gmail.com.</h2><br/>
              {!localStorage.getItem("livecode")?<h><input placeholder="Live Code"/></h>:<h2>LiveCode: {localStorage.getItem("livecode")}</h2>}
              </div>
              <div><table><td><span onClick={handlesettings}>Settings</span></td>
              <td><span onClick={handlepost}>Post</span></td>
              <td> <span onClick={handleupdate}>Update</span></td>
              <td><span onClick={handleabout}>About</span></td>

              </table></div>
              <div>
                  {update && <div><header>UPDATE</header><br/>
                     Latest Updates<hr/>
                    Live Code: ##############<br/>
                    Gift Card: Remaining 5 orders to Recieve a Gift Card.<small><a onClick={handlesettings}>Learn More.</a></small>
                  </div>}
                  {post && <div><header>POST</header><br/>
                     <div class="form-container">
                         <form>
                             <input placeholder="Last Name"/>
                             <input placeholder="Name of Item"/>
                             <textarea placeholder="Description"/>
                             <input placeholder="Amount"/>
                             <input type="file" name="Image"/>
                             <button class="btns">Request</button>
                         </form>
                     </div>
                  </div>}
                  {setttings && <div><header>SETTINGS</header>
                  <br/>
                  <button className="btn">Help</button>
                  <button className="btn">Rates</button>
                  <button className="btn">Info</button>
                  </div>}
                  {about && <div><header>ABOUT</header><br/>
                    <h1></h1>
                    <img src="./img/images.jpeg"/><br/>
                    <strong><small>Canned</small></strong><br/>
                    <i><small>Version 2.96</small></i>
                  </div>}
                  <br/>
              </div>
          </div>
  </div>
    )
}

export default Account;
