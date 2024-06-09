import React from 'react'

const ReuseableButton = ({text,bgColor,textColor}) => {
  return (
    <div className="flex items-center gap-5 px-12 py-4">
      <button className="px-3 py-2 w-[15rem] rounded-lg" style={{background:bgColor,color:textColor}}>
        {text}
      </button>
    </div>
  );
}

export default ReuseableButton