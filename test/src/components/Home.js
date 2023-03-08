import React, { useState, useEffect } from "react";
import operationButton from "../img/addButton.png"
import removeButton from "../img/remove.png"
let nextId = 0;
let nextOId = 0;
const Home = () => {
  const [styles, setStyles] = useState("false");
  const [containerStyle, setContainerStyle] = useState("false");
  const [newProject, setNewProject] = useState('');
  const [oprs, setOprs] = useState("")
  const [tools, setTools] = useState("")
  const [projName, setProjName] = useState("")
  const [operation, setOperation] = useState([
    {
      opId: 1,
      operation: "Operation 1",
      tool: "Tool D-2"
    },
    {
      opId: 2,
      operation: "Operation 1",
      tool: "Tool D-2"
    }
  ])
  const [projects, setProjects] = useState([
    {
      id: 1,
      projectName: "Project 1",
    },
    {
      id: 2,
      projectName: "Project 2",
    },
    {
      id: 3,
      projectName: "Project 3",
    },
    {
      id: 4,
      projectName: "Project 4",
    }
  ]);

  //for toggling pop-up
  function createNewProject() {
    setStyles(!styles);
  }

  //add the project
  function addNewProject() {
    setNewProject('');
    projects.push({
      id: ++nextId,
      projectName: newProject,
    });
    setStyles(!styles);
  }

  function OpenToggle() {
    setContainerStyle(!containerStyle);
  }

  //add the operation
  function AddNewOperation() {
    setOprs('');
    setTools('');
    operation.push({
      opId: ++nextOId,
      operation: oprs,
      tool: tools
    })
    console.log(operation);
  }
  // delete the operation
  const deleteCurrentItem = (index) => {
    const itemToDelete = operation.filter((elem) => {
      return index !== elem.opId;
    });
    setOperation(itemToDelete);
  }


  // function showThisProjects(id) {
  //   const itemOfId = projects.find((proj) => {
  //     return proj.id == id;
  //   });
  //   console.log("ajay", itemOfId);
  //   setProjName(itemOfId);
  // }\

  return (
    <div className="container">
      <div className="navbar">
        <div className="navbar-heading">
          <p>Account</p>
          <img src="https://w7.pngwing.com/pngs/81/570/png-transparent-profile-logo-computer-icons-user-user-blue-heroes-logo-thumbnail.png" alt="profile-img" />
        </div>
      </div>
      <div className="main-container">
        <div className="left-container">
          <div className="projectinfo-container">
            <h4>ReactJs Test</h4>
            <div className="projectName">
              {projects &&
                projects.map((project) => {
                  return (
                    <button key={project.id}>{project.projectName}</button>
                  )
                })
              }
            </div>
            <div className="createButton">
              <button type="button" onClick={createNewProject}>Create new</button>
            </div>
          </div>
        </div>
        {/* pop-up */}
        <div className={styles ? "hide-popup" : "show-popup"}>
          <div className="newproject-popup">
            <p>Create new Project</p>
            <input onChange={(e) => { setNewProject(e.target.value) }} value={newProject} type="text" placeholder="Enter project name" />

            <button onClick={addNewProject} type="button">Create</button>
          </div>
        </div>

        {/* operation container */}
        <div className="middle-container">
          <div className="container-heading"><button className="Project-heading">Project 1</button></div>
          {operation && operation.map((operats) => {
            return (
              <div key={operats.opId}>
                <div className="project-list">
                  <button className="operation-todo">{operats.operation}</button>
                  <button className="tool-todo">{operats.tool}</button>
                  <button onClick={() => deleteCurrentItem(operats.opId)}>X</button>
                </div>
              </div>
            )
          })}
          <div onClick={OpenToggle} className="operationButton">
            <img src={operationButton} alt="add-operation-button" />
            <p>New Operation</p>
          </div>
        </div>



        {/* right-container */}
        <div className={containerStyle ? "slide-hide" : "slide-show"}>
          <div className="operation-section">
            <img onClick={OpenToggle} src={removeButton} alt="remove-button" className="remove-section" />
            <p className="operation-heading">Add new Operation</p>
            <input onChange={(e) => { setOprs(e.target.value) }} value={oprs} className="operation-input-field" type="text" placeholder="Enter name" />
            <div>
              <select onChange={(e) => { setTools(e.target.value) }} value={tools} className="operation-tool">
                <option value="">Select Tool</option>
                <option value="tool-d-2">Tool D-2</option>
                <option value="tool-d-4">Tool D-4</option>
                <option value="tool-d-6">Tool D-6</option>
                <option value="tool-d-8">Tool D-8</option>
                <option value="tool-d-10">Tool D-10</option>
              </select>
            </div>
            <button onClick={AddNewOperation} className="operation-addButton">Add</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home;