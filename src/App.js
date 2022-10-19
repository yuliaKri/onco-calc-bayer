import "./App.css"
import {useEffect, useState} from "react"
import logo from "../src/logo-bayer.svg"
import Row from "./Row"

function App() {
  const [date, setDate] = useState("")
  const [psa, setPSA] = useState("")
  const [add, setAdd] = useState(false)
  const [txt, setTxt] = useState(false)
  const [userData, setUserData] = useState([])

  function handleCalculate() {
    setTxt(true);
  }

  function handleClear() {
    setAdd(false)
    setDate('')
    setPSA('')
    setUserData([])
  }

  function handleAdd() {
    setAdd(true)
    const newElementOfUserData = { id: Math.random(), date: date, psa: psa }
    setUserData([...userData, newElementOfUserData])
    setDate('')
    setPSA('')
  }

  const removeItem = (id) => {
    const newArr = userData.filter((el) => el.id !== id)
    setUserData(newArr)
  };

    useEffect(() => {
      //  inputRef.current.focus();
    }, [userData]);

  return (
    <div className="App">
      <div style={{ display: "flex", justifyContent: "center" }}>
        <img src={logo} alt="BAYER" style={{ width: "40px" }} />
        <p>Калькулятор для расчёта времени удвоения PSA</p>
      </div>
      <p>
        Пожалуйста, введите два псоледовательных момента времени, в которые
        определялись показатели ПСА, и их значения:
      </p>
      <p className="red-line" />
      <div style={{ display: "flex", justifyContent: "center" }}>
        <input
          type="text"
          value={date}
          onChange={(v) => setDate(v.target.value)}
          placeholder="DATE"
        />
        <input
          type="text"
          value={psa}
          onChange={(v) => setPSA(v.target.value)}
          placeholder="PSA     > 0.1               ng/ml"
        />
        <button onClick={() => handleAdd()} className="btn">
          ADD
        </button>
      </div>
      <div>
        {add && (
          <div>
            {userData[0]?.date!=='' && userData.map((item) => (
              <Row item={item} key={item.id} removeItem={removeItem} />
            ))}
          </div>
        )}
      </div>
      <button
        onClick={() => handleCalculate()}
        style={{ backgroundColor: "lightblue" }}
        className="btn"
      >
        Calculate
      </button>
      <button onClick={() => handleClear()} className="btn">
        Clear
      </button>
      <p className="black-line" />
      {txt && <p>Here will be the result based on formula</p>}
    </div>
  );
}

export default App;
