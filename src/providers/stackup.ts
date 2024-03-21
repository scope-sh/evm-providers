function endpoint(key: string): string {
  return `https://api.stackup.sh/v1/node/${key}`;
}

function paymaster(key: string): string {
  return `https://api.stackup.sh/v1/paymaster/${key}`;
}

export default endpoint;
export { paymaster };
