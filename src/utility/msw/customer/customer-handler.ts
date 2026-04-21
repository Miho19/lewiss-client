import customerNewHandler from './customer-new-handler';
import customerSearchHandler from './customer-search-handler';

const customerHandler = [...customerSearchHandler, ...customerNewHandler];

export default customerHandler;
