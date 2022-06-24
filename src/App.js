import foods from './foods.json';
import { useState } from 'react';
import { FoodForm } from './components/FoodForm/index';
import { FoodBox } from './components/FoodBox/index';
import { Row, Divider, Button } from 'antd';
import { Search } from './components/Search/index';
function App() {
  const [food, setFood] = useState(foods);

  return (
    <div className="App">
      <FoodForm food={food} setFood={setFood} />
      <Button>Add New Food </Button>
      <Search food={food} />
      <Divider>Food List</Divider>
      <Row style={{ width: '100%', justifyContent: 'center' }}>
        {food.map((currentElement) => {
          return (
            <div key={currentElement.name}>
              <FoodBox food={currentElement} />
            </div>
          );
        })}
      </Row>
    </div>
  );
}

export default App;
