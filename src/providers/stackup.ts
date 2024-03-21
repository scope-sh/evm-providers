function endpoint(key: string): string {
  return `https://api.stackup.sh/v1/node/${key}`;
}

export default endpoint;
