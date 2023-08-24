import axios from "axios";
import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

const Assets = () => {
  const [assets, setAssets] = useState([]);

  const { state } = useLocation();
  console.log(state);

  useEffect(() => {
    const fetchDetails = async () => {
      try {
        const response = await axios.get("api/v1/assets");
        const data = await response.data.assets;
        setAssets(data);
      } catch (error) {
        console.log("Error in the fetch assets");
      }
    };
    fetchDetails();
  }, []);
  return (
    <div>
      <div className="header">
        <h1 className="header__asset">Asset List</h1>
        <div className="header__user">
          <h4>{state.name}</h4>
          <p>{state.age}</p>
          <p>{state.bankBalance}</p>
        </div>
      </div>
      <ul className="card__parent">
        {assets.map((asset) => (
          //   <li key={asset._id}>
          //     <h3>{asset.name}</h3>
          //   </li>
          <div className="card__wrapper" key={asset._id}>
            <div className="card__inner">
              <h4 className="card__name">{asset.name}</h4>
              <div className="card__bottom">
                <button
                  className="card__button"
                  onClick={() => {
                    setAssets(assets.filter((a) => a._id !== asset._id));
                  }}>
                  own it
                </button>
                <div className="card__stock">stock:{asset.quantity}</div>
              </div>
            </div>
          </div>
        ))}
      </ul>
    </div>
  );
};

export default Assets;

/*
     <div className="border p-[0.9375rem] group bg-white rounded-md hover:shadow-lg duration-150 ease-in cursor-pointer">
        <button type="button" className="text-left w-full">
          <div className="flex justify-between mb-2.5">
            <img
              width="90"
              height="90"
              className="rounded-md"
              src={props.img}
              alt="company_logo"
            ></img>
            <div className="mb-1 pt-0 inline-block px-2 h-6 bg-level-badge text-center text-black text-level-badge-fs leading-level-badge-lh rounded-4xl"></div>
          </div>
          <h4 className="font-medium text-base leading-[1.5] mb-2 font-inter">
            {props.name}
          </h4>
          <div className="flex items-center cursor-pointer mb-3 break-words truncate">
            <p className=" hover:text-highlight leading-4 text-sm font-inter">
              {props.text}
            </p>
          </div>
        </button>
      </div> 
 */
