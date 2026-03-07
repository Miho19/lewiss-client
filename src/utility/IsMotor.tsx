const motorisedOperations = ['Lithium-ion'];

function isOperationMotorised(operation: string): boolean {
  return motorisedOperations.includes(operation);
}

export default isOperationMotorised;
