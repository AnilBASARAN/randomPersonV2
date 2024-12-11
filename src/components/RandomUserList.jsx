const RandomUserList = ({ randomUsers }) => {
    return (
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {randomUsers.map((user, index) => (
          <div key={index} className="p-4 bg-gray-800 rounded-lg shadow-lg">
            <img
              src={user.picture.large}
              alt={`${user.name.first} ${user.name.last}`}
              className="w-32 h-32 mx-auto rounded-full mb-4"
            />
            <h2 className="text-xl font-bold text-center">
              {user.name.first} {user.name.last}
            </h2>
            <p className="text-center text-gray-400">{user.email}</p>
            <p className="text-center text-gray-400">{user.location.country}</p>
          </div>
        ))}
      </div>
    );
  };
  
  export default RandomUserList;
  