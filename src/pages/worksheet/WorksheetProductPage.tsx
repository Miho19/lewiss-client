import { CircleArrowLeft } from 'lucide-react';
import ButtonGrey from '../../components/common/ButtonGrey';
import { testWorksheet } from '../../utility/msw/worksheet-example';
import { useNavigate } from 'react-router';
import ProductEntryForm from '../../components/product/ProductEntryForm';
import { testProduct1, testWorksheet1ProductList } from '../../utility/msw/product-example';

function WorksheetProductPage() {
  const navigator = useNavigate();

  function backButtonOnClickHandler() {
    navigator(-1);
  }

  const worksheet = testWorksheet;
  const product = testProduct1;

  return (
    <div className="w-full h-full flex flex-col space-y-6">
      <div className="flex w-full justify-end">
        <ButtonGrey
          buttonText="Back"
          icon={CircleArrowLeft}
          onClickHandler={backButtonOnClickHandler}
        />
      </div>
      <ProductEntryForm />
    </div>
  );
}

export default WorksheetProductPage;
