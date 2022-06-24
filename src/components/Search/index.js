import { Divider, Input } from 'antd';
import { useState } from 'react';

export function Search({ food }) {
  const [search, setSearch] = useState('');
  {food
    .filter((value) => {
      if (search === '') {
        return value;
      }
      if (value.name.toLowerCase().includes(search.toLowerCase())) {
        return value;
      }
    })}.map((value, key) => {
        return search
    });
  return (
    <div>
      <Divider>Search</Divider>
      <label>Search</label>
      <Input
        name="search"
        type="text"
        onChange={(e) => setSearch(e.target.value)}
      />
    </div>
  );
}
