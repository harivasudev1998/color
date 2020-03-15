import React from 'react';

class DisplayColorComp extends React.Component {
  
    render() { 
       
        return( 
         <div>
                <br/>
            <br/>
        <table border="1 solid">
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Color</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>
                        {this.props.name}
                    </td>
                    <td>
                        {this.props.code}
                    </td>
                </tr>
            </tbody>
        </table>
        </div>
        )
    }
}
 
export default DisplayColorComp

