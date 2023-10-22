import Button from '../../Widget Components/Button/Button.tsx';
import DropdownSelect from '../../Widget Components/Dropdown Select/DropdownSelect.tsx';
import PropertyLabel from '../../Widget Components/Property Label/PropertyDisplay.tsx';
import TextField from '../../Widget Components/Text Field/TextField.tsx';
import InputField from '../../Widget Components/Input Field/InputField.tsx';
import './Analysis.css'
import DropdownOption from '../../Widget Components/Dropdown Option/DropdownOption.tsx';


function Analysis() {
  return (
    <div className="workspace" >
      {/* <DropdownSelect optionList={["Dropdown 1", "Dropdown 2", "Dropdown 3", "Dropdown 4"]}/>
      <PropertyLabel property={'Property'} value={'Value'}/>
      <InputField handleInputChange={(e: any)=>{console.log(e.target.value)}} placeholderText="Input Field"/>
      <Button className="Hello" text="Button" handleClick={()=>{console.log('hello')}}/>
      <TextField text="Text Field"/> */}
      
      
      
      <div className="graph-properties panel">
        <TextField text="Graph Properties"/>
        <PropertyLabel property="Density" value="5/8"/>
        <PropertyLabel property="Isolated Nodes" value="0"/>
        <PropertyLabel property="Self-Loop" value="0"/>
        <PropertyLabel property="Regions" value="3"/>
        <PropertyLabel property="Planar" value="True"/>
        <PropertyLabel property="Eulerian" value="False"/>
        <PropertyLabel property="Hamiltonian" value="True"/>
      </div>
      <DropdownOption title="Shortest Path Algorithm" optionList={["Dropdown 1", "Dropdown 2", "Dropdown 3", "Dropdown 4"]}/>
    </div>
  )
}
  
export default Analysis;