import React from "react";

const MainDashbordCards = () => {
  return (
    <>
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-4 mt-4">
        <div className="bg-white overflow-hidden shadow sm:rounded-lg ">
          <div className="px-4 py-5 sm:p-6">
            <dl>
              <dt className="text-xl font-bold leading-5 text-black truncate ">
                Diabetes Risk
              </dt>
              <dd className="mt-1 text-3xl leading-9 font-semibold text-red-600 ">
                35%
              </dd>
            </dl>
          </div>
        </div>
        <div className="bg-white overflow-hidden shadow sm:rounded-lg ">
          <div className="px-4 py-5 sm:p-6">
            <dl>
              <dt className="text-xl leading-5 font-bold text-black truncate ">
                Blood Glucose
              </dt>
              <dd className="mt-1 text-3xl leading-9 font-semibold text-green-600 ">
                98mg
              </dd>
            </dl>
          </div>
        </div>
        <div className="bg-white overflow-hidden shadow sm:rounded-lg ">
          <div className="px-4 py-5 sm:p-6">
            <dl>
              <dt className="text-xl leading-5 font-bold text-black truncate ">
                BMI
              </dt>
              <dd className="mt-1 text-3xl leading-9 font-semibold text-yellow-500 ">
                27.4
              </dd>
            </dl>
          </div>
        </div>
        <div className="bg-white overflow-hidden shadow sm:rounded-lg ">
          <div className="px-4 py-5 sm:p-6">
            <dl>
              <dt className="text-xl leading-5 font-bold text-black truncate ">
                Insulin
              </dt>
              <dd className="mt-1 text-3xl leading-9 font-semibold text-green-600 ">
                100mIU/L
              </dd>
            </dl>
          </div>
        </div>
      </div>
    </>
  );
};

export default MainDashbordCards;
