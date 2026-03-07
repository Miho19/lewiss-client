import { useNavigate, useParams } from 'react-router';
import ButtonGrey from '../components/common/ButtonGrey';
import { CircleArrowLeft } from 'lucide-react';
import { useEffect } from 'react';
import useCustomerSelect from '../hooks/useCustomerSelect';
import { testWorksheet } from '../utility/msw/worksheet-example';
import WorksheetPricingInformation from '../components/worksheet/WorksheetPricingInformation';
import ProductList from '../components/product/ProductList';
import WorksheetOption from '../components/worksheet/WorksheetOption';
import WorksheetAdditionalProduct from '../components/worksheet/WorksheetAdditionalProduct';

type WorksheetPageParams = {
  worksheetId: string;
};

function WorksheetPage() {
  const params = useParams<WorksheetPageParams>();
  const navigator = useNavigate();
  const selectedCustomer = useCustomerSelect();

  useEffect(() => {
    if (typeof selectedCustomer.customer === 'undefined') {
      navigator('/customer');
    }
  }, []);

  function backButtonOnClickHandler() {
    navigator('/worksheet');
  }
  // use react query to get worksheet from backend..
  // not really sure what I want to do with customer bubble yet
  const worksheet = testWorksheet;

  return (
    <div className="w-full h-full flex flex-col space-y-6">
      <div className="flex w-full justify-end">
        <ButtonGrey
          buttonText="Back"
          icon={CircleArrowLeft}
          onClickHandler={backButtonOnClickHandler}
        />
      </div>
      <div className="w-full flex flex-col space-y-6 lg:space-y-0 lg:flex-row lg:justify-evenly">
        <WorksheetPricingInformation worksheet={worksheet} />
        <WorksheetOption worksheet={worksheet} />
        <WorksheetAdditionalProduct worksheet={worksheet} />
      </div>

      <ProductList worksheet={worksheet} />
    </div>
  );
}

export default WorksheetPage;
