import React from 'react'

export default function User(props) {

    const {email,name,avatar}=props;
    console.log(email)

    return (
        <>

        <div className='h-[400px] max-w-200 border-4 mx-4 mb-24 rounded-lg'>
        <img src={avatar} alt="avatar" className='h-32 w-34 rounded-full mx-auto mt-[-50px]'
        />
        <div className='max-w-sm'>
                <h4 className='name'>{name}</h4>
                <p className='about'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. </p>
                <p className='email'>{email}</p>
        </div>
            
         </div> 
      
        </>
    )
}