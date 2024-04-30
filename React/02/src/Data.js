import React, { useState } from "react";
import datas from "./datas.json";

const Data = () => {
  //   console.log(datas);
  //   console.log(typeof datas);

  const [nData, setnData] = useState(datas);
  //   console.log("0th index data => ", nData[0]);
  //   console.log("0th index data id => ", nData[0].id);

  //   function handleClick_Button() {
  //     //! This will clear all the data from the array and make it a empty array
  //     setnData([]);
  //   }

  //! Here I want that filter and show only those data which do not have id same as data_id passed. This indirectly clears that particular data.
  const handle_removal_individual_data = (data_id) => {
    console.log(nData.filter((item) => item.id !== data_id));
    setnData(nData.filter((item) => item.id !== data_id));
  };

  const handle_update_individual_data = (data_id) => {
    console.log(nData.filter((item) => item.id === data_id));
    setnData(
      nData.map((item) => {
        if (item.id === data_id) {
          return { ...item, name: "Name Updated" };
        } else return item;
      })
    );
  };

  return (
    <div>
      <ul>
        {nData.map((data) => (
          <li key={data.id}>
            {data.name}
            <br />
            <button onClick={() => handle_removal_individual_data(data.id)}>
              Remove this
            </button>
            <button onClick={() => handle_update_individual_data(data.id)}>
              Update this
            </button>
          </li>
        ))}
      </ul>
      {/* <button onClick={handleClick_Button}>Clear</button> */}
      <button onClick={() => setnData([])}>Clear Data</button>
      <button onClick={() => setnData(datas)}>Add Data</button>
    </div>
  );
};

export default Data;
