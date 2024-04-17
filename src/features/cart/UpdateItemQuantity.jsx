import { useDispatch } from 'react-redux';
import Button from '../../ui/Button';
import {
  increaseItemQuantity,
  decreaseItemQuantity,
} from '../../store/cartSlice';

function UpdateItemQuantity({ pizza }) {
  const dispatch = useDispatch();

  return (
    <div className="flex items-center gap-1 md:gap-3">
      <Button
        type="round"
        onClick={() => dispatch(decreaseItemQuantity(pizza))}
      >
        -
      </Button>
      <Button
        type="round"
        onClick={() => dispatch(increaseItemQuantity(pizza))}
      >
        +
      </Button>
    </div>
  );
}

export default UpdateItemQuantity;
