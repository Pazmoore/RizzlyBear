import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Homepage = () => {
  const toRotate = ["RizzlyBear.", "My Love.", "My Baby.", "Mon Amour."];
  const [text, setText] = useState("");
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [delta, setDelta] = useState(300 - Math.random() * 100);
  const period = 2000;

  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta);

    return () => {
      clearInterval(ticker);
    };
  }, [text]);

  const tick = () => {
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];
    let updatedText = isDeleting
      ? fullText.substring(0, text.length - 1)
      : fullText.substring(0, text.length + 1);

    setText(updatedText);

    if (isDeleting) {
      setDelta((prevDelta) => prevDelta / 2);
    }

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setDelta(period);
    } else if (isDeleting && updatedText === "") {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setDelta(500);
    }
  };

  return (
    <div className="back">
      <div className="title">
        <h1>
          HAPPY VALENTINES DAY <span>{text}</span>
        </h1>
        <img
          className="gif"
          src="https://media.tenor.com/xR_ZvmLGnr4AAAAi/girl-yellow.gif"
          alt="gif"
        />
        <h2 className="btn">I LOVE YOU </h2>
      </div>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/us" className="click">
                CLICK ME!
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Homepage;
