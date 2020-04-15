import React,{Component} from 'react';

class UserInformation extends Component {
    constructor(props) {
        super(props);
        this.state = { 
           
         }
    }

    
        // "id": 1,
        // "name": "Leanne Graham",
        // "username": "Bret",
        // "email": "Sincere@april.biz",
        // "address": {
        //     "street": "Kulas Light",
        //     "suite": "Apt. 556",
        //     "city": "Gwenborough",
        //     "zipcode": "92998-3874",
        //     "geo": {
        //         "lat": "-37.3159",
        //         "lng": "81.1496"
        //     }

        //create an event that will run whenever you click on any property in the browser
        anyRowClicked = (event) =>{
            //not functioning NEED TO FINISH
            console.log(this.props.userInfo.id)
                console.log(`Running event ${event.target.name}`)

                //toggle the entire body background color
                document.querySelector('body').classList.toggle('purple');

                //change color of div
                event.target.classList.toggle('purple');
                
            }
            
        

    render() { 
        return ( 
            <div>
                {/* Using this.props pull down each property of the objects and use object notation render each inside of a p tag */}
                <p onClick={this.anyRowClicked} name='id' >Id: {this.props.userInfo.id}  </p>
                <p onClick={this.anyRowClicked}>Name: {this.props.userInfo.name}</p>
                <p onClick={this.anyRowClicked}>Username: {this.props.userInfo.username}</p>
                <p onClick={this.anyRowClicked}>Email: {this.props.userInfo.email}</p>
                <p onClick={this.anyRowClicked}>Street: {this.props.userInfo.address.street}</p>
                <p onClick={this.anyRowClicked}>Suite: {this.props.userInfo.address.suite}</p>
                <p onClick={this.anyRowClicked}>City: {this.props.userInfo.address.city}</p>
                <p onClick={this.anyRowClicked}>Zip Code: {this.props.userInfo.address.zipcode}</p>
                <p onClick={this.anyRowClicked}>Geo-lat: {this.props.userInfo.address.geo.lat}</p>
                <p onClick={this.anyRowClicked}>Geo-lng: {this.props.userInfo.address.geo.lng}</p>
                <hr className='breaks'/>

            </div>
         );
    }
}

 
export default UserInformation;