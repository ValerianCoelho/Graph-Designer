import styled from 'styled-components';

const StyledInputField = styled.input`
    background-color: #0E0E1C;
    outline: none;
    border: 1px solid #6A6A9F;
    color: #6A6A9F;
    border-radius: 5px;
    width: 100%;
    font-family: 'Open Sans', Arial, Helvetica, sans-serif;
    padding: 5px;
    &::placeholder{
    color: #6A6A9F;
    }
`

function InputField(props: any) {
  return (
    <StyledInputField onChange={(e)=>props.onChange(e.target.value)} type="text" placeholder={props.placeholderText}/>
  )
}
export default InputField;