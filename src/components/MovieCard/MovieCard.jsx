import "./MovieCard.css";

export const MovieCard = () => {
  return (
    <>
      <div className="card">
        <div className="card-container">
          <div className="card-img-container">
            <img
              className="card-img"
              src="../src/assets/MI.jpg"
              alt="movie-card"
            />
          </div>
          <div className="card-details">
            <div>
              <span className="title">Mission Impossible</span>
            </div>

            <div>
              <span className="genre">Genre: Action, Crime</span>
            </div>
            <div className="ratings">
              <span>Rating: 4.8</span>
              <span>142 mins</span>
            </div>
          </div>
        </div>

        <div className="card-container">
          <div className="card-img-container">
            <img
              className="card-img"
              src="../src/assets/Transformers.jpg"
              alt="movie-card"
            />
          </div>
          <div className="card-details">
            <div>
              <span className="title">Transformers</span>
            </div>

            <div>
              <span className="genre">Genre: Action, Sci-Fi </span>
            </div>
            <div className="ratings">
              <span>Rating: 4.5</span>
              <span>162 mins</span>
            </div>
          </div>
        </div>

        <div className="card-container">
          <div className="card-img-container">
            <img
              className="card-img"
              src="../src/assets/Avatar.jpg"
              alt="movie-card"
            />
          </div>
          <div className="card-details">
            <div>
              <span className="title">Avatar</span>
            </div>

            <div>
              <span className="genre">Genre: Action, Romance, Nature</span>
            </div>
            <div className="ratings">
              <span>Rating: 4.8</span>
              <span>183 mins</span>
            </div>
          </div>
        </div>

        <div className="card-container">
          <div className="card-img-container">
            <img
              className="card-img"
              src="../src/assets/Spiderman.jpg"
              alt="movie-card"
            />
          </div>
          <div className="card-details">
            <div>
              <span className="title">Spiderman</span>
            </div>

            <div>
              <span className="genre">Genre: Action, Sci-Fi, Crime</span>
            </div>
            <div className="ratings">
              <span>Rating: 4.8</span>
              <span>162 mins</span>
            </div>
          </div>
        </div>


        <div className="card-container">
          <div className="card-img-container">
            <img
              className="card-img"
              src="../src/assets/Creed.jpg"
              alt="movie-card"
            />
          </div>
          <div className="card-details">
            <div>
              <span className="title">Creed</span>
            </div>

            <div>
              <span className="genre">Genre: Action, Crime</span>
            </div>
            <div className="ratings">
              <span>Rating: 4.2</span>
              <span>172 mins</span>
            </div>
          </div>
        </div>


        <div className="card-container">
          <div className="card-img-container">
            <img
              className="card-img"
              src="../src/assets/FightNight.jpg"
              alt="movie-card"
            />
          </div>
          <div className="card-details">
            <div>
              <span className="title">Fight Night</span>
            </div>

            <div>
              <span className="genre">Genre: Action, Adventure</span>
            </div>
            <div className="ratings">
              <span>Rating: 4.8</span>
              <span>122 mins</span>
            </div>
          </div>
        </div>


        <div className="card-container">
          <div className="card-img-container">
            <img
              className="card-img"
              src="../src/assets/BlackPanther.jpg"
              alt="movie-card"
            />
          </div>
          <div className="card-details">
            <div>
              <span className="title">Black Panther</span>
            </div>

            <div>
              <span className="genre">Genre: Action, Adventure, Crime</span>
            </div>
            <div className="ratings">
              <span>Rating: 4.8</span>
              <span>153 mins</span>
            </div>
          </div>
        </div>


        <div className="card-container">
          <div className="card-img-container">
            <img
              className="card-img"
              src="../src/assets/Barbie.jpg"
              alt="movie-card"
            />
          </div>
          <div className="card-details">
            <div>
              <span className="title">Barbie</span>
            </div>

            <div>
              <span className="genre">Genre: Fanatasy, Lifestyle</span>
            </div>
            <div className="ratings">
              <span>Rating: 4.8</span>
              <span>147 mins</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
