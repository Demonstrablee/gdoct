function FinalD (){
    return(
        <div>

        <div>
            <h1>Diagnosis</h1> 
            <h5> Please Note: This is a Public Prototype any and all diagnosis should be fully evaluated by a licensed
 profesionsal</h5>
            <div className="dia-pane">
                <h4> Our systems have concluded that based on your responses and historical data, you do not suffer this ailment.<br/>
                    To be certain of your results Google always does recomend a licensed
 doctors own review of your medical history <br/>
                    and possible family dispositions to variety of medical conditions.
                </h4>
                 
                <h3> Take a look at doctors in your Area</h3>
                <table className="center">
                    <thead>
                    <tr>
                        <th> Name </th> 
                        <th> Address </th> 
                        <th> Rating </th> 
                        <th> Image </th> 
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <td> Geovani Annatoli </td> 
                        <td> 385 Westbrooke Blvd, Bronx, NY 10347 </td> 
                        <td> 3.5 </td> 
                        <td> <img src="" alt = "GeovaniA.jpg"/>  </td> 
                    </tr>
                    <tr>
                        <td> Marcus Anthony </td> 
                        <td> 2345 Holloway Ave, Bronx, NY 10457 </td> 
                        <td> 4.5 </td> 
                        <td> <img src="" alt="MarcusA.jpg" />  </td> 
                    </tr>
                    <tr>
                        <td>Resse Benjamin</td>
                        <td>456 Elm St, Bronx, NY 10457</td>
                        <td>4.2</td>
                        <td><img src=" " alt="ResseB.jpg"/></td>
                    </tr>
                    <tr>
                    <td>Catherine Cadera</td>
                    <td>789 Oak St, Bronx, NY 10477</td>
                    <td>4.7</td>
                    <td><img src=" " alt="CatherineC.jpg"/></td>
                    </tr>
                </tbody>
                </table>
               

                <h3> Do you have any other Questions or Concerns?</h3>
                <input className='searchBox'/> 
                <h3> Thank you for trying Google Doctor</h3>
                <h3> Would you fill out a <a href="">Feedback Form</a> so that we can improve Google Doctor.</h3>
                <h2 className="footer"> &copy;2024 Google Doctor&trade; All rights Reserved to No One Yet. <u>Powered by the internet</u>.</h2>
            </div>
        </div>
        </div>
    )
}
export default FinalD