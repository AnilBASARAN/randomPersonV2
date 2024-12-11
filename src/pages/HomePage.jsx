import React, { useEffect } from "react";
import { useRandomStore } from "../store/useRandomStore";
import LoadingSpinner from "../shared-components/LoadingSpinner";
import RandomUserList from "../components/RandomUserList";

const HomePage = () => {
  const { getRandomUsers, randomUsers, isRandomUsersLoading } = useRandomStore();

  useEffect(() => {
    getRandomUsers();
  }, [getRandomUsers]);


  return (
    <>
      {isRandomUsersLoading ? (
        <LoadingSpinner />
      ) : randomUsers ? (

        <div className="relative min-h-screen text-white overflow-hidden">
        <div className="flex flex-col items-center justify-center z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <h2 className="text-center text-5xl sm:text-6xl font-bold text-emerald-400 mb-4">
            Random People
          </h2>
      
          <RandomUserList randomUsers={randomUsers} />
          <button
          onClick={getRandomUsers}
           className="p-2 m-1 bg-emerald-400 text-2xl shadow-transparent rounded-sm hover:bg-emerald-300">Random Person</button>
          </div>
          </div>
    
     
      
      
      ) : (
        <p>No user data found</p>
      )}
    </>
  );
};

export default HomePage;
