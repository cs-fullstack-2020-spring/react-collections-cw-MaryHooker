import React,{Component} from 'react';

class UserInformation extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
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

    render() { 
        return ( 
            <div>
                {/* Using this.props pull down each property of the objects and use object notation render each inside of a p tag */}
                <p>Id: {this.props.userInfo.id}</p>
                <p>Name: {this.props.userInfo.name}</p>
                <p>Username: {this.props.userInfo.username}</p>
                <p>Email: {this.props.userInfo.email}</p>
                <p>Street: {this.props.userInfo.address.street}</p>
                <p>Suite: {this.props.userInfo.address.suite}</p>
                <p>City: {this.props.userInfo.address.city}</p>
                <p>Zip Code: {this.props.userInfo.address.zipcode}</p>
                <p>Geo-lat: {this.props.userInfo.address.geo.lat}</p>
                <p>Geo-lng: {this.props.userInfo.address.geo.lng}</p>
                <hr className='breaks'/>

            </div>
         );
    }
}
 
export default UserInformation;