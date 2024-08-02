import { Title } from "./Title"

const PersonForm = ({nameAction,phoneAction,addAction,nameState,phoneState})=>{
  return(
    <div id="PersonForm">
      <Title text={'Add a new'} />
      <form className="personForm" >
        <div>
          <input className="input_field" placeholder="Name:" onChange={nameAction} value={nameState}/>
        </div>
        <div>
          <input className="input_field" placeholder="Phone:" onChange={phoneAction} value={phoneState} maxLength='10'/>
        </div>
        <div>
          <button className="btn" onClick={addAction} type="submit">Add</button>
        </div>
      </form>
    </div>
  )
}

export default PersonForm