import React from 'react';
import i18n from '../../i18n';

const onSelect = e => {
  const lang = e.target.value;
  i18n.changeLanguage(lang);
};

function ChangeLanguageSelect() {
  return (
    <select
      style={{ border: 'none', background: 'transparent', outline: 'none' }}
      onChange={onSelect}
    >
      <option value="en">EN</option>
      <option value="ru">RU</option>
      <option value="by">BE</option>
    </select>
  );
}

export default ChangeLanguageSelect;
