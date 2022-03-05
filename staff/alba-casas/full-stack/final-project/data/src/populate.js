const { connect, disconnect } = require("mongoose");
const { User, Job } = require("./models");

connect("mongodb://localhost:27017/demo-db")
  .then(() => console.log("connected"))
  .then(() => Promise.all([User.deleteMany(), Job.deleteMany()]))

  .then(() => {
    const pepito = new User({
      name: "Pepito Grillo",
      email: "pepitogrillo@gmail.com",
      password: "123123123",
      location: "Barcelona",
      phone: "444 333 222",
      role: "candidate",
    });
    const peter = new User({
      name: "Peter Pan",
      email: "peterpan@gmail.com",
      password: "123123123",
      location: "Barcelona",
      phone: "444 555 666",
      role: "candidate",
    });
    const glovo = new User({
      name: "Glovo SL",
      email: "recruitment@glovo.com",
      password: "123123123",
      location: "Barcelona",
      phone: "444 555 666",
      role: "company",
    });
    return Promise.all([pepito.save(), peter.save(), glovo.save()]);
  })
  .then((users) => {
    const [pepito, peter, glovo] = users;
    const fullStack = new Job({
      company: glovo.id,
      title: "full Stack",
      description: "holis",
      role: "developer",
      location: "Barcelona",
      createAt: Date.now(),
      candidates: [pepito.id, peter.id],
    });

    return Promise.all([fullStack.save()]);
  })

  .then(() => disconnect())
  .then(() => console.log("disconnected"));
