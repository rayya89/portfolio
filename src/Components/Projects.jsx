import React, {useState} from "react";
import Modal from './Modal'
import Card from './Card'


export default function Projects() {

    const [openModal, setOpenModal] = useState(false);


  return (
    <div className="projects">
        <div className="heading">
            <h2>Projects</h2>
        </div>
        <div className="paragraph">
            <p>Here are the projects I will be making during the Frontend course at Novare Potential.</p>
        </div>
        <div className="content">
            <ul>
                <li><button onClick={() => setOpenModal(true)}><Card project={0} /></button></li>
                {openModal && <Modal setOpenModal={setOpenModal} project={0} />}

                <li><button onClick={() => setOpenModal(true)}><Card project={1} /></button></li>
                {openModal && <Modal setOpenModal={setOpenModal} project={1} />}

                <li><button onClick={() => setOpenModal(true)}><Card project={2} /></button></li>
                {openModal && <Modal setOpenModal={setOpenModal} project={2} />}  

                <li><button onClick={() => setOpenModal(true)}><Card project={3} /></button></li>
                {openModal && <Modal setOpenModal={setOpenModal} project={3} />}  

                <li><button onClick={() => setOpenModal(true)}><Card project={4} /></button></li>
                {openModal && <Modal setOpenModal={setOpenModal} project={4} />}  

                <li><button onClick={() => setOpenModal(true)}><Card project={5} /></button></li>
                {openModal && <Modal setOpenModal={setOpenModal} project={5} />}  

                <li><button onClick={() => setOpenModal(true)}><Card project={6} /></button></li>
                {openModal && <Modal setOpenModal={setOpenModal} project={6} />}  

                <li><button onClick={() => setOpenModal(true)}><Card project={7} /></button></li>
                {openModal && <Modal setOpenModal={setOpenModal} project={7} />}  

            </ul>
        </div>
    </div>
  )
}
