const { connect, disconnect } = require("mongoose");
const {
  User,
  CreditCard,
  Property,
  Brand,
  Product,
  Stock,
  Order,
} = require("./models");

connect("mongodb://localhost:27017/demo-db")
  .then(() => console.log("connected"))
  .then(() =>
    Promise.all([
      User.deleteMany(),
      Property.deleteMany(),
      CreditCard.deleteMany(),
      Brand.deleteMany(),
      Product.deleteMany(),
      Stock.deleteMany(),
      Order.deleteMany(),
    ])
  )

  .then(() => {
    const agua = new User({
      name: "Agua Cate",
      email: "agua@cate.com",
      password: "123123123",
    });
    const ora = new User({
      name: "Ora Culo",
      email: "ora@culo.com",
      password: "123123123",
    });

    return Promise.all([agua.save(), ora.save()]);
  })
  .then((users) => {
    const [agua, ora] = users;

    const aguaCard = new CreditCard({
      fullName: "Agua Cate Quesis",
      number: "1234 1234 1234 1234",
      expiration: new Date(),
    });
    agua.creditCards.push(aguaCard);

    const aguaCard2 = new CreditCard({
      fullName: "Agua Cate Quesis",
      number: "3456 3456 3456 3456",
      expiration: new Date(),
    });
    agua.creditCards.push(aguaCard2);

    const oraCard = new CreditCard({
      fullName: "Ora Culo Quesis",
      number: "2345 2345 2345 2345",
      expiration: new Date(),
    });
    ora.creditCards.push(oraCard);

    return Promise.all([agua.save(), ora.save()]);
  })

  .then(() => {
    const nike = new Brand({ name: "Nike" });
    const adidas = new Brand({ name: "Adidas" });
    const converse = new Brand({ name: "Converse" });

    return Promise.all([nike.save(), adidas.save(), converse.save()]);
  })
  .then(([nike, adidas, converse]) => {
    const airMax = new Product({
      brand: nike.id,
      model: "Air Max",
      cost: 100,
      price: 120,
      serial: "NIKE-SERIAL-123123123",
      image:
        "https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco/04f7ca5f-2412-4511-993c-2e08e542eb33/air-max-90-zapatillas-6SdNzK.png",
    });
    const airMax2 = new Product({
      brand: nike.id,
      model: "Air Max 2",
      cost: 110,
      price: 135,
      serial: "NIKE-SERIAL-234234234",
      image: "https://m.media-amazon.com/images/I/61S9rdrwGsL._AC_UY395_.jpg",
    });
    const vaporMax = new Product({
      brand: nike.id,
      model: "Vapor Max",
      cost: 105,
      price: 125,
      serial: "NIKE-SERIAL-345345345",
      image:
        "https://cdn.shopify.com/s/files/1/0933/1060/products/nike-air-vapormax-flyknit-3-black-white-metallic-silver-aj6900-002_1800x1800.jpg?v=1556750119",
    });

    const nikes = [airMax, airMax2, vaporMax];

    const nizza = new Product({
      brand: adidas.id,
      model: "Nizza",
      cost: 80,
      price: 100,
      serial: "ADIDAS-SERIAL-123123123",
      image:
        "https://assets.adidas.com/images/w_600,f_auto,q_auto/2f52d303fbc241f7a7e0ab960163bef6_9366/Zapatilla_Nizza_Platform_Mid_Negro_FY2783_01_standard.jpg",
    });
    const stanSmith = new Product({
      brand: adidas.id,
      model: "Stan Smith",
      cost: 90,
      price: 110,
      serial: "ADIDAS-SERIAL-234234234",
      image: "https://m.media-amazon.com/images/I/51F5MtideYL._AC_UY695_.jpg",
    });

    const adidass = [nizza, stanSmith];

    const allStar = new Product({
      brand: converse.id,
      model: "All Star",
      cost: 60,
      price: 80,
      serial: "CONVERSE-SERIAL-123123123",
      image:
        "https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco/toqshuuheqdl3ljzobnc/calzado-converse-chuck-taylor-all-star-de-perfil-alto-xX439O.png",
    });
    const chuck70 = new Product({
      brand: converse.id,
      model: "Chuck 70",
      cost: 65,
      price: 95,
      serial: "CONVERSE-SERIAL-456456456",
      image:
        "https://img01.ztat.net/article/spp-media-p1/ab5a625b6c6f47cfae00eb80fe32de75/8bd242a829f64662948c68e0075383ec.jpg?imwidth=1800&filter=packshot",
    });

    const converses = [allStar, chuck70];

    return Promise.all([
      Promise.all(nikes.map((nike) => nike.save())),
      Promise.all(adidass.map((adidas) => adidas.save())),
      Promise.all(converses.map((converse) => converse.save())),
    ]);
  })
  .then(
    ([[airMax, airMax2, vaporMax], [nizza, stanSmith], [allStar, chuck70]]) => {
      const airMaxBlack42 = new Stock({
        product: airMax.id,
        quantity: 150,
        color: "black",
        size: 42,
      });
      const airMaxWhite42 = new Stock({
        product: airMax.id,
        quantity: 100,
        color: "white",
        size: 42,
      });
      const airMaxBlack43 = new Stock({
        product: airMax.id,
        quantity: 100,
        color: "black",
        size: 43,
      });
      const airMaxWhite43 = new Stock({
        product: airMax.id,
        quantity: 75,
        color: "white",
        size: 43,
      });

      const airMaxStocks = [
        airMaxBlack42,
        airMaxWhite42,
        airMaxBlack43,
        airMaxWhite43,
      ];

      const nizzaBlack42 = new Stock({
        product: nizza.id,
        quantity: 40,
        color: "black",
        size: 42,
      });
      const nizzaWhite42 = new Stock({
        product: nizza.id,
        quantity: 50,
        color: "white",
        size: 42,
      });
      const nizzaBlack43 = new Stock({
        product: nizza.id,
        quantity: 30,
        color: "black",
        size: 43,
      });
      const nizzaWhite43 = new Stock({
        product: nizza.id,
        quantity: 40,
        color: "white",
        size: 43,
      });

      const nizzasStocks = [
        nizzaBlack42,
        nizzaWhite42,
        nizzaBlack43,
        nizzaWhite43,
      ];

      return Promise.all([
        Promise.all(airMaxStocks.map((stock) => stock.save())),
        Promise.all(nizzasStocks.map((stock) => stock.save())),
      ]);
    }
  )
  .then(
    ([
      [airMaxBlack42, airMaxWhite42, airMaxBlack43, airMaxWhite43],
      [nizzaBlack42, nizzaWhite42, nizzaBlack43, nizzaWhite43],
    ]) => {
      return User.findOne({ name: "Agua Cate" })
        .then((user) => {
          const airMaxBlack42Order = new Order({
            stock: airMaxBlack42.id,
            user: user.id,
            quantity: 1,
            date: new Date(),
          });

          airMaxBlack42.quantity--;

          return Promise.all([airMaxBlack42.save(), airMaxBlack42Order.save()]);
        })
        .then(([airMaxBlack42, airMaxBlack42Order]) => {
          return airMaxBlack42Order.id;
        });
    }
  )
  .then((orderId) => {
    return Order.findById(orderId)
      .then((order) => {
        console.log("order", order._doc);

        return Stock.findById(order.stock);
      })
      .then((stock) => {
        console.log("stock", stock._doc);

        return Product.findById(stock.product);
      })
      .then((product) => {
        console.log("product", product._doc);

        return Brand.findById(product.brand);
      })
      .then((brand) => console.log("brand", brand));
  })

  .then(() => disconnect())
  .then(() => console.log("disconnected"));
