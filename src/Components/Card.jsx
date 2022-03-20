import "../Styles/Card.css";
import {useState} from "react";
import Modal from './Modal';
import ModalCard from "./ModalCard";

export default function Card({ projectInfo }) {

  const {picture, title, active} = projectInfo;
  const [modal, setModal] = useState(null);

  return (
    <div>
    <button className="card" onClick={() => setModal(<ModalCard setModal={setModal} projectInfo={projectInfo}/>)} disabled={!active}>
      <header>
        {!active && <span className="comming-soon">Comming soon</span>}
        <img src={picture} alt="what is the project about" />
      </header>
      <h3>{title}</h3>
    </button>
    {modal && <Modal modalState={[modal, setModal]} />}
    </div>
  );
}
