import { CircleArrowLeft } from 'lucide-react';
import ButtonGrey from '../../components/common/ButtonGrey';
import { testWorksheet } from '../../utility/msw/worksheet/worksheet-example';
import { useNavigate } from 'react-router';
import ProductEntryForm from '../../components/product/ProductEntryForm';
import { testProduct1, testProduct3 } from '../../utility/msw/product-example';
import type { ProductEntryTypes } from '../../zod/BaseProduct';
import { useEffect, useState } from 'react';
import type { KineticsCellularProductEntryType } from '../../zod/KineticsCellular';

const worksheet = testWorksheet;
const product = testProduct3;

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
  productType: 'Kinetics Cellular',
  fabric: '001 Translucent Cotton',
  operationType: 'Cord',
  operationSide: 'Left',
  remoteNumber: 0,
  remoteChannel: 0,
  combSize: '10mm',
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

  function resetProductData() {
    setProductData({ ...product });
  }

  function backButtonOnClickHandler() {
    navigator(-1);
  }

  return (
    <div className="w-full h-full flex flex-col space-y-6 items-center">
      <div className="w-full flex md:w-xl md:justify-end">
        <ButtonGrey
          buttonText="Back"
          icon={CircleArrowLeft}
          onClickHandler={backButtonOnClickHandler}
        />
      </div>
      <ProductEntryForm
        product={productData}
        setProduct={setProductData}
        resetProduct={resetProductData}
      />
    </div>
  );
}

export default WorksheetProductPage;
