import Button from '../../ui/Button';
import { formatCurrency } from '../../utils/helpers';
import { deleteItem } from '../../store/cartSlice';
import { useDispatch } from 'react-redux';
import UpdateItemQuantity from './UpdateItemQuantity';

function CartItem({ item }) {
  const { name, quantity, totalPrice } = item;
  const dispatch = useDispatch();

  return (
    <li className="py-3 sm:flex sm:items-center sm:justify-between">
      <p className="mb-1 sm:mb-0">
        {quantity}&times; {name}
      </p>
      <div className="flex items-center justify-between sm:gap-6">
        <p className="text-sm font-bold">{formatCurrency(totalPrice)}</p>

        <UpdateItemQuantity pizza={item} />
        <Button type="small" onClick={() => dispatch(deleteItem(item))}>
          Delete
        </Button>
      </div>
    </li>
  );
}

export default CartItem;
