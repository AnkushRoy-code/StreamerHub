const Hero = () => {
  return (
    <div
      className="flex justify-between m-20"
      style={{
        scrollSnapAlign: "center",
      }}
    >
      <div className="w-3/5 space-y-8">
        <div className="space-y-4">
          <p className="text-white text-7xl">
            The ultimate host to all your content
          </p>
          <p className="text-orange-500 text-3xl">
            Stream, share, save all kind of media to your local devices all at
            your own leisure.
          </p>
        </div>
        <div className="flex gap-10">
          <button className="text-orange-500 border-2 border-orange-500 p-2 hover:filter hover:brightness-75">
            Become A User
          </button>
          <button className="bg-orange-500 hover:bg-orange-600 p-2">
            Become A Member
          </button>
        </div>
      </div>
      <div
        className="bg-orange-900"
        style={{
          height: "300px",
          width: "300px",
          borderRadius: "20px",
          display: "grid",
          placeItems: "center",
        }}
      >
        <h3 className="text-orange-500 text-2xl">
          Stream<span className="text-white border-b-2">Hub</span>
        </h3>
      </div>
    </div>
  );
};

export default Hero;
