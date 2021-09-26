import React, { useState } from 'react'

const Valuta = ({selected, setSelected}) => {
    const [locale, setLocale] = useState('USD');

  const handleChange = (e) => {
    setLocale(e.target.value);
  };
    return (
        <>
      <select className="valuta" onChange={handleChange} defaultValue={locale}>
        {['USD','AZN', 'EURO'].map((x) => (
          <option key={x}>{x}</option>
        ))}
      </select>
    </>
    )
}

export default Valuta