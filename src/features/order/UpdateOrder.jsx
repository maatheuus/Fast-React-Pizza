import { useFetcher } from 'react-router-dom';
import Button from '../../ui/Button';
import { useEffect } from 'react';
import { getOrder, updateOrder } from '../../services/apiRestaurant';

function UpdateOrder({ order }) {
  const fetcher = useFetcher();

  //   useEffect(() => {
  //     if (!fetcher.data && fetcher.state === 'idle') fetcher.formData();
  //   }, [fetcher]);

  //2RGYU0
  return (
    <fetcher.Form method="PATCH" className="text-right">
      <Button type="primary">Make priotity</Button>
    </fetcher.Form>
  );
}

export default UpdateOrder;

export async function action({ params }) {
  const data = { priority: true };
  await updateOrder(params.orderId, data);
  return null;
}
