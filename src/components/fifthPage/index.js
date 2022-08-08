import React from 'react'
import './fifthPage.css'

const fifthPage = () => {
  return (
    <div className='fifthPageContainer' id='kontakt'>
        <p className='fifthPageTitle'>KONTAKT</p>
        <div className='fifthPageContact'>
            <form action=''>
              <div className='itemBox'>
                {/* <label>Imie i Nazwisko</label> */}
                <input className='item' placeholder='Imie i Nazwisko'></input>
                {/* <label>Email</label> */}
                <input className='item' placeholder='Email'></input>
                {/* <label>Wiadomość</label> */}
                <textarea class='item' placeholder='Wiadomość'></textarea>
                <button>Wyślij</button>
              </div>
            </form>
        </div>
    </div>
  )
}

export default fifthPage