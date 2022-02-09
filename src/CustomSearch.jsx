import React, {useState} from 'react';
import DatePicker from "react-datepicker";
import Socialmedia from './Socialmedia';
import "./CustomSearch.css";
import "react-datepicker/dist/react-datepicker.css"

function CustomSearch() {
  const [checkInDate, setCheckInDate] = useState(new Date());
  const [checkOutDate, setCheckOutDate] = useState(new Date());
  return (
      <>
        <section>
          <section>
            <h2 className='customheader'>Search Your Dream Rental: </h2>  
              <form action="submit" className='search-tool'>
                
                <input className='input-spacing'type="text" placeholder='Duplex, Apartment,etc...' />
                &nbsp; 
                <button className='mainsearchbutton' typeof='submit'  > SEARCH</button>
              </form>
          </section>
          <br />
          <section>
           <h2  className='customheader'>Custom Search: </h2>
            <div className='form-container'>
              <form>
                <label htmlFor="location" > Location</label>
                &nbsp; 
                <input type="text" placeholder='Halifax, Canada'/>
                <br /> <br />
                <label htmlFor="accomodation" className=''>Accomodation Type</label>
                &nbsp;
                <select >
                  <option value="longterm">Long-Term</option>
                  <option value="shortterm">Short-Term</option>                 
                </select>
                <br /> <br />
                <label htmlFor="durationLabel">Duration </label>
                  <div /*on Change values type and number of days/months  */ >
                    <input className='input-toggle-btn' type="radio" value="days" name="duration" /> Days
                    &nbsp;&nbsp;
                    <input type="radio" value="months" name="duration" /> Months
                    &nbsp;&nbsp;
                     <input type="text" placeholder='i.e. 15, 12, etc...'/>
                  </div>
                <br /><br />
               
                  <div className="row">
                    <div className="form-group name1 col-md-6">
                      <label htmlFor="checkin">Check-In </label>
                      <DatePicker  popperPlacement="bottom-start"  selected={checkInDate} onChange={(date) => setCheckInDate(date)} />                   
                   </div>

                  <div className="form-group name2 col-md-6">
                      <label htmlFor="checkin">Check-Out </label>
                      <DatePicker selected={checkOutDate} onChange={(date) => setCheckOutDate(date)} />
                  </div>
                </div>   
                <br /><br /> <br /><br /> <br /><br /> <br /><br />
                <button typeof='submit'  className='customsearch'> SEARCH</button>
              </form>
            </div>
          </section> 
                <br /><br /> <br /><br /> <br /><br /> <br /><br />
                <br /><br /> <br /><br /> <br /><br /> <br /><br />
          <section>
            <div className='footer'>
              <h1>FOOTER</h1>
            </div>
          </section>
          <section className='socialmedia'> 
           <Socialmedia/>
          </section>
      </section>
      </>
  );
};

export default CustomSearch;
