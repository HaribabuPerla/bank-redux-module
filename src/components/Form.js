import { useState } from "react";
import { useDispatch } from "react-redux";

export default function Form() {
    const dispatch= useDispatch()
    
    
    const [mob,setMob]=useState(null);
    const [balance,setBalance]=useState(0)

    const BalchangeHandler=(e)=>{
        setBalance(e.target.value)
    }
    const mobChangeHandler=(e)=>{
        setMob(e.target.value)
    }

  return (
    <div className="d-flex justify-content-center align-items-center h-100 mt-5">
      <form className=" w-50 bg-dark p-3">
        <div className="mb-3">
          <label for="exampleInputEmail1" className="form-label text-white">
            Balance
          </label>
          <input
            type="text"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            onChange={(e)=>BalchangeHandler(e)}

          />
        </div>
        <div className="mb-3">
          <label for="exampleInputPassword1" className="form-label text-white">
            Mobile Number
          </label>
          <input
            type="text"
            className="form-control"
            id="exampleInputPassword1"
            onChange={(e)=>mobChangeHandler(e)}
          />
        </div>

        <div className="d-flex flex-row justify-content-center w-100">
          <button type="button" className="btn btn-success me-2"
             onClick={()=>dispatch({type:'Deposit',payload:{balance:balance, mobilenumber:mob,acType:"Credited",date:new Date().toLocaleString('en-US', {weekday: 'long', month: 'long', year: 'numeric'})}})}
          >
            Deposit
          </button>
          <button type="button" className="btn btn-danger"
          onClick={()=>dispatch({type:'Withdraw',payload:{balance:balance, mobilenumber:mob,acType:"Debited",date:new Date().toLocaleString('en-US', {weekday: 'long', month: 'long', year: 'numeric'})}})}
          
          >
            Withdraw
          </button>
        </div>
      </form>
    </div>
  );


}
