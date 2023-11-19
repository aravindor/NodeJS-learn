const http = require("http");

const server = http.createServer((req, res) => {
  if (req.url == "/") {
    res.setHeader("Content-Type", "text/html");
    res.write("<html>");
    res.write("<head><title>Hello node</title></head>");
    res.write(
      '<body><form action="/message" method="POST"><input name="name" type="text"></input> <button type="submit">Submit name</button></form></body>'
    );
    res.write("</html>");
    return res.end();
  }

  if (req.url == "/message" && req.method == "POST") {
    const body = [];
    req.on("data", (data) => {
      body.push(data);
    });
    req.on("end", () => {
      const parsedBody = Buffer.concat(body).toString();
      console.log(parsedBody);
    });
    res.statusCode = 302;
    res.setHeader("Location", "/");
    return res.end();
    //
  }
});

server.listen(3301);
