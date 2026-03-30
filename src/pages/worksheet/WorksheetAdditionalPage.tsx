import { useNavigate } from 'react-router';
import ButtonGrey from '../../components/common/ButtonGrey';
import { CircleArrowLeft } from 'lucide-react';
import WorksheetAdditionalProductForm from '../../components/worksheet/WorksheetAdditionalProductForm';

function WorksheetAdditionalPage() {
  const navigator = useNavigate();

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
      <WorksheetAdditionalProductForm />
    </div>
  );
}

export default WorksheetAdditionalPage;
