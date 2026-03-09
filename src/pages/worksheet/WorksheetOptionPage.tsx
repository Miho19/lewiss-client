import { CircleArrowLeft } from 'lucide-react';
import ButtonGrey from '../../components/common/ButtonGrey';
import { useNavigate } from 'react-router';
import WorksheetOptionForm from '../../components/worksheet/WorksheetOptionForm';

function WorksheetOptionPage() {
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
      <WorksheetOptionForm />
    </div>
  );
}

export default WorksheetOptionPage;
