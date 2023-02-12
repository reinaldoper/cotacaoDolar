const ApiCotacao = async () => {
  const request = await fetch('https://economia.awesomeapi.com.br/json/all');
  const response = await request.json();
  delete response.USDT;
  return response;
}

export default ApiCotacao;