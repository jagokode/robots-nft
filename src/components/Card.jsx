const Card = ({ id, name, email }) => {
  return (
    <div className="tc grow bg-light-green br3 pa3 ma2 dib bw2 shadow-5">
      <img src={`https://robohash.org/${id}?size=200x200`} alt="robo" />
      <div>
        <h2 className="f5">{name}</h2>
        <p className="f7">{email}</p>
      </div>
    </div>
  );
};

export default Card;
