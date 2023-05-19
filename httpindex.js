const http = require("http");

const PORT = 3000;

//using the createServer function we can actually create basic http server using http module
//this function return a server object and take scallback as an argument.

const server = http.createServer(function listener(request, response) {
  /**
   * request -> we will be able to details of incoming http request
   * response -> we will be to configure what response we need to send
   *    for an incoming request
   */

  if (request.url === "/home") {
    console.log(request.method);
    // response.write("first response");
    // response.write("second response");
    const data = {
      name: "John",
      age: 34,
      hobby: {
        reading: true,
        gaming: false,
        sport: "baseball",
      },
      class: ["JavaScript", "HTML", "CSS"],
    };
    // response.end(JSON.stringify(data))
    // response.write("<html><body> <h1>Home Page</h1></body></html>");
    console.log(request.body)
    response.end();
  }

//   console.log("incoming request details :", request);
//   console.log("response details :", response);
  //this callback is kind of  listener function that going to collect
  //every http request tha we will make to our server

  console.log("request recieve");
});

server.listen(PORT, () => {
  //once we successfully boot up on the given port , this callback will be excuted
  console.log(`server running on port http://localhost:${PORT} `);
});
