const searchButton = () => {
  return (
    <div className="flex items-center border-2 rounded-xl p-2 border-orange-500">
      <input
        type="text"
        placeholder="Search..."
        className="bg-black text-white focus:outline-none"
      />
      <button className="bg-orange-500 hover:bg-orange-600 text-white p-1 rounded-xl">
        Search
      </button>
    </div>
  );
};

export default searchButton;
