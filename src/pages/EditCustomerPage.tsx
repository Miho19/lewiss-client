import { CircleArrowLeft } from 'lucide-react';
import ButtonGrey from '../components/common/ButtonGrey';
import { useNavigate, useParams } from 'react-router';

type EditCustomerPageParams = {
  customerId: string;
};

function EditCustomerPage() {
  const params = useParams<EditCustomerPageParams>();
  const navigator = useNavigate();

  function backButtonOnClickHandler() {
    navigator(-1);
  }

  return (
    <div className="w-full h-full flex flex-col items-center space-y-10 md:items-center md:justify-center">
      <div className="flex w-full justify-end">
        <ButtonGrey
          buttonText="Back"
          icon={CircleArrowLeft}
          onClickHandler={backButtonOnClickHandler}
        />
      </div>
    </div>
  );
}

export default EditCustomerPage;
