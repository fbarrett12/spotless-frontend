import React from 'react'

const ServiceProviderCmp = (props) => {
    const laundromat = props.laundromats

    
    
    return (
        <div className='laundry-list'>
            {laundromat.attributes.name}
        </div>
    )
}

export default ServiceProviderCmp