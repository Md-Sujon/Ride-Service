import React from 'react';
import { useHistory } from 'react-router';

const Transport = ({Transport}) => {
  const history=useHistory();
  const handleBook=(transportType)=>{
      history.push(`/Destination/${transportType}`)
  }
    return (
        <div>
            
        </div>
    );
};
export default Transport;