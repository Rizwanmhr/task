import React from 'react';

const FilterMethod = () => {
  const data = [100, 200, 300, 400, 500];

  const filteredNumbers = data.filter(item => item < 300);

  return (
    <div className="px-12 py-4">
      <div className="flex justify-center mt-10">
        <h1 className="text-center font-bold text-3xl inline text-white bg-primary border-[1px] border-success py-2 px-4 w-[400px] rounded-md">
          Array Methods
        </h1>
      </div>
      <div className="mt-10">
        <p className="text-lg">Filtering numbers less than 300 using Filter Method</p>
        <div>
          {filteredNumbers.map((item, index) => (
            <div key={index}>
              {item}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default FilterMethod;
