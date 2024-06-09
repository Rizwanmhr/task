import React from 'react';

const FlatMethod = () => {
  const nestedArray = [1, [2, 3], [4, [5, 6],[15, 6]], 7];

  const flattenedArray = nestedArray.flat(2);

  return (
    <div className="px-12 py-4">
      <div className="flex justify-center mt-10">
        <h1 className="text-center font-bold text-3xl inline text-white bg-primary border-[1px] border-success py-2 px-4 w-[400px] rounded-md">
          Flat Methods
        </h1>
      </div>
      <div className="mt-10">
        <div>{JSON.stringify(nestedArray)}</div>
        <div>{JSON.stringify(flattenedArray)}</div>
      </div>
    </div>
  );
}

export default FlatMethod;
