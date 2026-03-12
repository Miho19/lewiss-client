import { CircleArrowLeft } from 'lucide-react';
import ButtonGrey from '../../components/common/ButtonGrey';
import { testWorksheet } from '../../utility/msw/worksheet-example';
import { useNavigate } from 'react-router';
import ProductEntryForm from '../../components/product/ProductEntryForm';
import { testProduct1 } from '../../utility/msw/product-example';
import type { ProductEntryTypes } from '../../zod/BaseProduct';
import { useEffect, useState } from 'react';
import type { KineticsCellularProductEntryType } from '../../zod/KineticsCellular';

const worksheet = testWorksheet;
const product = testProduct1;

const initialData: KineticsCellularProductEntryType = {
  headrailColour: 'White',
  sideChannelColour: 'None',
  worksheetId: '',
  location: '',
  width: 0,
  height: 0,
  reveal: 0,
  installHeight: 0,
  fitType: 'Inside',
  fixingTo: 'wood',
  productType: 'Kinetics Roller',
  fabric: '',
  operationType: '',
  operationSide: 'Left',
  remoteNumber: 0,
  remoteChannel: 0,
  id: '',
  price: 0,
};

function WorksheetProductPage() {
  const navigator = useNavigate();
  const [productData, setProductData] = useState<ProductEntryTypes>(initialData);

  useEffect(() => {
    setProductData({
      ...product,
    });
  }, []);

  function backButtonOnClickHandler() {
    navigator(-1);
  }

  return (
    <div className="w-full h-full flex flex-col space-y-6 items-center">
      <div className="flex w-full justify-end">
        <ButtonGrey
          buttonText="Back"
          icon={CircleArrowLeft}
          onClickHandler={backButtonOnClickHandler}
        />
      </div>
      <ProductEntryForm product={productData} setProduct={setProductData} />
    </div>
  );
}

export default WorksheetProductPage;
