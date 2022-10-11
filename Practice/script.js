const profile = [
  {
    id: 1,
    name: "Ashwini",
  },
  {
    id: 10,
    name: "Vishal",
  },
];

const orders = [
  {
    userId: 1,
    productId: 101,
    productName: "Samsung Galaxy s2",
  },
  {
    userId: 1,
    productId: 102,
    productName: "Samsung Galaxy Watch",
  },
  {
    userId: 10,
    productId: 103,
    productName: "Samsung LED TV",
  },
];

const findUsersOrders = () => {
  const finalDetails = [];
  for (let i = 0; i < profile.length; i++) {
    for (let j = 0; j < orders.length; j++) {
      if (profile[i].id == orders[j].userId) {
        finalDetails.push({
          userid: profile[i].id,
          name: profile[i].name,
          orders: [
            {
              productId: orders[j].productId,
              productName: orders[j].productName,
            },
          ],
        });
      }
    }
  }
  return finalDetails;
};

findUsersOrders();

// Output Result

const finalDetails = [
  {
    userId: 1,
    name: "Ashwini",
    orders: [
      {
        productId: 101,
        productName: "Samsung Galaxy s2",
      },
      {
        productId: 102,
        productName: "Samsung Galaxy Watch",
      },
    ],
  },
  {
    userId: 10,
    name: "Vishal",
    orders: [
      {
        productId: 103,
        productName: "Samsung LED TV",
      },
    ],
  },
];
