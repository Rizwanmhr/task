import React from 'react'

const ArrayMethods = () => {
const data = [
    {
        id:1,
        firstName: 'Ali',
        lastName:'Hamza'
    },
        {
        id:2,
        firstName: 'Ali',
        lastName:'Hamza'
    },
        {
        id:3,
        firstName: 'Ali',
        lastName:'Hamza'
    },
]
  return (
     <div className="px-12 py-4">
       <div className="flex justify-center mt-10">
        <h1 className="text-center font-bold text-3xl inline text-white bg-primary border-[1px] border-success py-2 px-4 w-[400px] rounded-md">
        Array Methods
        </h1>
      </div>
      <div className="mt-10">
         <p className='text-lg'>Getting all users using Map Method</p>
         <div>
            {
                data.map((item,i) => {
               return(
                <div className='flex items-center gap-4'>
                    <p>{i+1}:</p>
                    <p>{item.firstName}</p>
                    <p>{item.lastName}</p>
                </div>
               )
                })
            }
         </div>
      </div>
      </div>
  )
}

export default ArrayMethods