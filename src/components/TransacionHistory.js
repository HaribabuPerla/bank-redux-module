

import { useSelector } from "react-redux";

export default function TransactionHistory(){
    let getData = useSelector((state)=>{return state})
  


    


    return(
        <>
        <h3 className="mt-3 text-success ">Transaction History</h3>
        {/* <div>TotalBalance:{total}</div> */}
        <div className="container">

        <table class="table table-success table-striped">
        <thead>
    <tr>
      <th scope="col">Sl.No</th>
      <th scope="col">Transaction Type</th>
      <th scope="col">Balance</th>
      <th scope="col">Mobile Number</th>
      <th scope="col">Date</th>
    </tr>
  </thead>
  <tbody>
    {
        getData?.slice(1,getData.length).map((item,i)=>
        <tr>
            <td>{i+1}</td>
            <td>{item?.acType}</td>
            <td>{item?.balance}</td>
            <td>{item?.mobilenumber}</td>
            <td>{item?.date}</td>
       </tr>
        
        
        )
    }
  </tbody>

        </table>
        </div>
        </>
    )
}