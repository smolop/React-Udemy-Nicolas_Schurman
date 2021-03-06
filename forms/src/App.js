import { useState } from "react";

const App = () => {
  const [value, setValue] = useState({
    normal: "",
    texto: "",
    select: "",
    check: false,
    estado: 'feliz',
  });
  const handleChange = ({ target }) => {
    setValue((state) => ({
      ...state,
      [target.name]: target.type === "checkbox" ? target.checked : target.value,
    }));
  };
  console.log(value);
  return (
    <div>
      {value.length < 5 ? <span>longitud minima de 5</span> : null}
      <input
        type="text"
        name="normal"
        value={value.normal}
        onChange={handleChange}
      />
      <textarea name="texto" onChange={handleChange} value={value.texto} />

      <select value={value.select} name="select" onChange={handleChange}>
        <option value="">-- Select --</option>
        <option value="chanchofeliz">Chancho feliz</option>
        <option value="chanchitofeliz">Chanchito feliz</option>
        <option value="chanchitotriste">Chanchito triste</option>
      </select>

      <input
        type="checkbox"
        name="check"
        onChange={handleChange}
        checked={value.check}
      />

      <div>
        <label>Chancho</label>
        <input
          onChange={handleChange}
          type="radio"
          value="feliz"
          name="estado"
          checked={value.estado === "feliz"}
        />
        Feliz
        <input
          onChange={handleChange}
          type="radio"
          value="triste"
          name="estado"
          checked={value.estado === "triste"}
        />
        Triste
        <input
          onChange={handleChange}
          type="radio"
          value="feliztristongo"
          name="estado"
          checked={value.estado === "feliztristongo"}
        />
        Feliztristongo
      </div>
    </div>
  );
};

export default App;
