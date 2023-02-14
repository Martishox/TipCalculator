import React, { useEffect, useState } from 'react';
import './index.css';
import logo from './images/logo.svg';
import dollar from './images/icon-dollar.svg';
import person from './images/icon-person.svg';

function App() {

  const[bill, setBill] = useState("");
  const[people, setPerson] = useState("");
  const[percent, setPercent] = useState("");
  const[total, setTotal] = useState("0.00");
  const[tips, setTip] = useState("0.00");
  const[reset, setReset] = useState(0);
  const[click, setClick] = useState("");


  useEffect(() => {

    if(bill < 0 || people < 0 || bill === "0" || people === "0" || bill === "")
    {
      return setTip("0.00"), setTotal("0.00");
    }

    if(click !== "")
    {
      setPercent("");
    }


    if(percent !== "")
    {
      const sum = +percent / 100;
      console.log(sum);
      const tip = bill * sum;  
      console.log(tip);
      const result = (+bill + bill * sum) / +people;
      console.log(result);

      if (isNaN(result) || !isFinite(result)) {
        return setTip("0.00"), setTotal("0.00");
      }
       
      else {
        const perPersonTip = tip / people;
        if(result > 10000 || perPersonTip > 10000)
        {
          return (setTip("Error"), setTotal("Error"));
        }
          return (
            setTip(perPersonTip.toFixed(2)),
            setTotal(result.toFixed(2)),
            setReset(1),
            setClick("")
          );
        } 
    }

    //setTimeout(() => {setPercent("")}, 10000);

    if(click !== "")
    {
      const tip = bill * click;
      const result = ((+bill) + (bill * click)) / (+people);
      if(isNaN(result) || !isFinite(result)){
        return setTip("0.00"), setTotal("0.00");
      }
      const perPersonTip = tip / people;
      if(result > 10000 || perPersonTip > 10000)
        {
          return (setTip("Error"), setTotal("Error"));
        }
      return setTip(perPersonTip.toFixed(2)), 
      setTotal(result.toFixed(2)),
      setReset(1)
    }

  })



  console.log(percent);

  const logoImage = {
    backgroundImage: `url("${logo}")`,
    backgroundRepeat: `no-repeat`,
    backgroundPosition: `center`,
    webkitbackgroundsize: `cover`,
    mozbackgroundsize: `cover`,
    obackgroundsize: `cover`,
  }

  const backgroundImageStyle = {
    backgroundImage: `url("${dollar}")`,
    backgroundRepeat: `no-repeat`,
    backgroundPosition: `left`,
    borderLeft: ` 17px solid #f4fafa`,
    webkitbackgroundsize: `cover`,
    mozbackgroundsize: `cover`,
    obackgroundsize: `cover`,
  };

  const backgroundImageStyle2 = {
    backgroundImage: `url("${person}")`,
    backgroundRepeat: `no-repeat`,
    backgroundPosition: `left`,
    borderLeft: ` 17px solid #f4fafa`,
    webkitbackgroundsize: `cover`,
    mozbackgroundsize: `cover`,
    obackgroundsize: `cover`,
  };

  // const CalcAmount = (perc) =>{
  //   if(bill < 0 || people < 0 || bill === "0" || people === "0" || bill === "")
  //   {
  //     return setTip("0.00"), setTotal("0.00");
  //   }
  //   if(people !== "")
  //   {
  //     const tip = bill * perc;
  //     const result = ((+bill) + (bill * perc)) / (+people);
  //     const perPersonTip = tip / people;
  //     setTip(perPersonTip.toFixed(2))
  //     setTotal(result.toFixed(2));
  //     setReset(1);
  //     setPercent("");
  //   }
  // }


  const resetAll = () =>{
    if(total !== "" && reset === 1)
    {
      setBill("");
      setPerson("");
      setPercent("");
      setTip("0.00");
      setTotal("0.00");
      setReset(0);
      setClick("");
    }
  }

  const CheckNumber = (element) =>{
    if(isNaN(element) || element === "0" || element < 0){
      return element;
    }
  }


  return (
    <div className="bg-[#c5e4e7] h-screen flex flex-col justify-center items-center font-monoSpace font-bold m-0 sm:p-0 overflow-x-hidden">
      <img style={logoImage} className="p-12 sm:mb-12 mb-5 sm:mt-0 mt-48" />
      {/* Main block*/}
      <div className="bg-white flex flex-wrap justify-between items-center p-5 py-0.5 rounded-3xl sm:rounded-xl shadow-md sm:flex sm:justify-center">
        {/* Inputs block*/}
        <div className="bg-white p-10">
          <div>
            <div className='flex justify-between'>
              <h4 className=" text-[#5e7a7d]">Bill</h4>
              <h1 className={!isNaN(bill) ? 'hidden' : 'text-[#cc7a69] block'}>Numbers Only</h1>
              <h1 className={bill !== "0" ? 'hidden' : 'text-[#cc7a69] block'}>Can't be zero</h1>
              <h1 className={bill < 0 ? 'text-[#cc7a69] block' : 'hidden'}>Can't be negative</h1>
            </div>
            <input placeholder='0' value={bill} onChange={(e) => {setBill(e.target.value) }} className= 
            {CheckNumber(bill) ? "text-right rounded text-[#5e7a7d] bg-[#f4fafa] text-2xl px-4 py-1 mt-2 w-full outline-none outline-[#cc7a69] outline-offset-0 outline-2" : "text-right rounded text-[#5e7a7d] bg-[#f4fafa] text-2xl px-4 py-1 mt-2 w-full outline-none focus:outline-[#26c0ab] focus:outline-offset-0 focus:outline-2"} style={backgroundImageStyle}></input>
          </div>
          <h4 className=" text-[#5e7a7d] mt-9 mb-3">Select Tip %</h4>
          <div className='flex flex-col flex-wrap'>
              <div className='grid grid-cols-2 sm:gap-3 gap-x-0 gap-y-4 sm:grid-cols-3'>
                <button onClick={() => setClick(0.05)} className={click === 0.05 ? "rounded-md h-full px-10 py-2 sm:w-28 w-36 text-2xl bg-[#9fe8df] text-[#00494d]" : "bg-[#00494d] rounded-md h-full text-white px-10 py-2 sm:w-28 w-36 text-2xl hover:bg-[#9fe8df] hover:text-[#00494d] focus:bg-[#9fe8df] focus:text-[#00494d]"}>5%</button>
                <button onClick={() => setClick(0.1)} className={click === 0.1 ? "rounded-md h-full px-8 py-2 sm:w-28 w-36 text-2xl bg-[#9fe8df] text-[#00494d]" : "bg-[#00494d] rounded-md h-full text-white px-8 py-2 sm:w-28 w-36 text-2xl hover:bg-[#9fe8df] hover:text-[#00494d] focus:bg-[#9fe8df] focus:text-[#00494d]"}>10%</button>
                <button onClick={() => setClick(0.15)} className={click === 0.15 ? "rounded-md h-full px-9 py-2 sm:w-28 w-36 text-2xl bg-[#9fe8df] text-[#00494d]" :"bg-[#00494d] rounded-md h-full text-white px-9 py-2 sm:w-28 w-36 text-2xl hover:bg-[#9fe8df] hover:text-[#00494d] focus:bg-[#9fe8df] focus:text-[#00494d]"} >15%</button>
                <button onClick={() => setClick(0.25)} className={click === 0.25 ? "rounded-md h-full px-8 py-2 sm:w-28 w-36 text-2xl bg-[#9fe8df] text-[#00494d]" : "bg-[#00494d] rounded-md h-full text-white px-8 py-2 sm:w-28 w-36 text-2xl hover:bg-[#9fe8df] hover:text-[#00494d] focus:bg-[#9fe8df] focus:text-[#00494d]"}>25%</button>
                <button onClick={() => setClick(0.5)} className={click === 0.5 ? "rounded-md h-full px-8 py-2 sm:w-28 w-36 text-2xl bg-[#9fe8df] text-[#00494d]" : "bg-[#00494d] rounded-md h-full text-white px-8 py-2 sm:w-28 w-36 text-2xl hover:bg-[#9fe8df] hover:text-[#00494d] focus:bg-[#9fe8df] focus:text-[#00494d]"}>50%</button>
                <input placeholder="Custom" value={percent} onChange={(e) => setPercent(e.target.value)} className={CheckNumber(percent) ? "text-right text-[#5e7a7d] bg-[#f4fafa] text-2xl sm:w-28 w-36 px-2.5 rounded outline-none outline-[#cc7a69] outline-offset-0 outline-2 h-full" :"text-right text-[#5e7a7d] bg-[#f4fafa] text-2xl sm:w-28 w-36 px-2.5 rounded outline-none focus:outline-[#26c0ab] focus:outline-offset-0 focus:outline-2 h-full"}></input>
              
              <div className="flex flex-wrap my-1 ">
                </div>
            </div>
          </div>
          <div className='flex justify-between mt-5 mb-2'>
            <h4 className=" text-[#5e7a7d]">Number of People</h4>
            <h1 className={!isNaN(people) ? 'hidden' : 'text-[#cc7a69] block'}>Numbers Only</h1>
            <h1 className={people !== "0" ? 'hidden' : 'text-[#cc7a69] block'}>Can't be zero</h1>
            <h1 className={people < 0 ? 'text-[#cc7a69] block' : 'hidden'}>Can't be negative</h1>
          </div>
          <input placeholder="0" value={people} onChange={(e) => setPerson(e.target.value)} style={backgroundImageStyle2} className= {CheckNumber(people) ? "text-right text-[#5e7a7d] bg-[#f4fafa] text-2xl w-full px-4 py-1 rounded outline-none outline-[#cc7a69] outline-offset-0 outline-2" :"text-right text-[#5e7a7d] bg-[#f4fafa] text-2xl w-full px-4 py-1 rounded outline-none focus:outline-[#26c0ab] focus:outline-offset-0 focus:outline-2"} ></input>
        </div>
        {/* Inputs block*/}
        {/* Output block*/}
        <div className="bg-[#00494d] p-10 my-6 mx-1 rounded-2xl text-white flex flex-col ">
          <div className='flex justify-between w-80 mt-6'>
            <div className=''>
              <h4>Tip Amount</h4>
              <span className=" text-[#5e7a7d] text-sm">/ person</span>
            </div>
            <div className='text-5xl text-[#26c0ab] '><span>$</span>{tips}</div>
          </div>
          <div className='flex justify-between py-10 mb-10'>
            <div>
              <h4>Total</h4>
              <span className=" text-[#5e7a7d] text-sm">/ person</span>
            </div>
            <div className='text-5xl text-[#26c0ab]'><span>$</span>{total}</div>
          </div>
          <button onClick={resetAll} className={reset === 0 ?'bg-[#0c686d] text-[#00494d6e] text-lg rounded py-2 mt-12' : 'bg-[#9fe8df] text-[#00494d] text-lg rounded py-2 mt-12'}>RESET</button> 
          {/* Output block*/}
        </div>

      </div>
      
      
    </div>
  );
}

export default App;
