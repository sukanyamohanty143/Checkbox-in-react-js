import {React,useState} from 'react';


const MultipleCheckbox=()=>{
    const [chosseVlu,setChosseVlu]=useState('')

    return(
        <div className='main'>
            <form>
                <label><b>Selecte your location:</b></label><br/>
                <input type='checkbox' name='city' value='Mumbai' onChange={(e)=>{setChosseVlu(e.target.value)}}/>
                <label>Mumbai</label><br/>
                <input type='checkbox' name='city' value='Delhi' onChange={(e)=>{setChosseVlu(e.target.value)}}/>
                <label>Delhi</label><br/>
                <input type='checkbox' name='city' value='Pune' onChange={(e)=>{setChosseVlu(e.target.value)}}/>
                <label>Pune</label><br/>
                <input type='checkbox' name='city' value='Bangalore' onChange={(e)=>{setChosseVlu(e.target.value)}}/>
                <label>Bangalore</label><br/>
                <input type='checkbox' name='city' value='Chennai' onChange={(e)=>{setChosseVlu(e.target.value)}}/>
                <label>Chennai</label><br/>
            </form>
            <h1>{chosseVlu}</h1>
        </div>
    );
}
export default MultipleCheckbox;