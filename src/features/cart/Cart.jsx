import { useDispatch, useSelector } from 'react-redux';
import { deleteAllItem } from '../../store/cartSlice';

import CartItem from './CartItem';
import Button from '../../ui/Button';
import EmptyCart from './EmptyCart';
import LinkButton from '../../ui/LinkButton';

function Cart() {
  const userName = useSelector((state) => state.user.userName);
  const cart = useSelector((state) => state.cart.items);

  const isEmpty = cart.length === 0;
  const dispatch = useDispatch();

  if (isEmpty) return <EmptyCart />;

  return (
    <div className="px-4 py-3">
      <LinkButton to="/menu">&larr; Back to menu</LinkButton>

      <h2 className="mt-36 text-xl font-semibold">Your cart, {userName}</h2>

      <ul className="mt-3 divide-y divide-stone-200 border-b">
        {cart.map((item) => (
          <CartItem key={item.id} item={item} />
        ))}
      </ul>

      <div className="mt-6 space-x-2">
        <Button to="/order/new" type="primary">
          Order pizzas
        </Button>

        <Button onClick={() => dispatch(deleteAllItem(cart))} type="secondary">
          Clear cart
        </Button>
      </div>
    </div>
  );
}

export default Cart;
