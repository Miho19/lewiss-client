import { useParams } from 'react-router';

type WorksheetPageParams = {
  worksheetId: string;
};

function WorksheetPage() {
  const params = useParams<WorksheetPageParams>();

  return <div>{params.worksheetId}</div>;
}

export default WorksheetPage;
