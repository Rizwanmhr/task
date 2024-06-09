import React from 'react'
import ReuseableButton from './ReuseableButton'

const MainComponent = () => {
  return (
    <div>
        <div className="flex justify-center mt-10">
        <h1 className="text-center font-bold text-3xl inline text-white bg-primary border-[1px] border-success py-2 px-4 w-[400px] rounded-md">
        Reuseable Buttons
        </h1>
      </div>
      <ReuseableButton text='First Button' bgColor='#007F5F' textColor='#CC4747' />
      <ReuseableButton text='Second Button' bgColor='#3b8ff1' textColor='#fff' />
      <ReuseableButton text='third Button' bgColor='#CC4747' textColor='#000' />
    </div>
  );
}

export default MainComponent