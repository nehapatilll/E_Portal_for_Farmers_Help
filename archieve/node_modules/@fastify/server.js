const app = require("fastify")({ logger: true });
const axios = require("axios");

app.register(require("@fastify/cors"), {
  origin: true,
});

app.get("/grains", async (request, reply) => {
  try {
    const url =
      "https://commodities-api.com/api/latest?access_key=05v8mvro671l47m492149wz2i93lqtqx3s49acdian1mbmv0389pfyp5hl5n";

    const { data } = await axios.get(url);

    reply.status(200).send(data);
  } catch (error) {
    reply.status(500);
  }
});

const port = 6942;

app.listen({ port }, () => {
  console.log(`[server]: app ready at localhost:${port}`);
});
