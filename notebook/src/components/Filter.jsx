import { Title } from "./Title"

const Filter = ({handle})=>{
  return(
    <div id="search" >
      <Title text={'Search:'} /> <input className="input_field" onChange={handle}/>
    </div>
  )
}

export default Filter