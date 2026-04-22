import customerEditHandler from './customer-edit-handler';
import customerNewHandler from './customer-new-handler';
import customerSearchHandler from './customer-search-handler';

const customerHandler = [...customerSearchHandler, ...customerNewHandler, ...customerEditHandler];

export default customerHandler;
