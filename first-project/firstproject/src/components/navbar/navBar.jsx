import SearchButton from "./search";
import Sidebar from "./sidebar/sidebar";
import Profile from "./profile/profile";

const navBar = () => {
  return (
    <>
      <Sidebar />
      {/* I am noob so I am not able to make the bottom work with 'nav' so I am using a div instead, using nav gives out some errors :( */}
      <div
        className="bg-black mt-5 h-15 flex justify-between items-center p-3 pl-10 pr-10"
        style={{
          scrollSnapAlign: "center",
        }}
      >
        <h3 className=" ml-16 text-orange-500 text-2xl">
          Stream<span className="text-white border-b-2">Hub</span>
        </h3>
        <div className="flex gap-2 text-white">
          <SearchButton />
          {/* <div>Language</div> do not think that there should be a seperate part for language might do something else here */}
          <Profile />
        </div>
      </div>
    </>
  );
};

export default navBar;
