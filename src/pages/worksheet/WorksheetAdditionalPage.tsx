import { useNavigate } from 'react-router';
import ButtonGrey from '../../components/common/ButtonGrey';
import { CircleArrowLeft } from 'lucide-react';

function WorksheetAdditionalPage() {
  const navigator = useNavigate();

  function backButtonOnClickHandler() {
    navigator(-1);
  }

  return (
    <div className="w-full h-full flex flex-col space-y-6">
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

export default WorksheetAdditionalPage;
