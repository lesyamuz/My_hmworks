import { useState } from "react"

export default function ShowTemperature(props){
  const [format, setFormat] = useState('C')
  const [temp, setTemp] = useState('C')
  const changeHandler = (e) => {
    console.log(e);
    if (e.target.checked) {
      setTemp(toFarengeyt(props.temp))
      setFormat('F')
    } else {
      setTemp(props.temp)
      setFormat('C')
    }
  }
  const toFarengeyt = () => 9/5*temp+32

  return <div>
    temperature: {temp} &deg;{format}
    <br />
    <input type="checkbox" checked={format === 'F'} onChange={changeHandler}></input>
  </div>
}