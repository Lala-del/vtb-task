import React, { useState } from 'react'

const Language = ({selected, setSelected}) => {
    const [locale, setLocale] = useState('ENG');

  const handleChange = (e) => {
    setLocale(e.target.value);
  };
    return (
        <>
      <select onChange={handleChange} defaultValue={locale}>
        {['ENG','AZ', 'RU'].map((x) => (
          <option key={x}>{x}</option>
        ))}
      </select>
    </>
    )
}

export default Language
