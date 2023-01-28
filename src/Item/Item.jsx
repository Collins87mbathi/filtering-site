import React from 'react'

const Item = ({capsule}) => {
 console.log(capsule);
  return (
    <div className="border shadow-lg rounded-lg hover:scale-105 duration-300">
      <div className="flex gap-1 flex-col p-2">
      <p>
        <span className="font-semibold">land landings :</span>{" "}
            {capsule.land_landings}{" "}
        </p>
        <p>
        <span className="font-semibold">land update :</span>{" "}
            {capsule.last_update}{" "}
        </p>
        <p>
        <span className="font-semibold">serial :</span>{" "}
            {capsule.serial}{" "}
        </p>
        <p>
        <span className="font-semibold">Status :</span>{" "}
                  <span
                    className="bg-[blue] px-2 rounded-md text-[#F7F7F7]">
                    {capsule.status}
                  </span>
        </p>

        <p>
        <span className="font-semibold">type :</span>{" "}
            {capsule.type}{" "}
        </p>
      </div>
    </div>
  )
}

export default Item