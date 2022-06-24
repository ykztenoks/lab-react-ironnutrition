import { Card, Col, Button } from 'antd';

export function FoodBox({ food }) {
  return (
    <Col>
      <Card title={food.name} style={{ width: 230, height: 300, margin: 10 }}>
        <img src={food.image} alt="foodpic" height={60} />
        <p>Calories: {food.calories}</p>
        <p>
          Servings <strong>{food.servings}</strong>
        </p>
        <p>
          <strong>Total Calories:{food.calories * food.servings}</strong>kcal
        </p>
        <Button type="primary"> Delete </Button>
      </Card>
    </Col>
  );
}
