import React,{Component, Fragment} from 'react';
import UserInformation from './UserInformation';

class AppContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        //import rawData using require and save it under a constant variable
        const rawData = require('../rawData')
        //sanity
        console.log(`Raw Data Found ${rawData[0].address.street}`)

        return ( 
            <Fragment>
                <h1>User Collections App</h1>
                {/* Loop through the imported array using map */}
                {
                    rawData.map((user, id) =>{
                        return(
                            <UserInformation key={id} userInfo={user}/>
                        )
                    }

                    )
                }

            </Fragment>
         );
    }
}
 
export default AppContainer;