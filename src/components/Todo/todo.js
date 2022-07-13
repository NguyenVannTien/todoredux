import { Row, Tag, Checkbox } from 'antd';
import { useState } from 'react';
import {useDispatch} from 'react-redux';
import { handleToggleTodo } from '../../redux/actions/action';


const priorityColorMapping = {
  High: 'red',
  Medium: 'blue',
  Low: 'gray',
};

export default function Todo({ name, prioriry, completed, id }) {
  const [checked, setChecked] = useState(completed);

  const dispatch = useDispatch()

  const handleCheckedTodo =()=>{
    setChecked(!checked)
    dispatch(handleToggleTodo(id))
  }

  return (
    <Row
      justify='center' 
      align='center'
      style={{
        margin:'15px 0',
        ...(checked ? { opacity: 0.5, textDecoration: 'line-through' } : {}),
      }}
    >
      <Checkbox onChange={handleCheckedTodo}>
        {name}
      </Checkbox>
      <Tag color={priorityColorMapping[prioriry]} style={{ margin: 0 }}>
        {prioriry}
      </Tag>
    </Row>
  );
}