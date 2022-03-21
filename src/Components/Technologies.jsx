import Technology from "./Technology";
import tech from "../Data/technologies.json";
import "../Styles/Technologies.css";

export default function Technologies() {

  const technologyItems = tech.map((technologyInfo)=> <Technology key={technologyInfo.id} technologyInfo={technologyInfo}/>);

  return (
    <div className="tech" id="Tech">
        <h2>Technologies</h2>
        <div className="layout-3">
          <div className="paragraph">
            <p> Here is the technologies that I already know and also starting to learn. </p>
          </div>
          <div className="content">
            <ul className="icon-grid">
              {technologyItems}
            </ul>
          </div>
      </div>
    </div>
  );
}
