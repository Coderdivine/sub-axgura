import React,{useState,useEffect} from 'react'
import {calcu, calcu2, calcu3, calcuD }from "calcu2";

function Cart() {
    const[procced,setProcced]=useState(false);
    const[pay,setPay]=useState(false);
    const handleprocced=()=>{
        setProcced(true);
    }
    const handlepay=()=>{
        setPay(true);
    }
    const[selected,setSelected]=useState("");
    const[total,setTotal]=useState(0);
    const getAmountinkm=()=>{
      setTotal((121 * selected.toString())+10);
    }
    useEffect(()=>{
      getAmountinkm()},
     [selected])
    
    return (
        <div>
        <div>
           <span ><a href="/#/">Back</a></span><br/> 
           
        <table>
    <tr>
      <th>Product</th>
      <th>Quantity</th>
      <th>Subtotal</th>
    </tr></table>
    <div class=" cart-page">
   
 <table>
 <tr>
   <td>
     <div class="cart-info">
       <img src="" alt=""/>
            <div>
            <div class="price">
       <p>listing.des</p>
       <small>listing.name</small>
       </div>
       <br/>
       <button class="btn-danger">Remove</button>
        </div></div>
        
   </td>
   <td><input type="number"  class="cart-quantity-price"/></td>
   
   <td>₦200.00</td>
 </tr>
 <tr>
 <td>
 
        </td></tr></table></div>
       
 </div>

    <div class="total-price">
    <table>
      <tr>
      <td>Subtotal</td>
      <td>$200.00</td>
      </tr>
      <tr>
      <td>Tax</td>
      <td>${total}</td>
      </tr>
      <tr>
      <td>Total</td>
      <td>$210.49</td>
      </tr>
    </table>
    </div><br/>
    {!procced?<div>     <button class="btn" onClick={()=>handleprocced()}>Procced</button>
</div>:<div class="form-container">
    <form>
        <select>
            <option>LAGOS</option>
         <option>ABUJA</option>
        </select ><select  value={selected} onChange={(e)=>{
          const select=e.target.value;
          setSelected(select);
        }}>
            <option value="20">APAPA</option>
            <option value="44">ETI-OSA</option>
            <option value="17">LAGOS ISLAND</option>
            <option value="13">MAINLAND</option>
            <option value="28">AJEROMI-IFELODUN</option>
            <option value="16">LAGOS MAINLAND</option>
            <option value="18">SURULERE</option>
            <option value="15">SUB URBAN</option>
            <option value="15">AGEGE</option>
            <option value="12">AKINOSHO</option>
            <option value="24">IFAKO-IJAIYE</option>
            <option value="6.8">IKEJA</option>
            <option value="2.1">KOSOFE</option>
            <option value="2.1">OJOTA</option>
            <option value="7.5">MUSHIN</option>
            <option value="21">OJO</option>
            <option value="7.2">OSHODI</option>
            <option value="12">SHOMOHU</option>
            <option value="34">AMUWO-ODOFIU</option>
            </select>
            
        <input placeholder="Name"/>
        <input placeholder="Address"/>
        <input placeholder="Email"/>
        <input placeholder="Number"/>
        <h1>TOTAL</h1>
        <h>${total}</h><br/>
        <button class="btns" onClick={()=>handlepay()}>Buy Now</button>
          
        {!pay?<div></div>:<div>
            <h>Pay With</h><br/>
           <span>PayStack</span> 
           <span>Gift Card</span>
           <span>Use LiveCode</span>
           <small>Help?</small>
            </div>}
    </form>
    </div>}
    
    </div>
    )
}

export default Cart
