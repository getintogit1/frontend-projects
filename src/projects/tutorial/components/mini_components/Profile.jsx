import "./Profile.css";

function Profile({ created = new Date().getFullYear(), picture, name, info }) {
  // funktion um ein element zu löschen
  //const handleClick = (e) => {
  //  console.log("Hello")
  //  e.target.style.display = "none"
  //}

  return (
    <div className="card">
      <div className="container flex flex-col items-center justify-center text-center">
        <p className="font-semibold mb-3"> Created: {created}</p>
        <img
          className="aspect-square w-32 object-cover rounded-full"
          src={picture}
          alt="Profile Picture"
        ></img>
        <h3 className="text-lg p-3">{name}</h3>
        <p className="border border-green-75">{info}</p>
      </div>
    </div>
  );
}



export default Profile;
