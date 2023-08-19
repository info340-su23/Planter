import '../index.css'

export default function Cards() {
  return (
    <div>

      <div className="hp-cards">
        {/* <!-- Card 1. Find --> */}
        <div className="hp-card-find">
          <div className="hp-card-container">
            <div className="hp-card-title"> 01. find </div>
            <div className="hp-card-body"> Choose suitable plants from our database that are a perfect match for you</div>
            <div className="hp-card-image"><img src="img/plant.png" alt="A green plant in a yellow pot" /></div>
          </div>
        </div>

        {/* <!-- Card 2. Plan --> */}
        <div className="hp-card-plan">
          <div className="hp-card-container">
            <div className="hp-card-title"> 02. plan </div>
            <div className="hp-card-body"> Professionally curated watering schedules, so you don’t have to</div>
            <div className="hp-card-image"><img src="/img/plan-img.png" alt="A woman kneeling down to plan something in the ground. There is a man on her right that is extending a red watering can to her" /></div>
          </div>
        </div>

        {/* <!-- Card 3. Team up --> */}
        <div className="hp-card-team">
          <div className="hp-card-container">
            <div className="hp-card-title"> 03. team up </div>
            <div className="hp-card-body"> Chat with your community about sustainability practices and plant tips!</div>
            <div className="hp-card-image"><img src="/img/teamup.png" alt="A group of people around a globe in the middle of them" /></div>
          </div>
        </div>
      </div>

    </div>
  );
}