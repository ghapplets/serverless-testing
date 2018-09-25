module.exports = async function(context) {
  let body = 'something new...';
  context.request.on('data', chunk => {
      body += chunk.toString(); // convert Buffer to string
  });
  context.request.on('end', () => {
      console.log(body);
  });
  return {
      status: 200,
      body: context.request.body
  };
}
