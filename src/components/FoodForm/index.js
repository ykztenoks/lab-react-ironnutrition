import { useState } from 'react';
import { Divider, Input } from 'antd';

export function FoodForm({ food, setFood }) {
  //useState da form
  const [form, setForm] = useState({
    name: '',
    calories: '',
    image: '',
    servings: '',
  });
  //função que atualiza a form
  function handleChange(event) {
    setForm({ ...form, [event.target.name]: event.target.value });
    console.log([event.target.name], event.target.value);
  }

  //função que salva o form
  function handleSubmit(event) {
    event.preventDefault();
    setFood([...food, form]);
    setForm({
      name: '',
      calories: '',
      image: '',
      servings: '',
    });
  }

  return (
    <form>
      <Divider>Add Food Entry</Divider>
      <label>Name:</label>
      <Input name="name" onChange={handleChange} value={form.name} />
      <label>Image:</label>
      <Input name="image" onChange={handleChange} value={form.image} />
      <label>Calories:</label>
      <Input name="calories" onChange={handleChange} value={form.calories} />
      <label>Servings:</label>
      <Input name="servings" onChange={handleChange} value={form.serving} />
      <button onClick={handleSubmit}>Salvar</button>
    </form>
  );
}
