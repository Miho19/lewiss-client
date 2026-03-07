import type { WorksheetType } from '../../zod/Worksheet';

type Props = {
  worksheet: WorksheetType;
};

function WorksheetAdditionalProduct(props: Props) {
  const { worksheet } = props;

  return (
    <div className="w-full flex flex-col space-y-3 shadow-md px-3 py-6 border-t border-black/5 md:w-96">
      <div className="w-full flex justify-between">
        <p>Remotes</p>
        <p>3</p>
      </div>
      <div className="w-full flex justify-between">
        <p>USB Charger Cable</p>
        <p>3</p>
      </div>
      <div className="w-full flex justify-between">
        <p>Height Assessment</p>
        <p>selected</p>
      </div>

      <div className="w-full flex justify-between">
        <p>SmartLink Hub</p>
        <p>selected</p>
      </div>
    </div>
  );
}

export default WorksheetAdditionalProduct;
