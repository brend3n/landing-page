import {Button} from 'react-bootstrap'
import cashapp_img from './cashapp_img.png'
import './App.css';
export default function LandingPage(){

    async function venmo(event){
        event.preventDefault();

        var link = "https://venmo.com/u/breadofbrenden";
        window.location.href = link;
    }

    function cashapp(){
        return (<img src={cashapp_img}/>);
    }

    return(
        <div className="font-link">

            <h1>Site is under development</h1>
            <div><br></br></div>

            <h4>In the meantime, all orders are $5.</h4>
            
            <div><br></br></div>
            <div><br></br></div>
            <h4 className="text-center">Pay $5 with either venmo or cashapp</h4>
            <body className="text-center">When paying, leave some sort of contact information.</body>   
            <div><br></br></div>
            <div><br></br></div>
            {/* <div>Total cost for {localStorage.getItem("bread_type")}: ${(parseInt(localStorage.getItem("price")))}</div> */}
            <div className="text-center">
                <Button block size="lg" onClick={venmo} variant="primary" type="submit">
                    Venmo
                </Button>
            </div>

            <div><br></br></div>
            <div><br></br></div>

            <div className="text-center">
                {cashapp()}
            </div>

        </div>
    )

}