import Form from "./Form";
import "./card.css";
import CardPic from "../assets/images/illustration-dashboard.png";

function Card() {
  return (
    <>
      <main>
        <div className="card-wrapper">
          <div className="card-body">
            <h1 className="title">
              We are launching <strong className="text-accent">soon!</strong>
            </h1>
            <p className="card-text">Subscribe and get notified</p>

            <Form />
          </div>

          <div className="card-img">
            <img src={CardPic} alt="ping is launching soon." />
          </div>
        </div>
      </main>
    </>
  );
}

export default Card;
